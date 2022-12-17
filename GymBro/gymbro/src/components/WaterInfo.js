import React, { useState } from "react";

function WaterInfo({ formData, setFormData }) {
  return (
    <div>
      <p>Average litres of water you drink per day:</p>
      <input
        type="number"
        value={formData.water}
        onChange={(e) => {
          setFormData({ ...formData, water: e.target.value });
        }}
      ></input>
    </div>
  );
}

export default WaterInfo;
