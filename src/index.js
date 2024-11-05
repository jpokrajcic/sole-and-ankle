import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root'),
);
