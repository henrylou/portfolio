/* -----------------------------------------------
  Work
----------------------------------------------- */
import React, { Component } from 'react';

class Work extends Component {  
  render() {
    return (
      <section id="word"> 
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
        </div> 
      </section>
    );
  }
}

export default Work;