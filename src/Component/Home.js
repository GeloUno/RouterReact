import React from "react";
import Rainbow from '../HigherOtherComponent/Rainbow'

const Home = () => {
  return (
    <div className="containner">
      <h3 className="center">Home</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aut
        nam placeat similique animi perspiciatis porro quos quod numquam, magnam
        delectus cumque. Praesentium repellat in optio culpa! Pariatur,
        doloribus sunt.
      </p>
    </div>
  );
};
export default Rainbow(Home);
