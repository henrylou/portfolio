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
                <p>
                  Courses: Database Systems, Computer Network, Computer Systems, Data Mining, Pattern Recognition, 
                   Graphs and Network Flows, Computer Graphics, Matrix Analysis, Linear Programming                
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Shanghai Jiao Tong University (SJTU)</h3>
                <p className="info">B.S. in Electronic Science and Technology <span>•</span> <em className="date">Sep. 2013 - Jun. 2017</em></p>
                <p>
                  Courses: Data Structures, C++ Programming, Thinking and Approach of Programming (Python), ARM Embedded Systems, Intelligent System Design
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div>
      </section> 
    );
  }
}

export default Education;