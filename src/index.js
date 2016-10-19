import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/Main';

import About from './components/pages/AboutComponent';
import Feature from './components/pages/FeatureComponent';
import Lab from './components/pages/LabComponent';
import Work from './components/pages/WorkComponent';

// Render the main component into the dom
const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Feature}></IndexRoute>
      <Route path='about' component={About}></Route>
      <Route path='lab' component={Lab}></Route>
      <Route path='work' component={Work}></Route>
    </Route>
  </Router>,
app);
