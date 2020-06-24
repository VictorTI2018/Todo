import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

