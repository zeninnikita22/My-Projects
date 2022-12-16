import React, { useState } from "react";
import AimInfo from "./components/AimInfo";
import BodyTypeInfo from "./components/BodyTypeInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import GenderInfo from "./components/GenderInfo";
import HeightInfo from "./components/HeightInfo";
import SleepInfo from "./components/SleepInfo";
import WaterInfo from "./components/WaterInfo";
import WeightInfo from "./components/WeightInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    height: 0,
    weight: 0,
    gender: "",
    bodytype: "",
    aim: "",
    experience: "",
    sleep: 0,
    water: 0,
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <HeightInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <WeightInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <GenderInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <BodyTypeInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <AimInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return <ExperienceInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 6) {
      return <SleepInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <WaterInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "12.5%"
                : page === 1
                ? "25%"
                : page === 2
                ? "37.5%"
                : page === 3
                ? "50%"
                : page === 4
                ? "62.5%"
                : page === 5
                ? "75%"
                : page === 6
                ? "87.5%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">{PageDisplay()}</div>
      <div className="footer">
        <button
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (page === 7) {
              alert("FORM SUBMITTED");
              console.log(formData);
              /// change above
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === 7 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Form;
