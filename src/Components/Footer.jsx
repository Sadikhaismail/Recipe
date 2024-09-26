import React from 'react';
import './Footer.css';
import ImageOne from './image.png'; 
import { FaFacebook, FaInstagram, FaPinterest, FaFlipboard } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-content">
          <img src={ImageOne} className="image" alt="Footer logo" />
          <button className="newsletter-button" type="button">Newsletters</button>
          <div className="social-icons">
            <h3 className="followhead">Follow Us</h3>
            <div className="icons">
              <a href="https://www.facebook.com/allrecipes" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="facebook-icon" />
              </a>
              <a href="https://www.instagram.com/allrecipes/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="instagram-icon" />
              </a>
              <a href="https://www.pinterest.com/allrecipes/" target="_blank" rel="noopener noreferrer">
                <FaPinterest className="pinterest-icon" />
              </a>
              <a href="https://www.youtube.com/user/allrecipes/videos" target="_blank" rel="noopener noreferrer">
                <IoLogoYoutube className="youtube-icon" />
              </a>
              <a href="https://flipboard.com/@Allrecipes" target='_blank' rel='noopener noreferrer'>
              <FaFlipboard className="flipboard-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="link-column1">
            <a href="#dinners" className='footerdinner'>Dinners</a>
            <a href="#meals" className='footerdinner'>Meals</a>
            <a href="#ingredients" className='footerdinner'>Ingredients</a>
            <a href="#occasions" className='footerdinner'>Occasions</a>
            <a href="#cuisines" className='footerdinner'>Cuisines</a>
            <a href="#kitchen-tips" className='footerdinner'>Kitchen Tips</a>
            <a href="#news" className='footerdinner'>News</a>
            <a href="#features" className='footerdinner'>Features</a>
          </div>
          <div className="link-column2">
            <a href="#about-us">About Us</a>
            <a href="#anti-racism-pledge">Anti-Racism Pledge</a>
            <a href="#product-vetting">Product Vetting</a>
            <a href="#advertise">Advertise</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="link-column">
            <a href="#editorial-process">Editorial Process</a>
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms-of-service">Terms of Service</a>
            <a href="#careers">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
