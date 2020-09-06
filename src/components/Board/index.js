import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';
import { Container } from './styles';
import List from '../List';
import { DragDropContext } from 'react-beautiful-dnd';

export default function Board() {
  const vagas = useSelector(state => state.vagas)
  const dispatch = useDispatch()

  const onDragEnd = (result) => {
    if(!result.destination) { return; }
    const startIndex = result.source.index
    const endIndex = result.destination.index
    const vagasCopy = Array.from(vagas)
    const [removed] = vagasCopy.splice(startIndex, 1)
    vagasCopy.splice(endIndex, 0, removed)
    dispatch(actions.setVagas(vagasCopy))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <List />
      </Container>
    </DragDropContext>
  );
}
