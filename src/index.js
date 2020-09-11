import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import firebase from "firebase/app";
import { FirebaseAuthProvider, FirebaseAuthConsumer } from "@react-firebase/auth";

import { initialState } from './temporary_db';

import vagasReducer from './reducers/vagas_reducer';
import currentTabReducer from './reducers/current_tab_reducer';
import expandedReducer from './reducers/expanded_reducer';
import ignoreExpandedReducer from './reducers/ignore_expanded_reducer'

const reducers = combineReducers({
  vagas: vagasReducer,
  currentTab: currentTabReducer,
  allExpanded: expandedReducer,
  ignoreExpanded: ignoreExpandedReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(logger);

var firebaseConfig = {
    apiKey: "AIzaSyBcpFUhtYeCqawdjTfxvmraA-FoedPmRk0",
    authDomain: "priorize.firebaseapp.com",
    databaseURL: "https://priorize.firebaseio.com",
    projectId: "priorize",
    storageBucket: "priorize.appspot.com",
    messagingSenderId: "914438730685",
    appId: "1:914438730685:web:71aec05c2f7d19f1cb98d4"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  // <FirebaseAuthProvider firebase={firebase}>
    <Provider store={createStore(
      reducers,
      initialState,
      composeEnhancers(middlewares)
    )}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/vagas" exact component={App} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </Provider>,
  // </FirebaseAuthProvider>,
  document.getElementById('root')
);



