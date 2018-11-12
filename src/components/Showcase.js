import React, { Component } from 'react';
import SitePreview from './SitePreview';
import projects from '../projects';
import _ from 'lodash';

class Showcase extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects,
    }
    
  }
  getPiece = () => {
    const name = this.props.match.params.name
    const mutatedName = _.kebabCase(name.slice(1, name.length)).split('-').join(' ')
    const pieceObj = Array.from(projects).filter((project) => project.name.toLowerCase() === mutatedName)[0]
    
    this.setState({
      pieceObj,
    })
  }
  render(){
    return (
      <div>
        {
          <section className="piece" id={this.state.pieceObj.name} onMouseOver={this.props.getPiece}>
            <div className="row">
              <div>
                <div className="row">
                  <h3 className="order">{`0${this.state.pieceObj.order}`}</h3>
                </div>
                <div className="row">
                  <h2 className="pieceName">{this.state.pieceObj.name}</h2>
                </div>
                <div className="row">
                  <h4 className="caption">{this.state.pieceObj.caption}</h4>
                </div>
                <div className="row">
                </div>
              </div>
            </div>
            <div className="pieceInfo row">
              <div className="description twoThirds">
                <p>{this.state.pieceObj.description}</p>
              </div>
            </div>
            <div className="sitePreview">
              <SitePreview path={this.state.pieceObj.path} tools={this.state.pieceObj.tools} />
            </div>
          </section>
        }
      </div>
    )
  }
}

export default Showcase;