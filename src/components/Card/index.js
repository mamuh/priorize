import React from 'react';
import { Container } from './styles';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
// import  { useDrag } from 'react-dnd';
// import ITEM_TYPE from '../Constants'

export default function Card(props) {
  // const [{ isDragging }, dragRef] = useDrag({
  //   item: { type: ITEM_TYPE },
  //   collect: monitor => ({
  //     isDragging: monitor.isDragging(),
  //   })
  // })
  return (
    <Draggable draggableId={props.id} index={props.index} index={props.index}>
    {(provided, snapshot) => (
      <Container
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <header>
          { true && <img src={`https://picsum.photos/200/300?random=${props.index}`} alt="Logo" /> }
          <h5>{true && props.name}</h5>
          <h3>|||</h3>
        </header>
      </Container>

    )}
    </Draggable>
  );
}
