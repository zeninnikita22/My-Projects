import React, { useState } from "react";

function SleepInfo({ formData, setFormData }) {
  return (
    <div>
      <p>Average number of hours slept per day:</p>
      <input
        type="number"
        value={formData.sleep}
        onChange={(e) => {
          setFormData({ ...formData, sleep: e.target.value });
        }}
      ></input>
    </div>
  );
}

export default SleepInfo;
