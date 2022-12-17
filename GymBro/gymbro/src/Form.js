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
    height: "",
    weight: "",
    gender: "",
    bodytype: "",
    aim: "",
    experience: "",
    sleep: "",
    water: "",
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

  const handleSubmit = () => {
    alert("FORM SUBMITTED");
    console.log(formData);
    const processedData = {
      ...formData,
      height: parseInt(formData.height) / 100,
      weight: parseInt(formData.weight),
      sleep: parseInt(formData.sleep),
      water: parseInt(formData.water),
      bmi:
        (formData.weight / formData.height ** 2) * 10000 <= 18.5
          ? "underweight"
          : (formData.weight / formData.height ** 2) * 10000 > 18.5 &&
            (formData.weight / formData.height ** 2) * 10000 <= 25
          ? "normal"
          : "overweight",
    };

    let excersisetype = "";

    // switch(formData.gender) {
    //     case "male":
    //       switch (formData.bmi) {
    //         case "underweigh":
    //             switch (formData.aim) {
    //                 case "increase":
    //                     let excersisetype = "strength";
    //                     break;
    //             case "keep form":
    //                 let excersisetype = "plyometrics";
    //                 default:
    //                     break;
    //             }
    //             break;

    //         default:
    //             break;
    //       }

    //       break;
    //     case "female":
    //       // code block
    //       break;
    //     default:
    //       // code block
    //   }

    if (formData.gender === "male") {
      if (formData.bmi === "underweight") {
        if (formData.aim === "increase") {
          let excersisetype = "strength";
          return excersisetype;
        } else if (formData.aim === "keep form") {
          let excersisetype = "plyometrics";
          return excersisetype;
        } else {
          let excersisetype = "cardio";
          return excersisetype;
        }
      } else if (formData.bmi === "normal") {
        if (formData.aim === "increase") {
          let excersisetype = "powerlifting";
          return excersisetype;
        } else if (formData.aim === "keep form") {
          let excersisetype = "strength";
          return excersisetype;
        } else {
          let excersisetype = "cardio";
          return excersisetype;
        }
      } else {
        if (formData.aim === "increase") {
          let excersisetype = "powerlifting";
          return excersisetype;
        } else if (formData.aim === "keep form") {
          let excersisetype = "plyometrics";
          return excersisetype;
        } else {
          let excersisetype = "cardio";
          return excersisetype;
        }
      }
    } else {
      if (formData.bmi === "underweight") {
        if (formData.aim === "increase") {
          let excersisetype = "strength";
          return excersisetype;
        } else if (formData.aim === "keep form") {
          let excersisetype = "plyometrics";
          return excersisetype;
        } else {
          let excersisetype = "cardio";
          return excersisetype;
        }
      } else if (formData.bmi === "normal") {
        if (formData.aim === "increase") {
          let excersisetype = "strength";
          return excersisetype;
        } else if (formData.aim === "keep form") {
          let excersisetype = "plyometrics";
          return excersisetype;
        } else {
          let excersisetype = "cardio";
          return excersisetype;
        }
      } else {
        if (formData.aim === "increase") {
          let excersisetype = "plyometrics";
          return excersisetype;
        } else if (formData.aim === "keep form") {
          let excersisetype = "cardio";
          return excersisetype;
        } else {
          let excersisetype = "cardio";
          return excersisetype;
        }
      }
    }

    console.log(processedData);
    console.log(excersisetype);
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
              handleSubmit();
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
