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
              Please click on the icons to see the details.<br />
              You will see the demo website, descriptions and source codes on github.
            </h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <PortfolioItem 
                link="#modal-01"
                name="Blogging Platform" 
                description="Ruby on Rails, Bootstrap, PostgreSQL"
                imagesrc="images/portfolio/blog.png" 
              />{/* item end */}
              <PortfolioItem 
                link="#modal-02"
                name="Instagram Clone" 
                description="Ruby on Rails, Bootstrap, PostgreSQL"
                imagesrc="images/portfolio/photo.png" 
              />{/* item end */}
              {/*<PortfolioItem 
                link="#modal-03"
                name="Online Survey System Design" 
                description="NodeJS/Express, React, MongoDB"
                imagesrc="images/portfolio/survey.png" 
              /> item end */}
              <PortfolioItem 
                link="#modal-03"
                name="TODO List" 
                description="Ruby on Rails, Bootstrap, Twitter API"
                imagesrc="images/portfolio/todo.png" 
              />{/* item end */}

              <PortfolioItem 
                link="#modal-04"
                name="Tweet History By Handle" 
                description="Ruby on Rails, Bootstrap, Twitter API"
                imagesrc="images/portfolio/twitter.png" 
              />{/* item end */}
              <PortfolioItem 
                link="#modal-05"
                name="IMDB Clone" 
                description="PHP, MySQL, HTML"
                imagesrc="images/portfolio/movie.png" 
              />{/* item end */}
              <PortfolioItem 
                link="#modal-06"
                name="Portfolio" 
                description="React, JavaScript"
                imagesrc="images/portfolio/portfolio.png" 
              />{/* item end */}
              <PortfolioItem 
                link="#modal-07"
                name="Autocomplete Interface" 
                description="Java, Hadoop, MapReduce, MySQL, jQuery, PHP, AJAX, Docker"
                imagesrc="images/portfolio/autocomplete.png" 
              />
              <PortfolioItem 
                link="#modal-08"
                name="Text Entry Technique" 
                description="Java, Android"
                imagesrc="images/portfolio/text-entry.png" 
              />

              <PortfolioItem 
                link="#modal-09"
                name="Real-Time Hand Gesture Recognition System Design" 
                description="Java, OpenCV"
                imagesrc="images/portfolio/gesture.png" 
              />
              {/*}
              <PortfolioItem 
                link="#modal-08"
                name="Youtube User Interface Development" 
                description="React, JavaScript"
                imagesrc="images/portfolio/youtube.png" 
              />*/}

            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <PortfolioModal 
            modalId="modal-01"
            name="Blogging Platform"
            description="This is web blog app based on Ruby on Rails, Bootstrap and PostgreSQL. 
            I implemented authentication system from scratch and user representation with Gravater.
            A guest is allowed to browse through the articles, users and categories.
            A logged in user is allowed to create, edit and delete your own articles and personal infromation.
            A logged in admin is allowed to create category, edit and delete all articles or users."
            techstack="Ruby on Rails, Bootstrap, PostgreSQL, JavaScript, HTML, CSS"
            imagesrc="images/portfolio/modals/m-blog.png"
            website="https://blogging-online.herokuapp.com"
            github="https://github.com/henrylou/alpha-blog"
          />
          <PortfolioModal 
            modalId="modal-02"
            name="Instagram Clone"
            description="This is a photo management app based on Ruby on Rails, Bootstrap and PostgreSQL. 
            I implemented authentication system with devise and authentication confirmation through emails with SendGrid gem.            
            I applied Stripe gem to deal with online payment and used Carrierwave gem and Amazon S3 to upload and store images.
            You can use a Stripe test credit card to register to try this app."
            
            techstack="Ruby on Rails, Bootstrap, PostgreSQL, JavaScript, HTML, CSS, Amazon S3, Stripe gem, devise gem, SendGrid gem, Carrierwave gem"
            imagesrc="images/portfolio/modals/m-instagram-clone.png"
            website="https://instagram-clone-photo-app.herokuapp.com"            
            github="https://github.com/henrylou/photo-app"
          />
          {/*<PortfolioModal 
            modalId="modal-03"
            name="Emaily"
            description="This web app is built for users to conduct online surveys by payment using NodeJS/Express, React and MongoDB.
            I implemented Google OAuth 2.0 with PassportJS middleware and used Stripe API to handle online payment.
            I applied Mongoose to create surveys and ccess MongoDB. SendGrid API is used to send surveys through emails."
            techstack="NodeJS, Express, React, Redux, MongoDB, JavaScript, HTML, CSS, Mongoose, PassportJS, Stripe API, SendGrid API"
            imagesrc="images/portfolio/modals/"
            website="https://email-survey-hengyu.herokuapp.com"
            github="https://github.com/henrylou/email-survey"
          />*/}
          <PortfolioModal 
            modalId="modal-03"
            name="TODO List"
            description="This app is built for personal usage to manage daily todo items online. 
            Of course, if you are interested, please register to try this app."            
            techstack="Ruby on Rails, Bootstrap, PostgreSQL, JavaScript, HTML, CSS, devise gem"
            imagesrc="images/portfolio/modals/m-todo.png"
            website="https://time-master-app.herokuapp.com"
            github="https://github.com/henrylou/todo-list-app"
          />
          <PortfolioModal 
            modalId="modal-04"
            name="Tweet History By Handle"
            description="This is a web interface that takes a twitter handle and displays the user’s 25 most recent tweets using Ruby on Rails, Bootstrap and Twitter API.
            A Twitter handle is the term for someone’s account name on Twitter. For example, LeBron James' Twitter handle is @KingJames. 
            When you are on a Twitter page, you can find the Twitter handle listed two places: 1. In the URL 2. Underneath your profile photo.
            As for this interface, you should type in KingJames instead of @KingJames." 
            techstack="Ruby on Rails, Bootstrap, JavaScript, HTML, CSS, Twitter API"
            imagesrc="images/portfolio/modals/m-twitter.png"
            website="https://tweet-history-by-handle.herokuapp.com"            
            github="https://github.com/henrylou/recent-tweets-of-twitter-handle"
          />
          <PortfolioModal 
            modalId="modal-05"
            name="IMDB Clone"
            description="This web app is based on LAMP stack (Linux, Apache HTTP server, MySQL, PHP). 
            A user is allowed to add directors or actors, link movies to actors and add comments to movies. 
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
            name="Autocomplete Interface"
            description="This interface predicts the rest of words a user is typing based on Java, Hadoop, MapReduce, MySQL, jQuery, PHP, AJAX, Docker. 
            First, I constructed a N-Gram library, built a language model from the Wiki dataset by MapReduce and stored data in MySQL. 
            Then, I Applied jQuery, PHP and Ajax to build an interface which retrieves data from MySQL database to achieve real-time autocomplete."            
            techstack="Java, Hadoop, MapReduce, MySQL, jQuery, PHP, AJAX, Docker"
            imagesrc="images/portfolio/modals/m-autocomplete.png"
            website="https://auto-complete-interface.herokuapp.com"
            github="https://github.com/henrylou/autocomplete"
          />
          <PortfolioModal 
            modalId="modal-08"
            name="Text Entry Technique"
            description="The text entry technique, Swipeboard, leverages our spatial memory of a QWER keyboard to learn, and eventually master, a shorthand, eyes-free text entry method. 
            Characters are entered within two swipes. 
            The first swipe specifies the region where the character is located. 
            The second swipe specifies the character within that region."            
            techstack="Java, Android"
            imagesrc="images/portfolio/modals/m-text-input.jpg"
            website="https://youtu.be/U7OhX5E8kxo"
            github="https://github.com/henrylou/text-entry"
          />
          <PortfolioModal 
            modalId="modal-09"
            name="Real-Time Hand Gesture Recognition System"
            description="This app recognizes static and dynamic hand gesture using Java and OpenCV. 
            I applied K-curvature and convex hull algorithms to detect fingertips and used Kalman filter to track them.
            Hand gestures are recognized through the number of fingertips, the positions of fingertips and the connection among fingertips."            
            techstack="Java, OpenCV"
            imagesrc="images/portfolio/modals/m-gesture.jpg"
            github="https://github.com/henrylou/gesture-recognition"
          />

          {/*<PortfolioModal 
            modalId="modal-08"
            name="Youtube Interface"
            description="To be continued"            
            techstack="React, JavaScript, HTML, CSS"
            imagesrc="images/portfolio/modals/"
            //website="https://alpha-blog-hengyu.herokuapp.com"
            //github="https://github.com/henrylou/alpha-blog"
          />*/}
        </div>
      </section> 
    );
  }
}

export default Portfolio;