import React from 'react';
import { Container } from './styles';
import { Draggable } from 'react-beautiful-dnd';


export default function Card(props) {

  return (
    <Draggable draggableId={props.id.toString()} index={props.index}>
    {(provided, snapshot) => (
      <Container
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <header>
          { true && <img src={`https://picsum.photos/200/300?random=${props.index}`} alt="Logo" /> }
          <h5>{props.name}</h5>
          <h3>|||</h3>
        </header>
      </Container>

    )}
    </Draggable>
  );
}
