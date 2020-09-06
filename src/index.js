import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import { initialState } from './temporary_db';

import vagasReducer from './reducers/vagas_reducer';
import currentTabReducer from './reducers/current_tab_reducer';

const reducers = combineReducers({
  vagas: vagasReducer,
  currentTab: currentTabReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = applyMiddleware(logger);



ReactDOM.render(
  <Provider store={createStore(
    reducers,
    initialState,
    composeEnhancers(middlewares)
  )}>
    <App />
  </Provider>,
  document.getElementById('root')
);



