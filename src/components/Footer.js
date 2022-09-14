import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import WOW from "wowjs";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="Fgrid">
          <div className="Fcol wow bounceInUp">
            <h5>About Aveit</h5>
            <p>
              Required honoured trifling eat pleasure man relation. Assurance
              yet bed was improving furniture man. Distrusts delighted Excuse
              few the remain highly feebly add people manner say. It high at my
              mind by roof.
            </p>
            <div className="icons">
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
          <div className="Fcol wow bounceInUp">
            <h5>Services</h5>
            <ul>
              <li>SEO Marketing</li>
              <li>Pay Per Click</li>
              <li>SEO Services</li>
              <li>Social Media</li>
              <li>SEO Audit</li>
            </ul>
          </div>
          <div className="Fcol wow bounceInUp">
            <h5>Company</h5>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Career</li>
              <li>Terms</li>
              <li>Team Members</li>
            </ul>
          </div>
          <div className="Fcol wow bounceInUp">
            <h5>Contact Us</h5>
            <ul>
              <li>
                <div className="contact">
                  <h4>ADDRESS</h4>
                  <p>California, TX 70240</p>
                </div>
              </li>
              <li>
                <div className="contact">
                  <h4>EMAIL</h4>
                  <p>support@validtheme.com</p>
                </div>
              </li>
              <li>
                <div className="contact">
                  <h4>CONTACT</h4>
                  <p>+20-120-267-9448</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
