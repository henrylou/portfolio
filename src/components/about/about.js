/* ================================================== 
    About Section
================================================== */
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I am Hengyu Lou, a master student in the department of Electrical & Computer Engineering at UCLA. 
            I am seeking 2019 new grad Software Engineer opportunities. I will graduate in March 2019. 
            I have experience in both the backend such as Ruby on Rails, PHP, NodeJS/Express and frontend such as React/Redux and Bootstrap as well as RDBMS and NoSQL such as MySQL, PostgreSQL and MongoDB. 
            Also, I have done projects in machine learning and big data processing, for example, spark, numpy and scikit-learn. 
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Info</h2>
                <p className="address">
                  <span>Hengyu Lou</span><br />
                  <span>825 Weyburn Terrace<br />
                    Los Angeles, CA 90024, US
                  </span><br />
                  <span>(408) 306-9383</span><br />
                  <a href="mailto:hylou34@gmail.com"><span>hylou34@gmail.com</span></a>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> 
          </div> 
        </div>
      </section> 
    );
  }
}

export default About;