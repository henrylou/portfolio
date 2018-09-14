/* ================================================== 
    Header
================================================== */
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Hengyu Lou.</h1>
            <h3>I am a master student in the department of <span>Electrical & Computer Engineering</span> at <span>UCLA</span>.
            I am seeking 2019 new grad <span>Software Engineer</span> opportunities. 
            <a className="smoothscroll" href="#about"> Start scrolling </a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            {/*<hr />*/}
            <ul className="social">
              <li><a href="mailto:hylou34@gmail.com"><i className="fa fa-envelope" /></a></li>
              <li><a href="https://www.linkedin.com/in/hengyulou/"><i className="fab fa-linkedin" /></a></li>
              <li><a href="https://github.com/henrylou"><i className="fab fa-github" /></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100009805601098"><i className="fab fa-facebook-f" /></a></li>
              {/*
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-instagram" /></a></li>
              <li><a href="#"><i className="fa fa-skype" /></a></li>
              */}
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
    );
  }
}

export default Header;