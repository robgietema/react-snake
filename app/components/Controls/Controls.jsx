import React from 'react';
import _ from 'lodash';
import './Controls.scss';

class Controls extends React.Component {
  
  /**
  * Render method.
  *
  * @method render
  * @return Markup for the component
  */
  render() {
    
    return (
      <div className="controls">
        <button className="left" onClick={this.left.bind(this)}>&#9668;</button>
        <button className="up" onClick={this.up.bind(this)}>&#9650;</button>
        <button className="down" onClick={this.down.bind(this)}>&#9660;</button>
        <button className="right" onClick={this.right.bind(this)}>&#9658;</button>
      </div>
    );
  }
  
  left() {
    this.props.app.gridActions.setDirection('left');
  }
  
  up() {
    this.props.app.gridActions.setDirection('up');
  }
  
  down() {
    this.props.app.gridActions.setDirection('down'); 
  }
  
  right() {
    this.props.app.gridActions.setDirection('right');
  }
  
}

export default Controls;