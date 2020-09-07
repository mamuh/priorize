import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import c from 'classnames';
import { Container } from './styles';
import { Draggable } from 'react-beautiful-dnd';


export default function Card(props) {
  const { id, name, logo, status, abertura, termino, vagas, vendas, remuneracao } = props.data
  const [isOpen, toggleCard] = useState(false)
  const allExpanded = useSelector(state => state.allExpanded)
  const shouldOpen = isOpen || allExpanded

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
        <div className={c({'details': true, 'card-expanded': shouldOpen})}>
          <div>
            <p className="faded">Abertura:</p>
            <p className="card-data">{abertura}</p>
          </div>
          <div>
            <p className="faded">Término:</p>
            <p className="card-data">{termino}</p>
          </div>
          <div>
            <p className="faded">Vagas:</p>
            <p className="card-data">{vagas}</p>
          </div>
          <div>
            <p className="faded">Remuneração:</p>
            <div className="card-data remuneracao">{remuneracao.map((rem, index) => (<div key={index}>{rem.tipo}: {rem.valor}</div>))}</div>
          </div>
          <div>
            <p className="faded">Vendas:</p>
            <p className="card-data">{vendas}</p>
          </div>
        </div>
      </Container>
    )}
    </Draggable>
  );
}
