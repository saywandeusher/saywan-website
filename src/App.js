import React from 'react';
import './App.css';
import Intro from './components/introduction/intro'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

export default class App extends React.Component {
  render() {
    return (
    [
      <header>
        <Intro />
      </header>,

      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>,

      <footer className="page-footer">
        <Footer />
      </footer>
    ]
    );
  }
}

