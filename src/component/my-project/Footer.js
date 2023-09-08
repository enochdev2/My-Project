import React from "react"
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// import imageSearch from "./images/ImageSearch.png"


const Footer = () => {

  // const url = "http://google.com";
  return (
    <div className="footer">
      <div className="footer_icon">
        <a href=""><FaFacebookSquare /></a>
        <a href=""><FaTwitter /></a>
        <a href="http://linkedin.com/in/enoch-akhabue-01b9912
69"><FaLinkedin /></a>
        <a href="https://instagram.com/enochpromise1" ><FaInstagram className="instagram" /></a>
      </div>
      <div className="copyright">
        <p>copyright &copy; {new Date().getFullYear()} </p>
      </div>
    </div>
  )
}


export default Footer;