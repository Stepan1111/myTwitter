import { renderRoutes } from '../client/routes.js';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 
const Twitt = () => (
  <MuiThemeProvider>
    {renderRoutes()}
  </MuiThemeProvider>
);
 
ReactDOM.render(
   <Twitt />,
  document.getElementById('root')
);