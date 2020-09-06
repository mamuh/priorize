import React from 'react';
import { Container } from './styles';
import List from '../List';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

export default function Board() {
  return (
    <DragDropContext>
      <Container>
        <List />
      </Container>
    </DragDropContext>
  );
}
