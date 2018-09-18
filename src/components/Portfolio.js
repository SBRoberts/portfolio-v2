import React, { Component } from 'react';
import _ from 'lodash';
// import { Link } from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import projects from '../projects.js';

// COMPONENTS
// import Nav from './Nav';
// import CMYK from './CMYK';
import SitePreview from './SitePreview'

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // projects: this.props.projects,
    }
  }
  componentDidMount(){
    // library.add(faArrowRight)
  }
  render() {
    return (
      <section id="portfolioPage" >
        <div className="pieces">
          <ul>
            {
              projects.map((piece,i) => {
                const pieceName = _.camelCase(piece.name)
                const backgroundImage = {
                  backgroundImage: `url(${piece.image})`,
                  backgroundRepeat: 'no-repeat',
                  // backgroundSize: 'contain',

                }
                if (piece.display === true) {
                  
                  return (
                    <li key={i}>
                      <input type="checkbox" name={pieceName} id={`${pieceName}Label`} />
                        <label className="piece" htmlFor={`${pieceName}Label`} id={pieceName} onMouseOver={this.props.getPiece}>
                        <div className="row pieceHeader">
                          <div className="row pieceImage" style={backgroundImage}></div>
                            <div>
                              <div className="row">
                                <h3 className="order">{`0${piece.order}`}</h3>
                              </div>
                              <div className="row">
                                <h2 className="pieceName">{piece.name}</h2>
                              </div>
                              <div className="row">
                                <h4 className="caption">{piece.caption}</h4>
                              </div>
                            </div>
                          </div>
                          <div className="pieceInfo row wrap">
                            <div className="description twoThirds">
                              <p>{piece.description}</p>
                            </div>
                            <div className="tools row third">
                              <ul>
                                {
                                  piece.tools.map((tool, i) => {
                                    // console.log(Object.entries(tool)[0][1])
                                    return <li key={i}>{tool}</li>
                                  })
                                }
                              </ul>
                            </div>
                            <div className="row">
                              <a href={piece.path} target="_blank" className="highlightButton">
                                <p>View Project</p>
                                <FontAwesomeIcon icon={faArrowRight} />
                              </a>
                            </div>
                          </div>
                          <div className="sitePreview">
                            <SitePreview path={piece.path} tools={piece.tools}/>
                          </div>
                        </label>
                      {/* </Link> */}
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
        {/* <h2>THIs Is POrOtFolio</h2> */}
      </section>
    )
  }
}
export default Portfolio;