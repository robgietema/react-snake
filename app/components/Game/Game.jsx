/**
 * Game component.
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
import Grid from '../Grid/Grid';
import './Game.scss';

/**
 * This class defines the Game component.
 *
 * @class Game
 */
class Game extends React.Component {

  /**
   * Render method.
   *
   * @method render
   * @return Markup for the component
   */
  render() {
    return (
      <div className="game">
        <Grid />
      </div>
    );
  }
}

export default Game;
