/* ================================================== 
    Resume Section
================================================== */
import React, { Component } from 'react';

class Resume extends Component {  
  render() {
    return (
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
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
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>OrderInsite</h3>
                <p className="info">Software Engineer Intern <span>•</span> <em className="date">Sep. 2018 - Present</em></p>    
                <ul>
                  <li>• Develop new features for inventory management products</li>
                  <li>• Create documentations and presentations for sales and operations</li>
                  <li>• Attend weekly working group staff meetings</li>
                </ul>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Endorsify</h3>
                <p className="info">Software Engineer Intern <span>•</span> <em className="date">Jun. 2018 - Dep. 2018</em></p>
                <ul>
                  <li>• Built PHP artisan commands of Laravel and scheduled them with cron to automatically update MySQL database with Eloquent ORM</li>
                  <li>• Integrated Elasticsearch index with MySQL which allow admins to perform CRUD operations in them synchronously</li>
                  <li>• Created analytic web pages with Google Analytics API and ChartJS using PHP, JavaScript and HTML to help decision makers change strategies</li>
                </ul>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
              </ul>
            </div>
          </div> 
        </div> 
      </section> 
    );
  }
}

export default Resume;