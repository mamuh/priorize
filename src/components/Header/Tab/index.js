import React from 'react';
import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../actions';
import c from 'classnames';

export default function Tab(props) {
  const dispatch = useDispatch()
  const currentTab = useSelector(state => state.currentTab);
  const isActive = currentTab === props.name;

  const changeTab = (e) => {
    dispatch(actions.changeCurrentTab(e.target.innerHTML))
  }

  return (
    <Container>
      <div className={c({'tab': true, 'tab-active': isActive})} onClick={changeTab}>
        {props.name}
      </div>
    </Container>
  );
}
