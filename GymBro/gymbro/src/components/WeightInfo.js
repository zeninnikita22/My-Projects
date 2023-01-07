import React, { useState } from "react";

function WeightInfo({ formData, setFormData }) {
  return (
    <div className="weight-info">
      <div className="number-input-box">
        <input
          className="number-input"
          type="number"
          value={formData.weight}
          placeholder="Please enter your weight in kilograms"
          onChange={(e) => {
            setFormData({ ...formData, weight: e.target.value });
          }}
        ></input>
      </div>
    </div>
  );
}

export default WeightInfo;
