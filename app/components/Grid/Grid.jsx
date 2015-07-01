import React from 'react';
import _ from 'lodash';
import './Grid.scss';

class Grid extends React.Component {

  wide: 20,
  high: 15,
  
  /**
  * Render method.
  *
  * @method render
  * @return Markup for the component
  */
  render() {
    var list = [];
    _.times( this.wide, function( x ) {
      
      list.push( x );
      _.times( this.high, function( y ) {
        list[x].push( y );      
      }, this);
      
    }, this);
    
    
    
    // loop through meetups
//    loop:
//      list[meethup.x][meetup.y] = blue;
//      
//   loop snake:
//      list[meethup.x][meetup.y] = red;

    return (
      <div className="grid">
          
      </div>
    );
  }
}

export default Grid;
