import React from 'react';
import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';

export default function ExpandButton() {
  const dispatch = useDispatch();
  const allExpanded = useSelector(state => state.allExpanded)

  return (
    <Container>
      <button
        onClick={() => {
          dispatch({type: 'TOGGLE_EXPANDED'});
          dispatch({type: 'TOGGLE_IGNORE', payload: false})
        }}
      >
        {allExpanded ? "ocultar todas" : "expandir todas"}
      </button>
    </Container>
  );
}
