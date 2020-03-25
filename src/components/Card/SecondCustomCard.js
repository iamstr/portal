import "assets/css/secondCardStyles.css";
import BusImage from "assets/img/bus-80.png";
import Button from "components/CustomButtons/Button.js";
import React from "react";

export default function Card(props) {
  return (
    <article className=" grow second-card ">
      <img alt="bus icon" src={BusImage} className="card-img" />
      <div className="info-card">
        <h6 className="info-header">Bus Name/No</h6>
        <p className="info-desc">11</p>
      </div>
      <div className="info-card">
        <h6 className="info-header">Seat Remaining</h6>
        <p className="info-desc">40</p>
      </div>
      <Button color="safari">Add Ticket Details</Button>
    </article>
  );
}
