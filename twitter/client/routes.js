import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Index from '../imports/ui/index.js';
import Search from '../imports/ui/search.js';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route  exact path="/" component={Index}/>
      <Route  path="/search" component={Search}/>
    </div>
  </Router>
);