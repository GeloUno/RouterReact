import React from "react";
import {Link, NavLink, withRouter,Switch} from 'react-router-dom'
import '../Component/NavBar.css'
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
        <a className="brand-logo left">Gelo</a>
        <ul className="right hide-on-small-only">
         
          <li>         
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Post</NavLink>
       </li>         
          <li>
            <NavLink to="/contact">Contact</NavLink>
       </li>
          <li>
            <NavLink to="/about">About</NavLink>
       </li>
      
        </ul>
        <div className="hide-on-med-and-up right">
        
        <i className="material-icons">
        menu
        </i>
        
        </div>
      </div>
    </nav>
  );
};
export default withRouter(AppNavBar);
