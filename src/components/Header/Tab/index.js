import React from 'react';
import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../actions';
import c from 'classnames';

export default function Tab(props) {
  const dispatch = useDispatch()

  const changeTab = (e) => {
    e.target.classList.add("tab-active")
    console.log(e.target.innerHTML)
    dispatch(actions.changeCurrentTab(e.target.innerHTML))
  }

  return (
    <Container>
      <div className={c({'tab': true, 'tab-active': false})} onClick={changeTab}>
        {props.name}
      </div>
    </Container>
  );
}
