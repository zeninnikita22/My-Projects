import React, { useState } from "react";

function WeightInfo({ formData, setFormData }) {
  return (
    <div>
      <p>Please enter your weight:</p>
      <input
        type="number"
        value={formData.weight}
        onChange={(e) => {
          setFormData({ ...formData, weight: e.target.value });
        }}
      ></input>
    </div>
  );
}

export default WeightInfo;
