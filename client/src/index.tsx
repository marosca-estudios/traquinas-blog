import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
} from 'react-router-dom';

import GlobalStyle from 'styledComponents/GlobalStyle'
import App from 'containers/App';
import history from 'global/history';

ReactDOM.render(
  <>
    <Router history={history}>
      <GlobalStyle />
      <App />
    </Router>
  </>,
  document.getElementById('root')
);
