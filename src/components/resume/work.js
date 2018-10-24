/* -----------------------------------------------
  Work
----------------------------------------------- */
import React, { Component } from 'react';

class Work extends Component {  
  render() {
    return (
      <section id="work"> 
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <a href="https://www.orderinsite.com"><h3>OrderInsite</h3></a>
                <p className="info">Software Engineering Intern <span>•</span> <em className="date">Sep. 2018 - Present</em></p>    
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <a href="https://endorsify.co"><h3>Endorsify</h3></a>
                <p className="info">Software Engineering Intern <span>•</span> <em className="date">Jun. 2018 - Sep. 2018</em></p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> 
      </section>
    );
  }
}

export default Work;