import React, { Component } from 'react';

class PortfolioItem extends Component {
  render() {
    return (
      <div className="columns portfolio-item">
        <div className="item-wrap">
          <a href={this.props.link} title>
            <img alt src={this.props.imagesrc} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{this.props.name}</h5>
                <p>{this.props.description}</p>
              </div>
            </div>
            <div className="link-icon"><i className="icon-plus" /></div>
          </a>
        </div>
      </div>     
    );
  }
}

export default PortfolioItem;