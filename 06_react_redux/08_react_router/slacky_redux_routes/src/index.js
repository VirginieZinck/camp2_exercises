import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectedApp from './App';
import ConnectedLogin from "./Login";

import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import reducers from "./store"
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'


const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  reducers,
  applyMiddleware(middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={ConnectedLogin}/>
        <Route path="/slacky" component={ConnectedApp}/>
      </div>
    </ConnectedRouter>

  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
