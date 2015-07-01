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
  fetch: {
    snake() {
      return this.app.gridStore.getSnake();
    },
    meetups() {
      return this.app.gridStore.getMeetups();
    }
  }
});
