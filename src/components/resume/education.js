/*----------------------------------------------- 
Education
----------------------------------------------- */
import React, { Component } from 'react';

class Education extends Component {  
  render() {
    return (
      <section id="education">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>University of California, Los Angeles (UCLA)</h3>
                <p className="info">M.S. in Electrical and Computer Engineering <span>•</span> <em className="date">Sep. 2017 - Expected Mar. 2019</em></p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Shanghai Jiao Tong University (SJTU)</h3>
                <p className="info">B.S. in Electronic Science and Technology <span>•</span> <em className="date">Sep. 2013 - Jun. 2017</em></p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div>
      </section> 
    );
  }
}

export default Education;