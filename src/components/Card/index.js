import React, { useState } from 'react';
import c from 'classnames';
import { Container } from './styles';
import { Draggable } from 'react-beautiful-dnd';


export default function Card(props) {
  const { id, name, logo, status } = props.data
  const [isOpen, toggleCard] = useState(false)

  return (
    <Draggable draggableId={id.toString()} index={props.index}>
    {(provided, snapshot) => (
      <Container
        onClick={() => toggleCard(!isOpen)}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <header>
          { true && <img src={logo} alt="Logo" /> }
          <div className="job-name">
            <h5>{id} - ({status}) - {name}</h5>
          </div>
          <h3>|||</h3>
        </header>
        <div className={c({'details': true, 'card-expanded': isOpen})}>
          rest of the content here
        </div>
      </Container>
    )}
    </Draggable>
  );
}
