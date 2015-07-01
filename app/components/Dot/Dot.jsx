import React from 'react';
import './Dot.scss';

class Dot extends React.Component {
  
  /**
  * Render method.
  *
  * @method render
  * @return Markup for the component
  */
  render() {
//    console.log('rendering a dot');
    return (
      <div className={ 'dot ' + this.props.className }>
      </div>
    );
  }
}



export default Dot;
