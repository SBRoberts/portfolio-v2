import React, { Component } from 'react';
import SitePreview from './SitePreview';
import projects from '../projects';
import _ from 'lodash';

class Showcase extends Component {
  constructor(props){
    super(props);
    // console.log(this.props);
    this.state = {
      projects,
    }
    
  }
  componentDidMount(){
    
    // console.log(this.state.pieceObj)
    
  }
  getPiece = () => {
    const name = this.props.match.params.name
    const mutatedName = _.kebabCase(name.slice(1, name.length)).split('-').join(' ')
    const pieceObj = Array.from(projects).filter((project) => project.name.toLowerCase() === mutatedName)[0]
    
    this.setState({
      pieceObj,
    }, () => {
      console.log(pieceObj);
    })
  }
  // console.log('LOCATION', props.location)
  render(){
    return (
      <div>
        {
          // piece = props.projects.filter((project) => project.name === props.activePiece)
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
              {/* <CMYK img={img} /> */}
              {/* <a href={piece.path} target="_blank">
              <FontAwesomeIcon icon="external-link-alt" />
            </a> */}
            </div>
            <div className="pieceInfo row">
              <div className="description twoThirds">
                <p>{this.state.pieceObj.description}</p>
              </div>
              <div className="tools row third">
                {/* <ul>
                {
                  piece.tools.map((tool, i) => {
                    // console.log(Object.entries(tool)[0][1])
                    return <li key={i}>{tool}</li>
                  })
                }
              </ul> */}
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