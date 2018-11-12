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

  render() {
    return (
      <div className="movableObjectContainer">
        {
          typeof this.props.img === "string"
          ?
          <div className="displayContainer displayContainer__img">
            <ReactSvgInjector src={this.props.img} className="cyanObj">
            </ReactSvgInjector>

            <ReactSvgInjector src={this.props.img} className="magentaObj">
            </ReactSvgInjector>

            <ReactSvgInjector src={this.props.img} className="yellowObj">
            </ReactSvgInjector>
          </div>
          :
          <div className="displayContainer displayContainer__text">
            <svg className="cyanObj" id="cyanObj">
              {this.props.img}
            </svg>
            <svg className="magentaObj" id="magentaObj">
              {this.props.img}
            </svg>
            <svg className="yellowObj" id="obj">
              {this.props.img}
            </svg>
          </div>
        }
      </div>
    )
  }
}

export default CMYK;