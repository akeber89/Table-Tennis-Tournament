import React from "react";
//import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => (
  <footer className="footer">
    <SocialIcon className="social" url="http://linkedin.com/in/akeberm" />
    <SocialIcon className="social" url="https://codepen.io/Bexiz" />
    <br />
    &copy; <span id="c_year">2020</span> Created by Rebeka Meszaros
  </footer>
);
export default Footer;
