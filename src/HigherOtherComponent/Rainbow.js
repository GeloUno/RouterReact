import React from "react";
import {Parallax, Background} from 'react-parallax'

//const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};


const Rainbow = Wraapped => {
  const colorS = [
    "red",
    "blue",
    "black",
    "pink",
    "green",
    "purple",
    "amber",
    "teal",
    "cyan",
    "grey",
    "brown"
  ];
  const randomColor = colorS[Math.floor(Math.random() * colorS.length)];
  const classColor = [randomColor + "-text"];
  //  console.log(classColor);

  return props => {
    return (
      <div className={classColor}>
       {/* <div class="parallax-container">
    <div class="parallax">*/}
    <Parallax
    blur ={0}
            bgImage={require("../assets/reconnoiter-60779.jpg")}
            bgImageAlt = "Szukaj"
            strength={300}>           
            <div style={{height:400}}>
         {/*   <div style={insideStyles}>HTML inside the parallax</div> */}
          </div>
          </Parallax>
           {/*  </>
        </div>*/}
        <Wraapped {...props} />
      </div>
    );
  };
};
export default Rainbow;
