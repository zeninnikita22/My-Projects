import React, { useState } from "react";

function BodyTypeInfo({ formData, setFormData }) {
  return (
    <div>
      <div
        className="ectomorph"
        onClick={() => {
          setFormData({ ...formData, bodytype: "ectomorph" });
        }}
      >
        ectomorph img
      </div>
      <div
        className="mesomorph"
        onClick={() => {
          setFormData({ ...formData, bodytype: "mesomorph" });
        }}
      >
        mesomorph img
      </div>
      <div
        className="endomorph"
        onClick={() => {
          setFormData({ ...formData, bodytype: "endomorph" });
        }}
      >
        endomorph img
      </div>
    </div>
  );
}

export default BodyTypeInfo;
