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
import GridConstants from '../../constants/GridConstants';

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
      }],
      direction: 'right'
    };
    this.handlers = {
      setDirection: GridConstants.DIRECTION,
      move: GridConstants.MOVE
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

  /**
   * Set direction.
   *
   * @method setDirection
   * @param {String} direction Direction
   */
  setDirection(direction) {
    this.state.direction = direction;
    this.hasChanged();
  }

  /**
   * Move the snake.
   *
   * @method move
   */
  move() {
    let pos = this.state.snake[this.state.snake.length-1];
    let newpos;
    switch(this.state.direction) {
    case 'right':
      newpos = {
        x: (pos.x + 21) % 20,
        y: pos.y
      }
      break;  
    case 'left':
      newpos = {
        x: (pos.x + 19) % 20,
        y: pos.y
      }
      break;  
    case 'up':
      newpos = {
        x: pos.x,
        y: (pos.y + 14) % 15
      }
      break;  
    case 'down':
      newpos = {
        x: pos.x,
        y: (pos.y + 16) % 15
      }
      break;  
    }
    this.state.snake.push(newpos);
    this.hasChanged();
  }
}

export default GridStore;
