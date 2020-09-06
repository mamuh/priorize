import React from 'react';
import Card from '../Card';
import { Container } from './styles';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

export default function List() {
  return (
  <Droppable droppableId="priorizadas">
    {(provided, snapshot) => (

      <Container
        ref={provided.innerRef}
        {...provided.droppableProps}
      >

        <ul>
          <Card name={"oiii numero um 1111"} index={0} id="zero" />
          <Card name={"oii numero dois 2222"} index={1} id="one" />
        </ul>
      </Container>

    )}
  </Droppable>
  );
}
