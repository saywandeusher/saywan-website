import React from 'react'
import './skills.css'

export default class Skills extends React.Component {

  render() {
    return (
      <section className="skillsSection">
      <div className="container">

        <div className="row">
          <div className="col s12">
            <h3 className="sectionHeading">SKILLS</h3>
          </div>
        </div>

        <div className="row">

          <div className="col m3 s12">
            <div className="icon-block">
              <h2 className="center white-text">
                <i className="material-icons">laptop_mac</i>  
              </h2>
              <h5 className="center">- Web Development -</h5>
              
              <div className="listContainer light center">
                <ul>
                  <li>HTML5/CSS3</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT</li>
                  <li>RUBY ON RAILS</li>
                  <li>GIT</li>
                  <li>GITHUB</li>
                  <li>NODE.JS</li>
                  <li>EXPRESS.JS</li>
                  <li>POSTGRESQL</li>
                  <li>SASS</li>
                </ul>
              </div>

            </div> 
          </div>

          <div className="col m3 s12">
            <div className="icon-block">
              <h2 className="center white-text">
                <i className="material-icons">brush</i>  
              </h2>
              <h5 className="center">- Design -</h5>
              <div className="listContainer light center">
                <ul>
                  <li>ADOBE PHOTOSHOP</li>
                  <li>ADOBE INDESIGN</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col m3 s12">
            <div className="icon-block">
              <h2 className="center white-text">
                <i className="material-icons">group</i>  
              </h2>
              <h5 className="center">- Inter-Personal -</h5>
              <div className="listContainer light center">
                <ul>
                  <li>TRAININGS</li>
                  <li>TEAM BUILDING</li>
                </ul>
              </div>
            </div>
           </div>

          <div className="col m3 s12">
            <div className="icon-block">
              <h2 className="center white-text">
                <i className="material-icons">language</i>  
              </h2>
              <h5 className="center">- Language -</h5>
              <div className="listContainer light center">
                <ul>
                  <li>ENGLISH</li>
                  <li>CHINESE</li>
                </ul>
              </div>
            </div>
          </div>
        
        </div>

      </div>
      </section>
    );
  }
}