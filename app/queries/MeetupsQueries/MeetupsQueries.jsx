import Marty from 'marty';

import MeetupsConstants from '../../constants/MeetupsConstants';

class MeetupsQueries extends Marty.Queries {
  getMeetups() {
    
    this.app.meetupsApi.getMeetups().then((res) => {
      if (res.status === 200) {
        this.dispatch(MeetupsConstants.MEETUPS, res.body);
      } else {
        this.dispatch(MeetupsConstants.MEETUPS_FAILED);
      }
    }).catch((err) => this.dispatch(MeetupsConstants.MEETUPS_FAILED, err));
  }
}

export default MeetupsQueries;