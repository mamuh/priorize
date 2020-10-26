import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';
import { Container } from './styles';
import List from '../List';
import { DragDropContext } from 'react-beautiful-dnd';
import firebase from "firebase";
import app from '../../base';

export default function Board() {
  const vagas = useSelector(state => state.vagas)
  const currentTab = useSelector(state => state.currentTab)
  const dispatch = useDispatch()

  const onDragEnd = (result) => {
    console.log(result)
    const selectedVagaId = vagas[result.source.index].id
    if(!result.destination) { return; }
    const startIndex = result.source.index
    const endIndex = result.destination.index
    const vagasCopy = [...vagas]
    const vagasOriginal = [...vagas]
    const [removed] = vagasCopy.splice(startIndex, 1)
    vagasCopy.splice(endIndex, 0, removed)
    dispatch(actions.setVagas(vagasCopy))

    let updates = {} // armazenando fila de cards para ser atualizada no firebase

    if(startIndex > endIndex) { // movendo card de baixo pra cima
      for(let i = endIndex; i <= startIndex - 1; i++) {
        vagasOriginal[i].pri = i + 1
        updates[`${vagasOriginal[i].id}/pri`] = vagasOriginal[i].pri
      }
      vagasOriginal[startIndex].pri = endIndex
      updates[`${selectedVagaId}/pri`] = endIndex
    } else { // movendo card de cima para baixo
      for(let i = startIndex + 1; i <= endIndex; i++) {
        vagasOriginal[i].pri = i - 1
        updates[`${vagasOriginal[i].id}/pri`] = vagasOriginal[i].pri
      }
      vagasOriginal[startIndex].pri = endIndex
      updates[`${selectedVagaId}/pri`] = endIndex
    }

    app.database().ref("hr").update(updates); // atualizando o firebase com todos os cards que mudaram de ordem
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <List currentTab={currentTab} />
      </Container>
    </DragDropContext>
  );
}
