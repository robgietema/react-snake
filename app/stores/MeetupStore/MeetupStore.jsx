import React from 'react';
import Marty from 'marty';

import MeetupsConstants from '../../constants/MeetupsConstants';

class MeetupStore extends Marty.Store {

  constructor(options) {
    super(options);
    console.log('creating meetup store');
    
    this.handlers = {
      setMeetups: MeetupsConstants.MEETUPS
    };
    
    this.state = {
      meetups: []
    }
  }
   
  getMeetups() {
    return this.state.meetups;
  }
  
  
  setMeetups( data ) {
    this.state.meetups = data;
    this.hasChanged();
  }

}

export default MeetupStore;
