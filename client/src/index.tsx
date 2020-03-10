import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import GlobalStyle from 'styledComponents/GlobalStyle'
import App from 'containers/App';

ReactDOM.render(
  <>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </>,
  document.getElementById('root')
);
