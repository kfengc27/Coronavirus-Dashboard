import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Layout from './Layout';
import * as ROUTES from './routes';

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={null}>
          <Switch>
            {Object.values(ROUTES).map(({ path, component }) => (
              <Route path={path} component={component} exact key={path} />
            ))}
            <Redirect to="/data" />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}
