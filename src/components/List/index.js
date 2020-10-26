import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';
import Card from '../Card';
import { Container } from './styles';
import { Droppable } from 'react-beautiful-dnd';
import firebase from "firebase";
import app from '../../base';

export default function List(props) {
  const vagas = useSelector(state => state.vagas)
  const dispatch = useDispatch()

  useEffect(() => {
    const dbRef = app.database().ref('hr').orderByChild('pri')
    dbRef.on('value', snapshot => {
      const vags = snapshot.val()
      const vagasList = []
      snapshot.forEach((child, index) => {
        vagasList.push({
          ...child.val()
        })
      })
      dispatch(actions.setVagas(vagasList))
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
        {vagas ? vagas.map((vaga, index) => (
          <Card key={index} index={index} cardId={vaga.id} vaga={vaga} />
         )) : (null)}
        {provided.placeholder}
        </ul>

        <img src="https://image.flaticon.com/icons/svg/463/463292.svg" alt="" width="100" className="footer-clear" />
      </Container>
    )}
  </Droppable>
  );
}
