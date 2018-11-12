import React, { Component } from 'react';

// COMPONENTS
import Nav from './Nav';
import Portfolio from './Portfolio';
import Footer from './Footer';
import CMYK from './CMYK';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects,
      text: <g><text className="primaryHeading" style={{ transform: 'translateY(6rem)', fill: '#fff' }}>Web developer &</text> <text className="primaryHeading" style={{ transform: 'translateY(9rem)', fill: '#fff'  }}>code whisperer</text></g>,
    }
  }

  render() {
    return (
      <div>
        <header onMouseMove={this.props.move} className="landingHeader">
          <div className="outterWrapper vh">
            <div className="mainHeader">
              <div className="row row__padding">
                <div className="half">
                  <h1>Hey I'm Spencer</h1>
                </div>
              </div>
              <div className="row row__padding">
                <div className="row">
                  <CMYK img={this.state.text}/>
                </div>
              </div>
              <div className="row row__padding row__padding--sides">
                <div className="third landingNav">
                  <Nav />
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="portfolio" className="outterWrapper">
          <Portfolio passChildState={this.passChildState} projects={this.state.projects} getPiece={this.props.getPiece} pieceObj={this.state.pieceObj}/>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default Landing;