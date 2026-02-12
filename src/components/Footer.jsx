import React from "react";
import { Link } from "react-router-dom";
import links from "../assets/links";
import "../styles/Footer.css";
import { Leetcode } from "@boxicons/react";
import {
  Wrench,
  Mail,
  Phone,
  MapPin,
  Github,
  Facebook,
  Smile,
  Twitter,
  SquareCode,
  Linkedin,
  Instagram,
} from "lucide-react";


const Footer = () => {
  return (

      <div className="footer-container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              {/* <div className="logo-icon">
                <Wrench />
              </div> */}
              <h2><span style={{fontFamily:"initial"}}>{'<'}<span style={{color:"#72a1dea2"}}>Sonal</span>/Gupta{'>'}</span></h2>
            </Link>

            <p className="footer-description">
              Constantly exploring new technologies and looking for opportunities to stay updated in this ever-evolving field.
            </p>

            <div className="social-links">
              {links.map((link) => (
                <a key={link.name} href={link.url} className="social-icon">
                  <link.icon/>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-list">
               <li><a className="footer-link" href="#about-page">About</a></li>
                <li><a className="footer-link" href="#skills">Skills</a></li>
                <li><a className="footer-link" href="#my-project">Projects</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-title">Areas of Expertise</h4>
            <ul className="footer-list">
              {[
                "Full-Stack Development",
                "Cloud Computing",
                "Software Engineering",
                "Frontend Development",
                "Backend Development",
                "Database Management",
              ].map((service) => (
                <li key={service} className="footer-text">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-title">Contact Me</h4>
            <ul className="contact-list">
              <li>
                <MapPin />
                <span>Ghaziabad, Uttar Pradesh</span>
              </li>
              {/* <li>
                <Phone />
                <span>+91 9999999999</span>
              </li> */}
              <li>
                <Mail />
                <span>sonalguptaprince2005@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
            <p>Coding: Where Logic Becomes Magic</p><Smile />
        </div>
      </div>
  );
};

export default Footer;
