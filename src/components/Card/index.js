import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';
import { Container } from './styles';
import { Draggable } from 'react-beautiful-dnd';


export default function Card(props) {
  const {
    id,
    criado_em,
    expira_em,
    ic_logo,
    key,
    nom_cliente,
    nom_gerente_comercial,
    nom_recrutadora,
    pct_marg,
    pri,
    qtd_aberta,
    qtd_total,
    status,
    tip_contrato,
    titulo,
    vlr_ben,
    vlr_clt,
    vlr_fat
  } = props.data
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
    <Draggable draggableId={id.toString()} index={props.index}>
    {(provided, snapshot) => (
      <Container
        onClick={() => toggleExpanded()}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <header>
          { true && <img src={ic_logo} alt="Logo da empresa" /> }
          <div className="job-name">
            <h5>{id} - {titulo} - {qtd_aberta} vagas abertas</h5>
          </div>
          <h3>|||</h3>
        </header>

        <div className={isOpen ? "details card-expanded" : "details"}>
          <div>
            <p className="faded">Abertura:</p>
            <p className="card-data">{criado_em}</p>
          </div>
          <div>
            <p className="faded">Término:</p>
            <p className="card-data">{expira_em}</p>
          </div>
          <div>
            <p className="faded">Vagas:</p>
            <p className="card-data">{qtd_aberta}/{qtd_total}</p>
          </div>
          <div>
            <p className="faded">Remuneração:</p>
            <div className="card-data remuneracao">
            R$ XXXX
            </div>
          </div>
          <div>
            <p className="faded">Vendas:</p>
            <p className="card-data">{vlr_fat}</p>
          </div>
        </div>
      </Container>
    )}
    </Draggable>
  );
}

            // {remuneracao.map((rem, index) => (<div key={index}>{rem.tipo}: {rem.valor}</div>))}
