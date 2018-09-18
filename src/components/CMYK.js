import React, { Component } from 'react';
import { ReactSvgInjector } from "react-svg-injector";

class CMYK extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientX: this.props.clientX,
      clientY: this.props.clientY
    }
  }
  componentDidMount() {
    // console.log('x:',this.props.clientX,'y:', this.props.clientY);

  }

  render() {
    return (
      <div className="movableObjectContainer">
        {
          typeof this.props.img === "string"
            ?
            <div className="displayContainer displayContainer__img">
              <ReactSvgInjector src={this.props.img} className="cyanObj">
                {/* <Mutate selector="svg" fill="blue !important"/> */}
              </ReactSvgInjector>

              <ReactSvgInjector src={this.props.img} className="magentaObj">
                {/* <Mutate selector="g" fill="#BADA55" /> */}
              </ReactSvgInjector>

              <ReactSvgInjector src={this.props.img} className="yellowObj">
                {/* <Mutate selector="g" fill="#BADA55" /> */}
              </ReactSvgInjector>
            </div>
            // <div className="movableObjectContainer movableObjectContainer__img" onMouseEnter={this.returnToInitialPosition}>
            // </div>
            :
            <div className="displayContainer displayContainer__text">
              <svg className="cyanObj" style={{ top: 0, left: 0, }}>
                {this.props.img}
              </svg>
              <svg className="magentaObj" style={{ top: 0, left: 0, }}>
                {this.props.img}
              </svg>
              <svg className="yellowObj" style={{ top: 0, left: 0, }}>
                {this.props.img}
              </svg>
            </div>
            // <div className="movableObjectContainer movableObjectContainer__text" onMouseEnter={this.returnToInitialPosition}>
            // </div>
        }
      </div>
    )
  }
}

export default CMYK;