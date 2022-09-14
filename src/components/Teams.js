import React from "react";
import TeamCard from "./TeamCard";
import "./Teams.css";
import img1 from "../img/team1.jpg";
import img2 from "../img/team2.jpg";
import img3 from "../img/team3.jpg";

export default function Teams() {
  const names = ["Ahmed Osama", "Ammar Rahell", "Sara Osama"];
  const positions = ["Front-End Dev", "EGY TECH CEO", "Script Typier"];
  return (
    <div className="teams">
      <div className="container">
        <div className="heading-container">
          <h5 className="wow zoomInDown">TEAM MEMBERS</h5>
          <h2 className="wow zoomInDown">Meet our professional and expert team members</h2>
        </div>
        <div className="card-grid">
          <TeamCard img={img1} name={names[0]} position={positions[0]} />
          <TeamCard img={img2} name={names[1]} position={positions[1]} />
          <TeamCard img={img3} name={names[2]} position={positions[2]} />
        </div>
      </div>
    </div>
  );
}
