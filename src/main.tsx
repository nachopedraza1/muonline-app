import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { App } from './App'
import { AppTheme } from './theme/AppTheme';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  /*   <React.StrictMode> */
  <BrowserRouter>
    <AppTheme>
      <App />
    </AppTheme>
  </BrowserRouter>
  /* </React.StrictMode>, */
)
