import React from "react";
// npm install react-router-dom
const AppNavBar = () => {
  return (
    <nav className="nav-wrapper blue">
      <div className="container">
        <a className="brand-logo left">Router Post</a>
        <ul className="right">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default AppNavBar;
