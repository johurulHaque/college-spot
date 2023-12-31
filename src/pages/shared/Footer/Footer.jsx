import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter
} from "react-icons/fa";
import logo from "../../../assets/logo3.png";

const Footer = () => {
  return (
    <footer className="footer p-10 mt-9  bg-[url('/footer.png')] h-[100%] text-base-content">
      <div>
        <img src={logo} alt="" className="w-24" />
        <p>
          College Spot Ltd.
          <br />
          <p>Copyright © 2023 - All right reserved</p>
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">FAQs</a>
        <a className="link link-hover">Why Choses us </a>        
      </div>

      <div>
        <span className="footer-title">Education</span>
        <a className="link link-hover">College Education</a>
        <a className="link link-hover">University Education</a>        
        <a className="link link-hover">Education Abroad</a>
        <a className="link link-hover">Language Club</a>        
      </div>
      <div>
        <span className="footer-title">CONTACT INFORMATION</span>
        <a className="link link-hover flex gap-2">
          <FaMapMarkerAlt />
          4005, Silver business point USA
        </a>
        <a className="link link-hover flex gap-2">
          <FaPhone />
          123 456 789
        </a>
        <a className="link link-hover flex gap-2">
          <FaMailBulk />
          info@gmail.com
        </a>
        <div className="flex gap-3">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebook className="text-2xl text-[#09ccd0]" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram className="text-2xl text-[#09ccd0]" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter className="text-2xl text-[#09ccd0]" />
          </a>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
