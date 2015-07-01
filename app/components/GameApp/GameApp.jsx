/**
 * Snake app.
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
import Marty from 'marty';
import Snake from '../Snake/Snake';
const { ApplicationContainer } = Marty;

/**
 * This class defines the Snake application.
 *
 * @class SnakeApplication
 */
class SnakeApplication extends Marty.Application {

  /**
   * Class constructor
   *
   * @method constructor
   * @constructor
   */
  constructor(options) {
    super(options);
  }
}

const app = new SnakeApplication();

/**
 * This class defines the Snake component.
 *
 * @class SnakeApp
 */
class SnakeApp extends React.Component {

  /**
   * Render method.
   *
   * @method render
   * @return Markup for the component
   */
  render() {
    return (
      <ApplicationContainer app={app}>
        <Snake />
      </ApplicationContainer>
    );
  }
}

export default SnakeApp;
