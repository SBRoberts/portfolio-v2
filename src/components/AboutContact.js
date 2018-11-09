import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

import headshot from '../assets/spencer_roberts_monochrome.jpg'

class AboutContact extends Component{
  render(){
    return(
      <section id="aboutContact">
        <div className="outterWrapper">
          <header className="">
            <section className="aboutMe">
              <div className="row third">
                <Link to="/" className="highlightButton">
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <p>Back</p>
                </Link>
              </div>
              <div className="row ">
                <div className="half wrap">
                  <div className="row">
                    <h1>Spencer Roberts</h1>
                  </div>
                  <div className="row">
                    <h2>Web Developer | Toronto</h2>
                  </div>
                  <div className="row">
                    <p>
                      Hi! I make websites and applications with really good user experiences. Engaging interactions and minimalist interfaces are at the core of all my work. I also have 2 cats that my girlfirend coerced me into getting, but who I am now fully devoted to. In my spare time, I like going to weird restaurants and watching the Harry Potter movies on repeat.
                    </p>
                  </div>
                </div>
                <div className="half portrait">
                  <img src={headshot} alt="Spencer Roberts Headshot. It's monochromatic"/>
                  {/* PIC OF ME HERE */}
                </div>
              </div>
            </section>
          </header>
        </div>
        <div className="outterWrapper">
          <section id="contact" className="row">
            <form action="https://formspree.io/spencerrca@gmail.com" method="POST" autoComplete="on" name="myForm" className="half">
              <div className="row">
                <label className="visuallyhidden" htmlFor="firstName">Name</label>
                <input className="" type="text" name="firstName" placeholder="Name" required/>
              </div>
              <div className="row">
                <label className="visuallyhidden" htmlFor="email">Email Address</label>
                <input type="email" name="_replyto" placeholder="Email Address" required/>
              </div>
              <div className="row">
                <label className="visuallyhidden" htmlFor="subject">Subject</label>
                <input type="text" className="" placeholder="Subject"/>
              </div>

              <div className="row">
                <label className="visuallyhidden" htmlFor="emailContent">Message</label>
                <textarea name="emailContent" cols="30" rows="10" placeholder="Words go here"></textarea>
              </div>
              <button className="" type="submit" value="Send">
                <h4>Submit</h4>
              </button>
            </form>
          </section>
        </div>
        <Footer />
      </section>
    )
  }
}

export default AboutContact;