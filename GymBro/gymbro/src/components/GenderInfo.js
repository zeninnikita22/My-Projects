import React, { useState } from "react";

function GenderInfo({ formData, setFormData }) {
  return (
    <div>
      <div
        className="male"
        onClick={() => {
          setFormData({ ...formData, gender: "male" });
        }}
      >
        male img
      </div>
      <div
        onClick={() => {
          setFormData({ ...formData, gender: "female" });
        }}
        className="female"
      >
        female img
      </div>
    </div>
  );
}

export default GenderInfo;
