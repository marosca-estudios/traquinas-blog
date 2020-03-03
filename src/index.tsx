import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from 'styledComponents/GlobalStyle'
import App from 'containers/App';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
