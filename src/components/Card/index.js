import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';
import { Container } from './styles';
import { Draggable } from 'react-beautiful-dnd';


export default function Card({ vaga, index, cardId }) {
  // const {
  //   id,
  //   criado_em,
  //   expira_em,
  //   ic_logo,
  //   key,
  //   nom_cliente,
  //   nom_gerente_comercial,
  //   nom_recrutadora,
  //   pct_marg,
  //   pri,
  //   qtd_aberta,
  //   qtd_total,
  //   status,
  //   tip_contrato,
  //   titulo,
  //   vlr_ben,
  //   vlr_clt,
  //   vlr_fat
  // } = vaga
  let [isOpen, toggleCard] = useState(false)
  const allExpanded = useSelector(state => state.allExpanded)
  const ignoreExpanded = useSelector(state => state.ignoreExpanded)
  const dispatch = useDispatch()


  const toggleExpanded = () => {
    dispatch(actions.toggleIgnoreExpanded(true))
    toggleCard(!isOpen)
  }

  useEffect(() => {
    if (!ignoreExpanded) {
      if (allExpanded) {
        toggleCard(true)
      } else {
        toggleCard(false)
      }
    }
  })

  return (
    <Draggable draggableId={index.toString()} index={index}>
    {(provided, snapshot) => (
      <Container
        //onClick={() => toggleExpanded()}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <header>
          { vaga.ic_logo && <img src={vaga.ic_logo} alt="Logo da empresa" /> }
          <div className="job-name">
            <h5>{vaga.id} - {vaga.titulo} - {vaga.qtd_aberta} vagas abertas (PRI{vaga.pri})</h5>
          </div>
          <h3>|||</h3>
        </header>

        <div className={isOpen ? "details card-expanded" : "details"}>
          <div>
            <p className="faded">Abertura:</p>
            <p className="card-data">{vaga.criado_em && vaga.criado_em.substr(0,10)}</p>
          </div>
          <div>
            <p className="faded">Término:</p>
            <p className="card-data">{vaga.expira_em && vaga.expira_em.substr(0,10)}</p>
          </div>
          <div>
            <p className="faded">Vagas:</p>
            <p className="card-data">{vaga.qtd_aberta}/{vaga.qtd_total}</p>
          </div>
          <div>
            <p className="faded">Remuneração:</p>
            <div className="card-data remuneracao">
            {vaga.vlr_clt}
            </div>
          </div>
          <div>
            <p className="faded">Vendas:</p>
            <p className="card-data">{vaga.vlr_fat}</p>
          </div>
        </div>
      </Container>
    )}
    </Draggable>
  );
}
