/* ================================================== 
    Footer Section
================================================== */
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="mailto:hylou34@gmail.com"><i className="fa fa-envelope" /></a></li>
              <li><a href="https://www.linkedin.com/in/hengyulou/"><i className="fab fa-linkedin" /></a></li>
              <li><a href="https://github.com/henrylou"><i className="fab fa-github" /></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100009805601098"><i className="fab fa-facebook-f" /></a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}

export default Footer;