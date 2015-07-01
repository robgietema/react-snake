import Marty from 'marty';

class MeetupsApi extends Marty.HttpStateSource {
  getMeetups() {
    return this.get({ url: 'http://reactjs.meetup.com/newest/json/New+reactjs+Groups' }).then(res => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Failed to get meetups', res);
    });
  }
}

export default MeetupsApi;