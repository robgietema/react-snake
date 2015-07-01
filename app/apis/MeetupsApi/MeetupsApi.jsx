import Marty from 'marty';
import data from  '../../../data.json';

class MeetupsApi extends Marty.HttpStateSource {
  getMeetups() {
    return data;
  }
}

export default MeetupsApi;