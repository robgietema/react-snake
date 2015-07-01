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
    let meetups = _.each( data, function( meetup ) {
      meetup.x = parseInt(Math.random() * 20, 10);
      meetup.y = parseInt(Math.random() * 15, 10);
    });
    this.state.meetups = meetups;
    this.hasChanged();
  }
  
  getNextMeetup() {
    const meetup = this.state.meetups[ this.count ];
    this.count++;
    return meetup;
  }

}

export default MeetupStore;
