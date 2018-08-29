import React from 'react'
import './footer.css'

export default class Footer extends React.Component {

  render() {
    return (
        <div className="container footerContainer">
          <div className="row">
            <div className="col s12">
              Handcrafted by me © Saywan 2018
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <a href="https://github.com/saywandeusher"><img src={require('../../Images/github.png')} alt="github" className="footerImg"/></a>
              <a href="https://www.linkedin.com/in/saywan-ong"><img src={require('../../Images/in.png')} alt="linkedin" className="footerImg"/></a>
              <a href="https://www.instagram.com/saywan_deusher"><img src={require('../../Images/ig.png')} alt="linkedin" className="footerImg"/></a>
            </div>
          </div>
        </div>
    );
  }
}