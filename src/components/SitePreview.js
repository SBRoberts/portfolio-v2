import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';


class SitePreview extends Component {
  constructor(props){
    super(props);
    this.state = {
      previewType: 'desktop',
    }
    library.add(faMobileAlt)
    library.add(faTabletAlt)
    library.add(faDesktop)
  }
  componentDidMount(){
  }
  changePreviewType = (e) => {
    const target = e.currentTarget
    const previewType = target.classList[target.classList.length -1]
    this.setState({
      previewType
    })
    // console.log(this.state)
    // console.log(previewType);
    
  }
  render(){
    return(
      <section>
        <div className="row justifyCenter">
          <h4>Preview</h4>
        </div>
        <div className="container previewTypes">
          <input type="radio" name="sitePreview" value="" id="mobilePortrait" />
          <label htmlFor="mobilePortrait" className="previewType mobile" onClick={this.changePreviewType}>
            <FontAwesomeIcon icon="mobile-alt" />
          </label>

          <input type="radio" name="sitePreview" value="" id="tabletLandscape" />
          <label htmlFor="tabletLandscape" className="previewType tablet" onClick={this.changePreviewType}>
            <FontAwesomeIcon icon="tablet-alt" />
          </label>

          <input type="radio" name="sitePreview" value="" id="desktopLandscape" />
          <label htmlFor="desktopLandscape" className="previewType desktop" onClick={this.changePreviewType}>
            <FontAwesomeIcon icon="desktop" />
          </label>
        </div>

        <div className="row justifyCenter">
          <div className={`siteWindow ${this.state.previewType}`}>
            {/* <div className="overlay">
              <div>
                <h3> Click to view</h3>
                <i className="fas fa-hand-pointer fa-1x"></i>
              </div>
            </div> */}
            <object type="text/html" data={this.props.path}>
            </object>
          </div>
        </div>
      </section>
    )
  }
}

export default SitePreview;