import React, { useState } from "react";

function HeightInfo({ formData, setFormData }) {
  return (
    <div>
      <p>Please enter your height:</p>
      <input
        type="number"
        value={formData.height}
        onChange={(e) => {
          setFormData({ ...formData, height: e.target.value });
        }}
      ></input>
    </div>
  );
}

export default HeightInfo;
