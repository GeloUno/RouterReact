import React, { Component } from 'react'
import "../Component/About.css"
import mePhoto from'../assets/112.png'
import studyLogo from'../assets/PolLub.png'
import e3dPrinting from'../assets/3DPrinting.png'
import logoGoogleMaps from '../assets/location1.png';
import logoGitHub from '../assets/Octocat.png';

//import MyMapGoogle from '../HigherOtherComponent/MyMapGoogle'

 class About extends Component {
  render() {
    return (
      <div>
      <div className="container containerAbout">
      <div className="center">
      <div className="row">
      <div className="col s12 m12 l6">
      <div className="card z-depth-3">
      <img className="logoCard" src={mePhoto} alt="Grzegorz Photo"/>
      <div className="card-title card-titleAbout">Grzegorz Kędziora</div>
      <div className="card-container card-containerAbout">    
    
     <div><p>ge.kedziora@gmail.com</p></div>
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
      <img className="logoCard" src={studyLogo} alt="Uniwesyty of technology"/>
     </div>
      <div className="card z-depth-3">
      <div className="card-title card-titleAbout">Hobby</div>
      <div className="card-container card-containerAbout">
      <p>3D Printing</p>
      <p>F360</p>      
      <p>AutoCad</p>
        <img className="logoCard" src={e3dPrinting} alt="E3D Printing"/>
        </div>
        </div>
     
      
      </div>
      <div className="col s12 m12 l6 push-l1">
 <div className="card z-depth-3">
      <div className="card-title card-titleAbout">Location</div>
      <div className="card-container card-containerAbout">
      <div className="mapGoogle">mapa googla</div>
          
       <img className="logoCard" src={logoGoogleMaps} alt="logoGoogleMaps"/>
     
      {// TODO: add google maps
        }
        </div>
</div>
<div className="card z-depth-3 cardGitHub">
      <div className="card-title card-titleAbout">GitHub</div>
      <div className="card-container card-containerAbout">
      <p>github.com/GeloUno</p>      
      </div>
      <img className="logoCard" src={logoGitHub} alt="GitHub"/>
     </div>
      </div>


      </div>
      </div>
      </div>
        
      </div>
    )
  }
}
export default About;