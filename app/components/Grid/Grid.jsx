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
    let list = [];
    _.times( high, function( y ) {
      let temp = [];
      _.times( wide, function( x ) {
        temp.push( '' );      
      }, this);
      list.push( temp );
    }, this);
    
//    console.log( list );
    
    
    // loop through meetups
//    loop:
//      list[meethup.x][meetup.y] = blue;
//      
//   loop snake:
//      list[meethup.x][meetup.y] = red;

    
    
//    console.log( 'getting snake', this.props.snake );
    
    _.each( this.props.meetups, function( coord ) {
//      console.log('set meetup', coord);
      list[coord.y][coord.x] = 'meetup';
    });
    
    _.each( this.props.snake, function( coord ) {
//      console.log('set snake', coord);
      list[coord.y][coord.x] = 'snake';
    });
    
    let dots = _.map( list, function( y ) {
//      console.log('mapping x', x);
      return _.map( y, function( x ) {
//        console.log('mapping x', x);
        return (
          <Dot className={x} />
        );
      });
    });
    let gameover = this.props.gameover ? <div className="gameover">Game over!</div> : '';
    let won = this.props.won ? <div className="won">You won!</div> : '';
    
    return (
      <div className="grid">
        {gameover}
        {won}
        {dots}
      </div>
    );
  }
}

export default Grid;
