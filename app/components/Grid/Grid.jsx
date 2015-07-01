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
    
    _.each( this.props.meetups, function( coord ) {
      list[coord.y][coord.x] = 'meetup';
    });
    
    _.each( this.props.snake, function( coord ) {
      list[coord.y][coord.x] = 'snake';
    });
    
    let dots = _.map( list, function( y ) {
      return _.map( y, function( x ) {
        return (
          <Dot className={x} />
        );
      });
    });

    let gameover = this.props.gameover ? <div className="gameover">Game over!</div> : '';
    let won = this.props.won ? <div className="won">You won!</div> : '';
    
    return (
      <div className="grid">
        <object className="background" id="map-svg" width="320" height="240" type="image/svg+xml" data="../../assets/images/world_map_iso.svg"></object>
        {gameover}
        {won}
        {dots}
      </div>
    );
  }
}

export default Grid;