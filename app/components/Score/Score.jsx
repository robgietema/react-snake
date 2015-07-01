import React from 'react';
import './Score.scss';


class Score extends React.Component {
  
  /**
  * Render method.
  *
  * @method render
  * @return Markup for the component
  */
  render() {
    console.log('rendering a score', this.props.hit );
    
    const meetup = this.props.hit;
    let info = '';
    if( meetup ) {
      info = this.createInfo( meetup );
    }
    
    return (
      <div className="score">
        {info}
        <div className="fadeout"></div>
      </div>
    );
  }
  
  createInfo( meetup ) {
    const title = meetup.name;
    const img = meetup.photo_urls.thumb ? <img src={meetup.photo_urls.thumb} /> : '' ;
    const location = meetup.city + ', ' + meetup.country;
    const date = meetup.org_starttime;
    const short_desc = {__html: meetup.short_desc};
    
    return (
      <div class="info">
        <h1>{title}</h1>
        <div className="locationdate">{location}, {date}</div>
        <div dangerouslySetInnerHTML={short_desc}></div>
      </div>
    );
  }
}



export default Score;
