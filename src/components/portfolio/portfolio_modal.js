import React, { Component } from 'react';

class PortfolioModal extends Component {
  render() {
    let website;
    if (this.props.website != null) {
      website = <a href={this.props.website}>Website </a>
    } 

    return (
      <div id={this.props.modalId} className="popup-modal mfp-hide">
        <img className="scale-with-grid" src={this.props.imagesrc} alt />
        <div className="description-box">
          <h4>{this.props.name}</h4>
          <p>{this.props.description}</p>
          <span className="categories"><i className="fa fa-tag" />{this.props.techstack}</span>
        </div>
        <div className="link-box">
          {website}
          <a className="url" href={this.props.github}>Github</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>
    );
  }
}

export default PortfolioModal;