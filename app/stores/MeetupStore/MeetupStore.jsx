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
      meetup.x = Math.floor((454 + (meetup.lon * 2.52)) / 48);
      meetup.y = Math.floor((381 - (meetup.lat * 2.39)) / 48);
    });
    
    this.state.meetups = meetups;
    this.hasChanged();
  }
  
  getNextMeetup() {
    const meetup = this.getCurrentMeetup();
    this.count++;
    return meetup;
  }
  
  getCurrentMeetup() {
    return this.state.meetups[ this.count ];
  }

}

export default MeetupStore;
