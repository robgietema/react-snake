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
    
    this.count = 0;
  }
   
  getMeetups() {
    return this.state.meetups;
  }
  
  
  setMeetups( data ) {
    this.state.meetups = data;
    this.hasChanged();
  }
  
  getNextMeetup() {
    const meetup = this.state.meetups[ this.count ];
    this.count++;
    return meetup;
  }

}

export default MeetupStore;
