import React from 'react';
import _ from 'lodash';
import Dot from '../Dot/Dot';
import './Grid.scss';

const wide = 20;
const high = 15;

class Grid extends React.Component {
  
  /**
  * Render method.
  *
  * @method render
  * @return Markup for the component
  */
  render() {
    var list = [];
    _.times( wide, function( x ) {
      const temp = [];
      _.times( high, function( y ) {
        temp.push( '' );      
      }, this);
      list.push( temp );
    }, this);
    
    console.log( list );
    
    
    // loop through meetups
//    loop:
//      list[meethup.x][meetup.y] = blue;
//      
//   loop snake:
//      list[meethup.x][meetup.y] = red;

    list[3][3] = 'blue';
    
    const dots = _.map( list, function( x ) {
      console.log('mapping x', x);
      return _.map( x, function( y ) {
        console.log('mapping y', y);
        return (
          <Dot />
        );
      });
    });
    
    return (
      <div className="grid">
        {dots}
      </div>
    );
  }
}

export default Grid;
