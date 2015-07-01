/**
 * Routes.
 *
 * @author Rob Gietema
 * @licstart  The following is the entire license notice for the JavaScript
 *            code in this page.
 *
 * Copyright (C) 2015 Rob Gietema
 *
 * @licence The above is the entire license notice for the JavaScript code in
 *          this page.
 * @version 0.0.1
 */

import React from 'react';
import Router from 'react-router';
const { Route, DefaultRoute } = Router;
import SnakeApp from './components/SnakeApp/SnakeApp';

const routes = (
  <Route name="app" path="/">
    <DefaultRoute handler={SnakeApp} />
  </Route>
);

export default routes;
