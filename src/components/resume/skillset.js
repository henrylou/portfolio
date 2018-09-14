/* -----------------------------------------------
  Skillset
----------------------------------------------- */
import React, { Component } from 'react';

class Skillset extends Component {  
  render() {
    return (
      <section id="skills">
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
              I have experience in both the backend and the frontend. My skillset is shown below.
            </p>
            {/*<div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
              </ul>
            </div>
            */}
            
            <div className="three columns skills">
              <ul>
                <li><i className="fab fa-java" /> Java</li>
                <li><i className="fab fa-php" /> PHP</li>
                <li><i className="fab fa-js" /> JavaScript</li>
                <li><i className="fab fa-python" /> Python</li>
                <li><i className="fab fa-html5" /> HTML</li>
                <li><i className="fab fa-css3" /> CSS</li>
              </ul>
            </div>
            <div className="three columns skills">
              <ul>
              <li><i className="far fa-gem" /> Ruby on Rails</li>
                <li><i className="fab fa-react" /> React</li>
                <li><i className="fab fa-node-js" /> NodeJS</li>
                <li><i className="fas fa-bold" /> Bootstrap</li>
              </ul>
            </div>
            <div className="three columns skills">
              <ul>
                <li><i className="fas fa-database" /> MySQL</li>
                <li><i className="fab fa-envira" /> MongoDB</li>
                <li><i className="fas fa-star" /> Spark</li>
                <li><i className="fab fa-git" /> Git</li>
                <li><i className="fab fa-npm" /> NPM</li>
              </ul>
            </div>
            <div className="three columns skills">
            </div>
          </div> 
        </div> 
      </section>
    );
  }
}

export default Skillset;