import React, { useState } from "react";

function SleepInfo({ formData, setFormData }) {
  return (
    <div>
      <div className="number-input-box">
        <input
          className="number-input"
          type="number"
          required
          value={formData.sleep}
          placeholder="How many average hours do you sleep per day?"
          onChange={(e) => {
            setFormData({ ...formData, sleep: e.target.value });
          }}
        ></input>
      </div>
    </div>
  );
}

export default SleepInfo;
