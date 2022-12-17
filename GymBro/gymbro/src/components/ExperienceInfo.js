import React, { useState } from "react";

function ExperienceInfo({ formData, setFormData }) {
  return (
    <div>
      <div
        className="newbie"
        onClick={() => {
          setFormData({ ...formData, experience: "newbie" });
        }}
      >
        newbie img
      </div>
      <div
        className="intermediate"
        onClick={() => {
          setFormData({ ...formData, experience: "intermediate" });
        }}
      >
        intermediate img
      </div>
      <div
        className="expert"
        onClick={() => {
          setFormData({ ...formData, experience: "expert" });
        }}
      >
        expert img
      </div>
    </div>
  );
}

export default ExperienceInfo;
