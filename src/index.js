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
// import firebase from "firebase/app";
// import { FirebaseAuthProvider, FirebaseAuthConsumer } from "@react-firebase/auth";
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

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
// const middlewares = applyMiddleware(logger);

ReactDOM.render(
    <Provider store={createStore(
      reducers,
      // composeEnhancers(middlewares)
    )}>
      <AuthProvider>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/vagas" exact component={App} />
            <PrivateRoute path="/profile" exact component={Profile} />
          </Switch>
        </Router>
      </AuthProvider>,
    </Provider>,
  document.getElementById('root')
);



