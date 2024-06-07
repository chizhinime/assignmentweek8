import React from 'react';

const Header = () => {
  return (
    <header className="header">
    <a href="#" className="logo"><img src='/src/assets/logo 1.png'></img></a>

        <i className="fa-solid fa-bars" id="menu-icon"></i>

    <nav className="navbar">
          <a href="./AboutMe.jsx">About me</a>
          <a href="./Skills.jsx">Skills</a>
          <a href="./Portfolio.jsx">Portfolio</a>
          <a href="./Contact.jsx">Contact me</a>
      </nav>
    </header>
  );
};

export default Header;
