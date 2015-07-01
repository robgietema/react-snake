/**
 * Grid store.
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

/**
 * This class defines the Grid store.
 *
 * @class GridStore
 */
class GridStore extends Marty.Store {

  /**
   * Class constructor.
   *
   * @method constructor
   * @constructor
   */
  constructor(options) {
    super(options);
    this.state = {
      meetups: [{
        x: 5,
        y: 9
      }, {
        x: 10,
        y: 6 
      }],
      snake: [{
        x: 0,
        y: 1
      }, {
        x: 0,
        y: 2
      }]
    };
  }

  /**
   * Get the meetups.
   *
   * @method getMeetups
   * @return {Array} Array of meetups
   */
  getMeetups() {
    return this.state.meetups;
  }

  /**
   * Get the snake.
   *
   * @method getSnake
   * @return {Array} Array of the snake coords
   */
  getSnake() {
    return this.state.snake;
  }
}

export default GridStore;
