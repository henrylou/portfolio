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
            <h1>
              Check Out My Projects.<br />         
              Please click the icons to see the details.<br />
              You will see the introduction, deployed website and github code.
            </h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <PortfolioItem 
                link="#modal-01"
                name="BLog Website Development" 
                description="Ruby on Rails, Bootstrap, PostgreSQL"
                imagesrc="images/portfolio/blog.png" 
              />{/* item end */}
              <PortfolioItem 
                link="#modal-02"
                name="Photo Management App Development" 
                description="Ruby on Rails, Bootstrap, PostgreSQL"
                imagesrc="images/portfolio/photo.png" 
              />{/* item end */}
              <PortfolioItem 
                link="#modal-03"
                name="Online Survey System Design" 
                description="NodeJS/Express, React, MongoDB"
                imagesrc="images/portfolio/survey.png" 
              />{/* item end */}
              <PortfolioItem 
                link="#modal-04"
                name="Twitter Handle Interface Development" 
                description="Ruby on Rails, Bootstrap, Twitter API"
                imagesrc="images/portfolio/twitter.png" 
              />{/* item end */}
              <PortfolioItem 
                link="#modal-05"
                name="Movie Database System User Interface Development" 
                description="PHP, MySQL, HTML"
                imagesrc="images/portfolio/movie.png" 
              />{/* item end */}
              <PortfolioItem 
                link="#modal-06"
                name="Portfolio Website Development" 
                description="React, JavaScript"
                imagesrc="images/portfolio/portfolio.png" 
              />{/* item end */}
              <PortfolioItem 
                link="#modal-07"
                name="Real-Time Hand Gesture Recognition System Design" 
                description="Java, OpenCV"
                imagesrc="images/portfolio/gesture.png" 
              />{/* item end */}
              <PortfolioItem 
                link="#modal-08"
                name="Youtube User Interface Development" 
                description="React, JavaScript"
                imagesrc="images/portfolio/youtube.png" 
              />{/* item end */}

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
            description="This is a photo management app based on Ruby on Rails, Bootstrap and PostgreSQL. 
            I implemented authentication system with devise and authentication confirmation through emails with SendGrid gem.            
            I applied Stripe gem to deal with online payment and used Carrierwave gem and Amazon S3 to upload and store images.
            You can use a Stripe test credit card to register to try the app."
            
            techstack="Ruby on Rails, Bootstrap, PostgreSQL, JavaScript, HTML, CSS, Amazon S3, Stripe gem, devise gem, SendGrid gem, Carrierwave gem"
            imagesrc="images/portfolio/modals/m-photo-app.png"
            website="https://photo-management-hengyu.herokuapp.com"
            github="https://github.com/henrylou/photo-app"
          />
          <PortfolioModal 
            modalId="modal-03"
            name="Emaily"
            description="This web app is built for users to conduct online surveys by payment using NodeJS/Express, React and MongoDB.
            I implemented Google OAuth 2.0 with PassportJS middleware and used Stripe API to handle online payment.
            I applied Mongoose to create surveys and ccess MongoDB. SendGrid API is used to send surveys through emails."
            techstack="NodeJS, Express, React, Redux, MongoDB, JavaScript, HTML, CSS, Mongoose, PassportJS, Stripe API, SendGrid API"
            imagesrc="images/portfolio/modals/"
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
            imagesrc="images/portfolio/modals/m-movie-database.png"
            website="https://youtu.be/H2K3kAAHiJ8"
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
            I applied K-curvature and convex hull algorithms to detect fingertips and used Kalman filter to track them.
            Hand gestures are recognized through the number of fingertips, the positions of fingertips and the connection among fingertips."            
            techstack="Java, OpenCV"
            imagesrc="images/portfolio/modals/"
            github="https://github.com/henrylou/gesture-recognition"
          />
          <PortfolioModal 
            modalId="modal-08"
            name="Youtube Interface"
            description="To be continued"            
            techstack="React, JavaScript, HTML, CSS"
            imagesrc="images/portfolio/modals/"
            //website="https://alpha-blog-hengyu.herokuapp.com"
            //github="https://github.com/henrylou/alpha-blog"
          />
        </div>
      </section> 
    );
  }
}

export default Portfolio;