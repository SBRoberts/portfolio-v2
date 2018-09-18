import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';

import Nav from './Nav';

class Footer extends Component{
  copyOnClick = (elementId) => {
    /* Get the text field */
    var copyText = document.getElementById(elementId);

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert(`Copied ${copyText.value}`);
  }
  render(){
    return(
      <div className="outterWrapper">
        <footer className="row spaceBetween">
          <div className="row third">
            <Nav />
          </div>
          <div className="row third wrap">
            <div className="row justifyCenter">
              <input type="text" id="emailAddress" onClick={() => this.copyOnClick('emailAddress')} defaultValue="spencerrca@gmail.com" readOnly/>
            </div>
            <div className="row justifyCenter">
              <a href="https://github.com/SBRoberts" target="_blank" rel="noopener noreferrer" className="social">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
              <a href="https://www.linkedin.com/in/spencer-roberts-canada/" target="_blank" rel="noopener noreferrer" className="social">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://medium.com/@spencerrca" target="_blank" rel="noopener noreferrer" className="social">
                <FontAwesomeIcon icon={faMedium} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;