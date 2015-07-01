/**
 * Snake store.
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
 * This class defines the Snake store.
 *
 * @class SnakeStore
 */
class SnakeStore extends Marty.Store {

  /**
   * Class constructor.
   *
   * @method constructor
   * @constructor
   */
  constructor(options) {
    super(options);
    this.state = [{
      x: 0,
      y: 1
    }, {
      x: 0,
      y: 2
    }];
  }

  /**
   * Get the snake.
   *
   * @method get
   * @return {Array} Array of snake coordinates
   */
  get() {
    return this.state;
  }
}

export default SnakeStore;
