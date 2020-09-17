import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';
import { Container } from './styles';
import List from '../List';
import { DragDropContext } from 'react-beautiful-dnd';
import firebase from "firebase";
import app from '../../base';

export default function Board() {
  const vagas = useSelector(state => state.vagas)
  const currentTab = useSelector(state => state.currentTab)
  const dispatch = useDispatch()

  const onDragEnd = (result) => {
    console.log(result)
    if(!result.destination) { return; }
    const startIndex = result.source.index
    const endIndex = result.destination.index
    const vagasCopy = Array.from(vagas)
    const [removed] = vagasCopy.splice(startIndex, 1)
    vagasCopy.splice(endIndex, 0, removed)
    dispatch(actions.setVagas(vagasCopy))
  }

  // const updateDatabase = (vaga, endIndex) => {
  //   const dbRef = app.database().ref('hr').child(vaga.id)
  //   dbRef.update({
  //     pri: endIndex
  //   })
  // }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <List currentTab={currentTab} />
      </Container>
    </DragDropContext>
  );
}
