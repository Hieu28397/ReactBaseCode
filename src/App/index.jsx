/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { LOCATIONS } from 'constant';
import publicRoutes from 'routes/index';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={LOCATIONS.BLOG}>Blog</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          {publicRoutes.map((r) => (
            <Route
              path={r.path}
              component={r.component}
              key={r.path}
              exact={r.exact}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
