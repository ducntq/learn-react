import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './modules/App/App';
import Login from './modules/Login/Login';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="login" component={Login}/>
  </Router>
), document.getElementById('root'))