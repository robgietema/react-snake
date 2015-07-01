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
import _ from 'lodash';

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
      meetups: [],
      snake: [{
        x: 0,
        y: 0
      }, {
        x: 1,
        y: 0
      }],
      direction: 'right',
      hit: false
    };
    this.handlers = {
      setDirection: GridConstants.DIRECTION,
      move: GridConstants.MOVE,
      addMeetup: GridConstants.ADD_MEETUP
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
   * Get the hit.
   *
   * @method hit
   * @return {Object} Hit object
   */
  getHit() {
    return this.state.hit;
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
   * Add meetup.
   *
   * @method addMeetup
   * @param {Object} meetup Meetup data
   */
  addMeetup(meetup) {
    this.state.meetups.push(meetup);
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
    let hit = false;
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
    _.forEach(this.state.snake, (n) => {
      if (newpos.x === n.x && newpos.y === n.y) {
        console.log('gameover');
      }
    });
    _.forEach(this.state.meetups, (n) => {
      if (newpos.x === n.x && newpos.y === n.y) {
        hit = n;
      }
    });
    if (hit) {
      this.state.hit = hit;
      _.pull(this.state.meetups, hit);
    } else {
      this.state.snake.shift();
    }
    this.state.snake.push(newpos);

    this.hasChanged();
  }
}

export default GridStore;
