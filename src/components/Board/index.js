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
    console.log(selectedVagaId)
    if(!result.destination) { return; }
    const startIndex = result.source.index
    const endIndex = result.destination.index
    const vagasCopy = [...vagas]
    const vagasOriginal = [...vagas]
    const [removed] = vagasCopy.splice(startIndex, 1)
    vagasCopy.splice(endIndex, 0, removed)
    dispatch(actions.setVagas(vagasCopy))
    // console.log(vagasCopy)
    // set PRI of draggableID to endIndex
    // 1,2,3,4,5,6,7 start5, end0 (6 coisas vao mudar de lugar)
    // do index 0 a 4 vao ganhar ++
    // finaliza colocando o index 5 no index 0
    // 6,1,2,3,4,5,7 endindex eh menor do q o original, os demais dao um ++ no index
    //
    //1,2,3,4,5,6,7 start4, end2 (3 coisas vao mudar de lugar)
    //1,2,5,3,4,6,7 index 2 e 3 vao ganhar ++
    //finaliza colocando index 4 no index 2

    //1,2,3,4,5,6,7 start0, end3 (4 coisas vao mudar de lugar)
    // index 1 a index 3 vao ganhar --
    // finaliza colocando o index 0 no index 3
    //2,3,4,1,5,6,7 endindex eh maior do q o original, os demais dao um -- no index

    //1,2,3,4,5,6,7 start2, end4 (3 coisas vao mudar de lugar)
    //1,2,4,5,3,6,7 index 3 e 4 vao ganhar --
    // finaliza coloando index 2 no index 4
    // o end index eh maior do q o original, --

    let updates = {}

    // app.database().ref("hr").update({
    //   "4492/pri": 1,
    //   "4526/pri": 2,
    // });

    if(startIndex > endIndex) { // movendo de baixo pra cima
      // update PRI from vagasOriginal[endIndex] to vagasOriginal[startIndex]
      // app.database().ref('hr').child(selectedVaga).update({
      //   pri: endIndex + 1
      // })
      for(let i = endIndex; i <= startIndex - 1; i++) {
        vagasOriginal[i].pri = i + 1
        updates[`${vagasOriginal[i].id}/pri`] = vagasOriginal[i].pri
      }
      vagasOriginal[startIndex].pri = endIndex
      updates[`${selectedVagaId}/pri`] = endIndex
    } else {
      // app.database().ref('hr').child(selectedVaga).update({
      //   pri: endIndex + 1
      // })
      for(let i = startIndex + 1; i <= endIndex; i++) {
        vagasOriginal[i].pri = i - 1
        updates[`${vagasOriginal[i].id}/pri`] = vagasOriginal[i].pri
      }
      vagasOriginal[startIndex].pri = endIndex
      updates[`${selectedVagaId}/pri`] = endIndex
    }
      console.log(updates)

    app.database().ref("hr").update(updates);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <List currentTab={currentTab} />
      </Container>
    </DragDropContext>
  );
}
