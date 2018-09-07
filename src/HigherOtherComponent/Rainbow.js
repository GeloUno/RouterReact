import React from "react";

const Rainbow = (Wraapped) => {

    const colorS = ['red', 'blue', 'black', 'pink', 'green','purple','amber','teal','cyan','grey','brown'];
    const randomColor = colorS[Math.floor(Math.random() * colorS.length)];
    const classColor = [randomColor + '-text'];
    console.log(classColor);
    
  return (props)=> {
      return(
          
        <div className={classColor}>
          <div><h4 className="center black-text">Wrap Higer Other Component</h4></div>
      <Wraapped {...props} />
    </div>)
    
      }

};
export default Rainbow
