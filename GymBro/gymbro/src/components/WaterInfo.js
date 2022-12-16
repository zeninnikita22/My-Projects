import React, { useState } from "react";

function WaterInfo({ formData, setFormData }) {
  return (
    <div>
      <p>Average litres of water you drink per day:</p>
      <input type="number"></input>
    </div>
  );
}

export default WaterInfo;
