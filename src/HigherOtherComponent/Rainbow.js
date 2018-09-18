import React from "react";
import {Parallax, Background} from 'react-parallax'

const insideStyles = {  
  padding: 20, 
  color:'white',
   fontSize:'35px', 
   fontWeight:'900',
    position: 'absolute',
    textAlign: 'center',
     top: '20%',
      left: '60%',      
        transform: 'translate(0%,0%)'
      };


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
      <div>
    {/*  <div className={classColor}>  */}     
    <Parallax
    blur ={0}
            bgImage={require("../assets/businessman-watching-through-binoculars_53419-6068.jpg")}
            bgImageAlt = "Szukaj"
            strength={400}
           
            >           
            <div style={{height:400}}>
          {
            /* <div style={insideStyles}><div className='center'> Szukasz</div><div> Frontend Developera</div></div>
          */}
         </div>
          </Parallax>   
        <Wraapped {...props} />
       
      </div>
    );
  };
};
export default Rainbow;
