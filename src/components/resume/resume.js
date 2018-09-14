/* ================================================== 
    Resume Section
================================================== */
import React, { Component } from 'react';
import Education from './education';
import Work from './work';
import Skillset from './skillset';

class Resume extends Component {  
  render() {
    return (    
      <section id="resume">
        <Education />
        <Work />
        <Skillset />
      </section>
    );
  }
}

export default Resume;