import React from 'react'
import './projects.css'

export default class Projects extends React.Component {

  render() {
    return (
      <section>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 className="sectionHeading">PROJECTS</h3>
            <h5 className="aboutMeSubHeading">Check out some of my recent projects here!</h5>
          </div>
        </div>
        <div className="row">
          <div className="col m6 s12">
            
          <div className="card">
            <div className="card-image">
            <a href="https://saywandeusher.github.io/Project-1-The-Game-Evolution/">
              <img src={require('../../Images/project1.png')} alt="project1" className="projectImg"/>
            </a>
            </div>
            <div className="card-content">
            <span className="card-title black-text">The Game: Evolution</span>
              <p>Original game created by myself that challenges the player to evolve their character. Created using Javascript, HTML, Canvas and CSS.</p>
            </div>
          </div>

          </div>

          <div className="col m6 s12">

          <div className="card">
            <div className="card-image">
            <a href="https://desolate-shelf-49991.herokuapp.com/">
              <img src={require('../../Images/project2.png')} alt="project2" className="projectImg"/>
            </a>
            </div>
            <div className="card-content">
            <span className="card-title black-text">Crowdedornot?</span>
              <p>A full-stack app that allows restaurants to update their vacancies through the app to inform patrons on the sits availability. Created using Ruby on Rails, Postgres and Bootstrap. </p>
            </div>
          </div>

          </div>
        </div>
        <div className="row">
          <div className="col m6 s12">
            
          <div className="card">
            <div className="card-image">
            <a href="https://saywandeusher.wixsite.com/tgifvol5">
              <img src={require('../../Images/tgifForm.png')} alt="Tgif form" className="projectImg"/>
            </a>
            </div>
            <div className="card-content">
            <span className="card-title black-text">TGIF vol.5 form</span>
              <p>A simple yet attractive form that collects information for the event TGIF vol.5. Created using Wix.</p>
            </div>
          </div>

          </div>

          <div className="col m6 s12">

          <div className="card">
            <div className="card-image">
            <a href="#!">
              <img src={require('../../Images/project4.png')} alt="project4" className="projectImg"/>
            </a>
            </div>
            <div className="card-content">
            <span className="card-title black-text">WWBB -Work in progress-</span>
              <p>A website that tells the story of a dance crew called WWBB. Created using ReactJS, ExpressJS and Materialize.</p>
            </div>
          </div>

          </div>
        </div>
      </div>
      </section>
    );
  }
}