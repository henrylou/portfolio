/* ================================================== 
    Portfolio Section
================================================== */
import React, { Component } from 'react';
import PortfolioItem from './portfolio_item';
import PortfolioModal from './portfolio_modal';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <PortfolioItem 
                link="#modal-01"
                name="BLog Website Development" 
                description="Share you ideas now!"
                imagesrc="images/portfolio/photo-app.png" 
              />{/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt src="images/portfolio/console.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Photo Management App Development</h5>
                        <p></p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt src="images/portfolio/judah.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Online Survey System Design</h5>
                        <p>Webdesign</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt src="images/portfolio/into-the-light.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Twitter Handle Interface Development</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt src="images/portfolio/farmerboy.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Movie Database System User Interface Development</h5>
                        <p>Branding</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt src="images/portfolio/girl.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Portfolio Website Development</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt src="images/portfolio/origami.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Real-Time Hand Gesture Recognition System Design</h5>
                        <p>Illustrration</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt src="images/portfolio/retrocam.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Youtube User Interface Development</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <PortfolioModal 
            modalId="modal-01"
            name="Alpha Blog"
            description="This is web blog app based on Ruby on Rails, Bootstrap and PostgreSQL. 
            I implemented authentication system from scratch and user representation with Gravater.
            A guest is allowed to browse through the articles, users and categories.
            A logged in user is allowed to create, edit and delete your own articles and personal infromation.
            A logged in admin is allowed to create category, edit and delete all articles or users."
            techstack="Ruby on Rails, Bootstrap, PostgreSQL, JavaScript, HTML, CSS"
            imagesrc="images/portfolio/modals/m-alpha-blog.png"
            website="https://alpha-blog-hengyu.herokuapp.com"
            github="https://github.com/henrylou/alpha-blog"
          />
          <PortfolioModal 
            modalId="modal-02"
            name="Photo Management App"
            description="This is web blog app based on Ruby on Rails, Bootstrap and PostgreSQL. 
            I implemented authentication system with devise and authentication confirmation through emails with SendGrid gem.            
            As a guest, you can browse through the articles, users and categories."
            
            techstack="Ruby on Rails, Bootstrap, PostgreSQL, JavaScript, HTML, CSS, Amazon S3, devise gem, SendGrid gem, Carrierwave gem"
            imagesrc="images/portfolio/modals/m-alpha-blog.png"
            website="https://photo-management-hengyu.herokuapp.com"
            github="https://github.com/henrylou/photo-app"
          />
          <PortfolioModal 
            modalId="modal-03"
            name="Emaily"
            description="This web app is built for users to conduct online surveys by payment using NodeJS/Express, React and MongoDB.
            I implemented Google OAuth 2.0 with PassportJS middleware and used Stripe API to handle online payment.
            I applied Mongoose to create surveys and ccess MongoDB. SendGrid API is used to send surveys through emails."
            techstack="NodeJS, Express, React, Redux, MongoDB, JavaScript, HTML, CSS, Mongoose PassportJS, Stripe API, SendGrid API"
            imagesrc="images/portfolio/modals/m-alpha-blog.png"
            website="https://email-survey-hengyu.herokuapp.com"
            github="https://github.com/henrylou/email-survey"
          />
          <PortfolioModal 
            modalId="modal-04"
            name="Twitter Handle Interface"
            description="This is a web interface that takes a twitter handle and displays the user’s 25 most recent tweets using Ruby on Rails, Bootstrap and Twitter API.
            A Twitter handle is the term for someone’s account name on Twitter. For example, LeBron James' Twitter handle is @KingJames. 
            When you are on a Twitter page, you can find the Twitter handle listed two places: 1. In the URL 2. Underneath your profile photo.
            As for this interface, you should type in KingJames instead of @KingJames." 
            techstack="Ruby on Rails, Bootstrap, JavaScript, HTML, CSS, Twitter API"
            imagesrc="images/portfolio/modals/m-twitter-interface.png"
            website="https://recent-tweets-hengyu.herokuapp.com"
            github="https://github.com/henrylou/recent-tweets-of-twitter-handle"
          />
          <PortfolioModal 
            modalId="modal-05"
            name="Movie Databse System"
            description="This web app is based on LAMP stack (Linux, Apache HTTP server, MySQL, PHP). 
            A user is allowed add directors or actors, link movies to actors and add comments to movies. 
            In addition, a user can type in keywords to search for relevant movies, actors and directors."
            techstack="PHP, MySQL, JavaScript, HTML, CSS"
            imagesrc="images/portfolio/modals/m-alpha-blog.png"
            github="https://github.com/henrylou/movie-database-system"
          />
          <PortfolioModal 
            modalId="modal-06"
            name="Portfolio"
            description="This is my personal website based on React."            
            techstack="React, JavaScript, HTML, CSS"
            imagesrc="images/portfolio/modals/m-portfolio.png"
            website="https://henrylou.github.io/portfolio"
            github="https://github.com/henrylou/portfolio"          
          />
          <PortfolioModal 
            modalId="modal-07"
            name="Real-Time Hand Gesture Recognition System"
            description="This app recognizes static and dynamic hand gesture using Java and OpenCV. 
            I applied K-curvature and convex hull algorithms to detect fingertips and used Kalman filter to track them
            Hand gestures are recognized through the number of fingertips, the positions of fingertips and the connection among fingertips"            
            techstack="Java, OpenCV"
            imagesrc="images/portfolio/modals/m-alpha-blog.png"
            github="https://github.com/henrylou/gesture-recognition"
          />
          <PortfolioModal 
            modalId="modal-08"
            name="Youtube Interface"
            description="To be continued"            
            techstack="React, JavaScript, HTML, CSS"
            imagesrc="images/portfolio/modals/m-alpha-blog.png"
            //website="https://alpha-blog-hengyu.herokuapp.com"
            //github="https://github.com/henrylou/alpha-blog"
          />
        </div>
      </section> 
    );
  }
}

export default Portfolio;