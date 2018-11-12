import React, { Component } from 'react';

// Font Awesome Icons
import { faGithubSquare, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

// Components
import Nav from './Nav';
import ExternalLink from './ExternalLink'

class Footer extends Component{
  copyOnClick = (e) => {
    /* Get the text field */
    const copyText = e.currentTarget;

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
              <input type="text" id="emailAddress" onClick={this.copyOnClick} defaultValue="spencerrca@gmail.com" readOnly/>
            </div>
            <div className="row justifyCenter">
              <ExternalLink path={"https://github.com/SBRoberts"} icon={faGithubSquare} className={"social"} />
              <ExternalLink path={"https://www.linkedin.com/in/spencer-roberts-canada/"} icon={faLinkedin} className={"social"} />
              <ExternalLink path={"https://medium.com/@spencerrca"} icon={faMedium} className={"social"} />
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;