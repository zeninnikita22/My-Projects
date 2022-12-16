import React, { useState } from "react";

function SleepInfo({ formData, setFormData }) {
  return (
    <div>
      <p>Average number of hours slept per day:</p>
      <input type="number"></input>
    </div>
  );
}

export default SleepInfo;
