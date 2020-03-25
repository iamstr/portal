import logo from "assets/img/transportation.png";
import React from "react";
import "./css/buss.css";
export default function BusAnimation() {
  return (
    <div className="bus">
      <div>
        <img src={logo} alt="" className="bus-img" />
      </div>
      <div className="road">
        <img
          src="https://www.dropbox.com/s/qczcjewss1v7vk6/road.png?raw=1"
          alt=""
          className="road-img"
        />
      </div>
      
    </div>
  );
}
