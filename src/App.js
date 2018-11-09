import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import _ from 'lodash';

// FILES
import './App.css';
import projects from './projects.js';

// COMPONENTS
// import Grid from './components/Grid';
import Landing from './components/Landing';
import AboutContact from './components/AboutContact';

class App extends Component {
  constructor(){
    super();
    this.state = {
      // projects,
      isVisible: false,
    }
  }
  componentDidMount(){

  }
  
  //general function for passing info from child component to App
  passChildState = (key, val) => {
    this.setState({
      [key]: val,
    })
  }
  
  move = (e) => {
    // console.log('CLIENT Y',e.clientY);
    // console.log('CLIENT X',e.clientX);

    const clientY = e.clientY;
    const clientX = e.clientX;

    const movableObjectContainer = document.getElementsByClassName('movableObjectContainer')

      Object.entries(movableObjectContainer).forEach((container) => {
      const moveObjects = Object.entries(container[1].getElementsByTagName('svg'))

      // Firefox 1.0+
      // firefox blend modes behave differently than chrome or safari, 
      const isFirefox = typeof InstallTrigger !== 'undefined';
      if(isFirefox){
        moveObjects.forEach((obj) => {
          obj[1].style["mix-blend-mode"] = "screen"
        })
      }

      moveObjects.map((obj) => {
        const classList = obj[1].className.baseVal.split(' ')
        const cyan = classList[classList.indexOf('cyanObj')]
        const magenta = classList[classList.indexOf('magentaObj')]
        const yellow = classList[classList.indexOf('yellowObj')]
        const parent = obj[1].parentElement.parentElement
        const parentType = obj[1].parentElement.classList[1]
        
        if (parentType === 'displayContainer__text'){
          parent.style.width = `${obj[1].getElementsByTagName('text')[0].textLength.baseVal.value}px`
        }
        // conditionals for each layer, determining how much they move
        obj[1].getElementsByTagName('text')[0].style.fill = '';
        obj[1].getElementsByTagName('text')[1].style.fill = '';
        if (classList.includes(cyan)) {
          obj[1].style.top = `${clientY / 40}px`;
          obj[1].style.left = `${clientX / 40}px`;
          
        }
        if (classList.includes(magenta)) {
          obj[1].style.top = `${clientY / 35}px`;
          obj[1].style.left = `${clientX / 35}px`;
        }
        if (classList.includes(yellow)) {
          obj[1].style.top = `${clientY / 30}px`;
          obj[1].style.left = `${clientX / 30}px`;
        }
        // reset items when their container if hovered over
        if (e.target.className === 'movableObjectContainer' || e.target.className.baseVal === 'primaryHeading') {
          
          // console.log(e.target.className);
          // obj[1].style.transition = "all .4s cubic-bezier(0.3,0, .5, 2)";
          obj[1].style.top = 0;
          obj[1].style.left = 0;
          obj[1].getElementsByTagName('text')[0].style.fill = '#fff';
          obj[1].getElementsByTagName('text')[1].style.fill = '#fff';
        }
        return 0
      })
      
    })

  }

  getPiece = (e) => {
    const activePieceName = e.currentTarget.id
    const lwrCasePieceName = _.lowerCase(activePieceName);
    // const pieceHeader = e.currentTarget.childNodes[0]
    // console.log(pieceHeader.style);
    
    
    projects.map((item) => {
      const pieceObj =  Array.from(projects).filter((project) => project.name === item.name)[0]
      // console.log(pieceObj);

      if (item.name.toLowerCase() === lwrCasePieceName) {
        // console.log(item)
        const color = item.color
        this.setState({
          'activePieceName': item.name,
          color,
          pieceObj,
        }, () => {
          
          document.getElementById(activePieceName).style.setProperty("--highlightColor", this.state.color);
          return 1
        })
      }
      return 0
    })
  }

  render() {
    return (
      <Router >
        <div className="App">
          <AnimatedSwitch
            atEnter={{ offset: 100 }}
            atLeave={{ offset: 100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              transform: `translateX(${styles.offset}%)`,
            })}
            className="switch-wrapper">

              <Route exact path="/" key="home" render={(props) =>
                <Landing {...props} projects={this.state.projects} passChildState={this.passChildState} getPiece={this.getPiece} move={this.move}/>
              } />

              <Route exact path="/aboutContact" key="aboutContact" render={(props) =>
                <AboutContact {...props} passChildState={this.passChildState} />
              } />

            </AnimatedSwitch>
        </div>
      </Router>
    );
  }
}

export default App;
