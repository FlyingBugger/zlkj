import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import {store} from './store/saga'
import registerServiceWorker from './registerServiceWorker';
import {layout as PathRouter } from './router';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" render={props=>PathRouter} />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
