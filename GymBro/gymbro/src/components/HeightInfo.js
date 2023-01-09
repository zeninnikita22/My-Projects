import React, { useState } from "react";
import "../styles/Data.css";

function HeightInfo({ formData, setFormData }) {
  return (
    <div className="height-info">
      {/* <div className="intro-text">
        Your GymBro needs information about you to suggest the best exercises
        for you
      </div> */}
      <div className="number-input-box">
        <input
          required
          className="number-input"
          placeholder="Please type in your height in centimeters"
          type="number"
          value={formData.height}
          onChange={(e) => {
            setFormData({ ...formData, height: e.target.value });
          }}
        ></input>
      </div>
    </div>
  );
}

export default HeightInfo;
