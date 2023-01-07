import React, { useState } from "react";
import "../styles/Data.css";
import MaleGymPhoto from "../images/male-gym.png";
import FemaleGymPhoto from "../images/296-2963952_fitness-png-fitness-woman-png-clipart.png";

function GenderInfo({ formData, setFormData }) {
  const [maleClicked, setMaleClicked] = useState(false);
  const [femaleClicked, setFemaleClicked] = useState(false);

  return (
    <div className="gender-info">
      <div className="gender-info__title">Please choose your gender</div>
      <div className="gender-box">
        <div
          className={maleClicked ? "clicked" : "male"}
          onClick={() => {
            setFormData({ ...formData, gender: "male" });
            setMaleClicked(true);
            setFemaleClicked(false);
          }}
        >
          <img src={MaleGymPhoto} alt="Male"></img>
        </div>
        <div
          className={femaleClicked ? "clicked" : "female"}
          onClick={() => {
            setFormData({ ...formData, gender: "female" });
            setMaleClicked(false);
            setFemaleClicked(true);
          }}
        >
          <img src={FemaleGymPhoto} alt="Female"></img>
        </div>
      </div>
    </div>
  );
}

export default GenderInfo;
