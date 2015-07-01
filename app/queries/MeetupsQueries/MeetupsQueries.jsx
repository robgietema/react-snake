import Marty from 'marty';

import MeetupsConstants from '../../constants/MeetupsConstants';

class MeetupsQueries extends Marty.Queries {
  getMeetups() {
    this.dispatch(MeetupsConstants.MEETUPS, this.app.meetupsApi.getMeetups());
  }
}

export default MeetupsQueries;