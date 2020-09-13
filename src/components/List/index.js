import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import { Container } from './styles';
import { Droppable } from 'react-beautiful-dnd';
import firebase from "firebase";
import app from '../../base';

export default function List(props) {
  const [vagas, setVagas] = useState([])

  // const addTest = () => {
  //   const value = "testing again"
  //   const dbRef = app.database().ref('test')
  //   const test = {
  //     value
  //   }
  //   dbRef.push(test)
  // }

  useEffect(() => {
    const dbRef = app.database().ref('hr')
    dbRef.on('value', snapshot => {
      const vagas = snapshot.val()
      const vagasList = []
      for (let id in vagas) {
        vagasList.push(vagas[id])
      }
      setVagas(vagasList)
      console.log(vagasList)
    })
  }, [])

  return (
  <Droppable droppableId="priorizadas">
    {(provided, snapshot) => (
      <Container
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        <ul>
          {vagas.map((vaga, index) => (
            // props.currentTab === vaga.status ?
              <li key={vaga.id}><Card index={index} id={vaga.id} data={vaga} /></li>
             //  :
             // (null)
          ))}
        </ul>

        <img src="https://image.flaticon.com/icons/svg/463/463292.svg" alt="" width="100" className="footer-clear" />
      </Container>
    )}
  </Droppable>
  );
}


        // <button onClick={addTest}>Add to DB</button>
