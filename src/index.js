import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import vagasReducer from './reducers/vagas_reducer';

const reducers = combineReducers({
  vagas: vagasReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = applyMiddleware(logger);


const initialState = {
  vagas: [
    {
      id: 1008,
      name: "Analista Desenvolvedor Java SR",
      logo: "https://picsum.photos/200/300?random=1",
      abertura: "08/10/2020",
      termino: "21/10/2020",
      vagas: 3,
      remuneracao: [
        {
          tipo: "CLT",
          valor: 1200.30
        },
        {
          tipo: "Ben",
          valor: 600.27
        },
      ],
      venda: 900
    },
    {
      id: 2009,
      name: "Analista Desenvolvedor Java SR",
      logo: "https://picsum.photos/200/300?random=1",
      abertura: "08/10/2020",
      termino: "21/10/2020",
      vagas: 3,
      remuneracao: [
        {
          tipo: "CLT",
          valor: 1200.30
        },
        {
          tipo: "Ben",
          valor: 600.27
        },
      ],
      venda: 2900
    },
    {
      id: 3165,
      name: "Analista Desenvolvedor Java SR",
      logo: "https://picsum.photos/200/300?random=1",
      abertura: "08/10/2020",
      termino: "21/10/2020",
      vagas: 3,
      remuneracao: [
        {
          tipo: "CLT",
          valor: 1200.30
        },
        {
          tipo: "Ben",
          valor: 600.27
        },
      ],
      venda: 200
    },
    {
      id: 408,
      name: "Analista Desenvolvedor Java SR",
      logo: "https://picsum.photos/200/300?random=1",
      abertura: "08/10/2020",
      termino: "21/10/2020",
      vagas: 3,
      remuneracao: [
        {
          tipo: "CLT",
          valor: 1200.30
        },
        {
          tipo: "Ben",
          valor: 600.27
        },
      ],
      venda: 100
    }
  ]
}


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



