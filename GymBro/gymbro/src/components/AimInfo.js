import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "../styles/Data.css";

function AimInfo({ formData, setFormData }) {
  const [increaseClicked, setIncreaseClicked] = useState(false);
  const [keepClicked, setKeepClicked] = useState(false);
  const [looseClicked, setLooseClicked] = useState(false);

  return (
    <div className="aim-info">
      <div className="aim-info__title">What is your goal?</div>
      <div className="aim-box">
        <div
          className={increaseClicked ? "clicked" : "increase"}
          onClick={() => {
            setFormData({ ...formData, aim: "increase" });
            setIncreaseClicked(true);
            setKeepClicked(false);
            setLooseClicked(false);
          }}
        >
          Build more muscle
        </div>
        <div
          className={keepClicked ? "clicked" : "keep"}
          onClick={() => {
            setFormData({ ...formData, aim: "keep form" });
            setIncreaseClicked(false);
            setKeepClicked(true);
            setLooseClicked(false);
          }}
        >
          Keep form
        </div>
        <div
          className={looseClicked ? "clicked" : "loose"}
          onClick={() => {
            setFormData({ ...formData, aim: "decrease" });
            setIncreaseClicked(false);
            setKeepClicked(false);
            setLooseClicked(true);
          }}
        >
          Lose weight
        </div>
      </div>
    </div>
  );
}

export default AimInfo;
