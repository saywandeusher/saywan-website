import React from 'react'
import './intro.css'

export default class Intro extends React.Component {

  render() {
    return (
      <div className="parallax-container center valign-wrapper">
        <div className="container"> 
          <div className="row">
            <div className="col s12">
              <div className="white-text lighten-2 heading2">HI, I'M SAY WAN, A FRONT-END WEB DEVELOPER.</div> 
              <a href="#aboutme" className="waves-effect waves-light btn-large white lighten-2 black-text pulse">CHECK ME OUT</a>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={require('../../Images/introBG.jpg')} alt="backgroundimg1" />
        </div>
      </div>
    );
  }
}