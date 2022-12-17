import React, { useState } from "react";

function AimInfo({ formData, setFormData }) {
  return (
    <div>
      <div
        className="increase"
        onClick={() => {
          setFormData({ ...formData, aim: "increase" });
        }}
      >
        increase weight img
      </div>
      <div
        className="keepform"
        onClick={() => {
          setFormData({ ...formData, aim: "keep form" });
        }}
      >
        keep form img
      </div>
      <div
        className="decrease"
        onClick={() => {
          setFormData({ ...formData, aim: "decrease" });
        }}
      >
        decrease weight img
      </div>
    </div>
  );
}

export default AimInfo;
