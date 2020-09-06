import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import { Container } from './styles';
import { Droppable } from 'react-beautiful-dnd';

export default function List() {

  const vagas = useSelector(state => state.vagas)

  return (
  <Droppable droppableId="priorizadas">
    {(provided, snapshot) => (

      <Container
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        <ul>
          {vagas.map((vaga, index) => (
            <Card key={vaga.id} index={index} id={vaga.id} name={`${vaga.id} - ${vaga.name}`} />
          ))}

        </ul>
      </Container>
    )}
  </Droppable>
  );
}
