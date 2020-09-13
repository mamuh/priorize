import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import { Container } from './styles';
import { Droppable } from 'react-beautiful-dnd';
import firebase from "firebase";
import app from '../../base';

export default function List(props) {

  // const vag = useSelector(state => state.vagas)
  const [vagas, setVagas] = useState([])


  // const getVagasData = () => {
  //   let ref = firebase.database().ref('hr')
  //   ref.on('value', snapshot => {
  //     const state = snapshot.val()
  //     setVagas(['hi', 'ho'])
  //     console.log(vagas)
  //   })
  // }

  const addTest = () => {
    const value = "testing again"
    const dbRef = app.database().ref('test')
    const test = {
      value
    }
    dbRef.push(test)
  }

  useEffect(() => {
    const dbRef = app.database().ref('test')
    dbRef.on('value', snapshot => {
      console.log(snapshot.val())
    })
  })

  return (
  <Droppable droppableId="priorizadas">
    {(provided, snapshot) => (
      <Container
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        <ul>
          {vagas.map((vaga, index) => (
            props.currentTab === vaga.status ?
              <Card key={vaga.id} index={index} id={vaga.id} name={`${vaga.id} - ${vaga.name}`} data={vaga} />
              :
             (null)
          ))}
        </ul>

        <button onClick={addTest}>Add to DB</button>
        <img src="https://image.flaticon.com/icons/svg/463/463292.svg" alt="" width="100" className="footer-clear" />
      </Container>
    )}
  </Droppable>
  );
}
