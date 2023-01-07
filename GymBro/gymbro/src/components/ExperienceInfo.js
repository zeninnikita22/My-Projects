import React, { useState } from "react";
import "../styles/Data.css";

function ExperienceInfo({ formData, setFormData }) {
  const [beginnerClicked, setBeginnerClicked] = useState(false);
  const [intermediateClicked, setIntermediateClicked] = useState(false);
  const [expertClicked, setExpertClicked] = useState(false);

  return (
    <div className="experience-info">
      <div className="experience-info__title">
        What is your level of experience?
      </div>
      <div className="experience-box">
        <div
          className={beginnerClicked ? "clicked" : "beginner"}
          onClick={() => {
            setFormData({ ...formData, experience: "beginner" });
            setBeginnerClicked(true);
            setIntermediateClicked(false);
            setExpertClicked(false);
          }}
        >
          Beginner
        </div>
        <div
          className={intermediateClicked ? "clicked" : "intermediate"}
          onClick={() => {
            setFormData({ ...formData, experience: "intermediate" });
            setBeginnerClicked(false);
            setIntermediateClicked(true);
            setExpertClicked(false);
          }}
        >
          Intermediate
        </div>
        <div
          className={expertClicked ? "clicked" : "expert"}
          onClick={() => {
            setFormData({ ...formData, experience: "expert" });
            setBeginnerClicked(false);
            setIntermediateClicked(false);
            setExpertClicked(true);
          }}
        >
          Expert
        </div>
      </div>
    </div>
  );
}

export default ExperienceInfo;
