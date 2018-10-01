import React, { Component } from 'react';
import '../Component/About.css';
import mePhoto from '../assets/112.png';
import studyLogo from '../assets/PolLub.png';
import e3dPrinting from '../assets/3DPrinting.png';
import logoGoogleMaps from '../assets/location1.png';
import logoGitHub from '../assets/Octocat.png';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => (
  <div
    style={{
      width: '0',
      height: '0',
      borderLeft: '20px solid transparent',
      borderRight: '20px solid transparent',
      borderTop: '30px solid red',
      borderRadius: '50%',
      transform: 'translate(-50%,-100%)'
    }}  
  >
  <img src={mePhoto} style={{width:'45px', height:'45px', transform:'translate(-50%,-140%'}}></img></div>
);
export default class About extends Component {
  static defaultProps = {
    center: {
      lat: 51.173,
      lng: 22.277
    },
    zoom: 9
  };

  render() {
    return (
      <div>
        <div className="container containerAbout">
          <div className="center">
            <div className="row">
              <div className="col s12 m12 l6">
                <div className="card z-depth-3">
                  <img
                    className="logoCard"
                    src={mePhoto}
                    alt="Grzegorz Photo"
                  />
                  <div className="card-title card-titleAbout">
                    Grzegorz Kędziora
                  </div>
                  <div className="card-container card-containerAbout">
                    <div>
                      <p>ge.kedziora@gmail.com</p>{' '}
                      <i className="fas fa-map-marker-alt" />{' '}
                    </div>
                  </div>
                </div>
                <div className="card z-depth-3">
                  <div className="card-title card-titleAbout">Knowledge</div>
                  <div className="card-container card-containerAbout">
                    <p>Lublin Uniwesyty of Technology</p>
                    <p>Informatics</p>
                    <p>Engineer</p>
                    <p>2015-2019</p>
                  </div>
                  <img
                    className="logoCard"
                    src={studyLogo}
                    alt="Uniwesyty of technology"
                  />
                </div>
                <div className="card z-depth-3">
                  <div className="card-title card-titleAbout">Hobby</div>
                  <div className="card-container card-containerAbout">
                    <p>3D Printing</p>
                    <p>F360</p>
                    <p>AutoCad</p>
                    <img
                      className="logoCard"
                      src={e3dPrinting}
                      alt="E3D Printing"
                    />
                  </div>
                </div>
              </div>
              <div className="col s12 m12 l6 push-l1">
                <div className="card z-depth-3">
                  <div className="card-title card-titleAbout">Location</div>
                  <div className="card-container card-containerAbout">
                    <img
                      className="logoCard"
                      src={logoGoogleMaps}
                      alt="logoGoogleMaps"
                    />
                    <div
                      style={{
                        height: '59vh',
                        width: '100%',
                        paddingTop: '15px',
                        paddingLeft: '15px',
                        paddingRight: '15px'
                      }}
                    >
                      <GoogleMapReact
                        bootstrapURLKeys={{
                          key: 'AIzaSyD3P1dooTvHi0ogRWI6VQv0SmltETBCW-4'
                        }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                      >
                        <AnyReactComponent
                          lat={this.props.center.lat}
                          lng={this.props.center.lng}
                        />
                      </GoogleMapReact>
                    </div>
                    {
                      // TODO: add google maps
                    }
                  </div>
                </div>
                <div className="card z-depth-3 cardGitHub">
                  <div className="card-title card-titleAbout">GitHub</div>
                  <div className="card-container card-containerAbout">
                    <p>github.com/GeloUno</p>
                  </div>
                  <img className="logoCard" src={logoGitHub} alt="GitHub" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
