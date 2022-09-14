import React, { useEffect } from "react";
import "./TeamCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import WOW from "wowjs";

export default function TeamCard(props) {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <div className="team-card wow bounceInUp">
      <div
        className="img"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <ul className="social">
        <li className="active">
          <FontAwesomeIcon icon={faYoutube} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
      </ul>
      <div className="team-info">
        <h3>{props.name}</h3>
        <h5>{props.position}</h5>
      </div>
    </div>
  );
}
