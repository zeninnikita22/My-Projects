import React, { useState } from "react";

function WaterInfo({ formData, setFormData }) {
  return (
    <div>
      <div className="number-input-box">
        <input
          className="number-input"
          type="number"
          placeholder="Average litres of water you drink per day"
          value={formData.water}
          onChange={(e) => {
            setFormData({ ...formData, water: e.target.value });
          }}
        ></input>
      </div>
    </div>
  );
}

export default WaterInfo;
