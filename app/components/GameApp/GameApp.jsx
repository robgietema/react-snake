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
import Game from '../Game/Game';
const { ApplicationContainer } = Marty;
import GridStore from '../../stores/GridStore/GridStore';
import GridActions from '../../actions/GridActions';

/**
 * This class defines the Snake application.
 *
 * @class SnakeApplication
 */
class GameApplication extends Marty.Application {

  /**
   * Class constructor
   *
   * @method constructor
   * @constructor
   */
  constructor(options) {
    super(options);
    this.register({
      'gridStore': GridStore,
      'gridActions': GridActions
    });
  }
}

const app = new GameApplication();

/**
 * This class defines the Game component.
 *
 * @class SnakeApp
 */
class GameApp extends React.Component {

  /**
   * Render method.
   *
   * @method render
   * @return Markup for the component
   */
  render() {
    return (
      <ApplicationContainer app={app}>
        <Game />
      </ApplicationContainer>
    );
  }
}

export default GameApp;
