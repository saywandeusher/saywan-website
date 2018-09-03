import React from 'react'
import './about.css'
import { Parallax } from 'react-scroll-parallax';

export default class About extends React.Component {

  render() {
    return (
      <section>
      <div id="aboutme" className="container section scrollspy">
        <div className="row">
          <div className="col s12">
          {/* <Parallax className="busterPicParallax" offsetXMax={380} offsetXMin={-50} slowerScrollRate tag="figure" > */}
          <img src={require('../../Images/crown.png')} alt="crown" className="crownPic" />
          {/* </Parallax> */}
            <img src={require('../../Images/profile.jpg')} alt="backgroundimg1" className="circle responsive-img profilePic" />
          </div>
        </div>
        <div  className="row">
          <div className="col s12">
            <h3 className="sectionHeading">ABOUT ME</h3>
            <h5 className="aboutMeSubHeading">Something Eye Catching over here.</h5>
            <p>I have a strong passion for programming, more specifically in the the field of front-end web developer. Perservence, enthusiasm and adaptability are core values I wish to uphold as I continue to pursue my career as a front-end web developer.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
          <img src={require('../../Images/megaman.png')} alt="megaman" className="megamanPic" />
          <Parallax className="busterPicParallax" offsetXMax={-45} offsetXMin={130} slowerScrollRate tag="figure" >
            <img src={require('../../Images/buster.png')} alt="buster" className="busterPic" />
          </Parallax>
          </div>
        </div>
      </div>
      </section>
    );
  }
}