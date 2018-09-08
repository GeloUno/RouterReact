import React from "react";
import {Link, NavLink, withRouter} from 'react-router-dom'
// npm install react-router-dom
const AppNavBar = () => {
// const AppNavBar = (props) => {
//   setTimeout(() => {
//   props.history.push('/about');
//   console.log(props);
  
// },3000);
  return (
    <nav className="nav-wrapper blue">
      <div className="container">
        <a className="brand-logo left">Router Post</a>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/post">Post</NavLink>
       </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
       </li>
          <li>
            <NavLink to="/about">About</NavLink>
       </li>
        </ul>
      </div>
    </nav>
  );
};
export default withRouter(AppNavBar);
