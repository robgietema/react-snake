/**
 * Grid Container.
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

import Marty from 'marty';
import Grid from '../../components/Grid/Grid';

export default Marty.createContainer(Grid, {
  
  listenTo: 'gridStore',
  
  componentDidMount() {
    this.app.meetupsQueries.getMeetups();
    
    window.setInterval(function () {
      this.app.gridActions.move();
    }.bind(this), 200);

    window.setInterval(function () {
      this.app.gridActions.addMeetup({
        x: parseInt(Math.random() * 20, 10),
        y: parseInt(Math.random() * 15, 10)
      });
    }.bind(this), 2000);

    window.addEventListener('keydown', function(event) {
      console.log(event.keyCode);
      switch(event.keyCode) {
      case 39:
        this.app.gridActions.setDirection('right');
        break;
      case 40:
        this.app.gridActions.setDirection('down');
        break;
      case 38:
        this.app.gridActions.setDirection('up');
        break;
      case 37:
        this.app.gridActions.setDirection('left');
        break;
      }
    }.bind(this));
  },
  fetch: {
    snake() {
      return this.app.gridStore.getSnake();
    },
    meetups() {
      return this.app.gridStore.getMeetups();
    }
  }
});
