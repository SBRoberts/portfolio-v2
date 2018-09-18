import React, { Component } from 'react';

// COMPONENTS
import Nav from './Nav';
import Portfolio from './Portfolio';
import Footer from './Footer';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientY: this.props.clientY,
      clientX: this.props.clientX,
      projects: this.props.projects,
    }
  }

  render() {
    return (
      <div>
        <header onMouseMove={this.props.move}>
          <div className="outterWrapper vh">
            <div className="mainHeader">
              <div className="row row__padding">
                <div className="half">
                  <h1>Hey I'm Spencer</h1>
                </div>
              </div>
              <div className="row row__padding">
                <div className="twoThirds">
                  <h2 className="primaryHeading">Web developer & code whisperer</h2>
                </div>
              </div>
              <div className="row row__padding row__padding--sides">
                <div className="third landingNav">
                  <Nav />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="landingHeader">
          <div className="topLeft"></div>
          <div className="topCenter"></div>
          <div className="middleLeft">
              <CMYK img={logo} clientX={this.props.clientX} clientY={this.props.clientY} />
          </div>
          <div className="middleCenter"></div>
          <div className="bottomLeft">
              <h2>Front End Web Developer | Toronto</h2>
          </div>
          <div className="bottomCenter"></div>
        </div> */}
        </header>
        <section id="portfolio" className="outterWrapper">
          {/* <AnimatedSwitch
              atEnter={{ offset: -100 }}
              atLeave={{ offset: 100 }}
              atActive={{ offset: 0 }}
              mapStyles={(styles) => ({
                transform: `translateX(${styles.offset}%)`,
              })}
              className="switch-wrapper">
              <Route exact path="/portfolio:name" key="portfolioProject" render={(props) =>
                <Showcase {...props} passChildState={this.passChildState} projects={this.state.projects} activePieceName={this.state.activePieceName} getPiece={this.getPiece} />
              } />

            </AnimatedSwitch> */}
          <Portfolio passChildState={this.passChildState} projects={this.state.projects} getPiece={this.props.getPiece} pieceObj={this.state.pieceObj}/>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default Landing;