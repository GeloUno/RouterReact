import React, { Component } from 'react';
import logoReact from '../assets/640px-React-icon.svg.png';
import logoRedux from '../assets/redux-logo-png-transparent.png';
import logoFireBase from '../assets/firebase_logo_shot.png';
import portFolio from '../assets/PortFolio.png';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// import './importImages';

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="">
          <div className="row">
            <div className="col m6 l4">
              <div className="card"><div className="card-content">
              <img
                    className="left"
                    src={logoReact}
                    style={{
                      width: '70px',
                      
                      height: '50px',
                      position: 'aboslut',
                      top: '-100%',
                      left: '40%',
                      zIndex:'2'
                    }}
                  />
              <img
                    className="right"
                    src={logoRedux}
                    style={{
                      width: '40px',
                      height: '40px',
                      position: 'aboslut',
                      top: '-100%',
                      left: '40%',
                      zIndex:'2'
                    }}
                  />
              <img
                    className=""
                    src={logoFireBase}
                    style={{
                      width: '70px',
                      height: '50px',
                      position: 'aboslut',
                      top: '-100%',
                      left: '40%',
                      zIndex:'2'
                    }}
                  />
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    src={portFolio}
                    style={{ width: '100%', height: '100%' }}
                  />
                 
                </div>
                
                  <span className=" card-title activator grey-text text-darken-4">
                    PORTFOLIO                  
                  
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <div>
                    <a href="https://stark-harbor-50014.herokuapp.com/" className="left">
                      WEB 
                   </a>
                  </div>
                  <div className="push l1">
                    <a href="https://github.com/GeloUno/PortFolio">GITHUB</a>
                  </div>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Card Title
                    <i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
