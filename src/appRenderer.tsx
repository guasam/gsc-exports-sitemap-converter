/**
 * Add your renderer source code here
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { inDev } from '@common/utils';

/** Render application using React DOM */
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);

/** Hot module replacement (HMR) */
if (inDev() && module.hot) module.hot.accept();
