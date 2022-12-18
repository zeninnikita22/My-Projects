import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [excersisetype, setExerciseType] = useState("");

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

  let processedData = { blah: "mlah" };

  const handleSubmit = (processedData) => {
    alert("FORM SUBMITTED");
    console.log(formData);
    processedData = {
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

    // let excersisetype = "";

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
          //   let excersisetype = "strength";
          //   return excersisetype;
          setExerciseType("strength");
        } else if (formData.aim === "keep form") {
          //   let excersisetype = "plyometrics";
          //   return excersisetype;
          setExerciseType("plyometrics");
        } else {
          //   let excersisetype = "cardio";
          //   return excersisetype;
          setExerciseType("cardio");
        }
      } else if (formData.bmi === "normal") {
        if (formData.aim === "increase") {
          //   let excersisetype = "powerlifting";
          //   return excersisetype;
          setExerciseType("powerlifting");
        } else if (formData.aim === "keep form") {
          //   let excersisetype = "strength";
          //   return excersisetype;
          setExerciseType("strength");
        } else {
          //   let excersisetype = "cardio";
          //   return excersisetype;
          setExerciseType("cardio");
        }
      } else {
        if (formData.aim === "increase") {
          //   let excersisetype = "powerlifting";
          //   return excersisetype;
          setExerciseType("powerlifting");
        } else if (formData.aim === "keep form") {
          //   let excersisetype = "plyometrics";
          //   return excersisetype;
          setExerciseType("plyometrics");
        } else {
          //   let excersisetype = "cardio";
          //   return excersisetype;
          setExerciseType("cardio");
        }
      }
    } else {
      if (formData.bmi === "underweight") {
        if (formData.aim === "increase") {
          //   let excersisetype = "strength";
          //   return excersisetype;
          setExerciseType("strength");
        } else if (formData.aim === "keep form") {
          //   let excersisetype = "plyometrics";
          //   return excersisetype;
          setExerciseType("plyometrics");
        } else {
          //   let excersisetype = "cardio";
          //   return excersisetype;
          setExerciseType("cardio");
        }
      } else if (formData.bmi === "normal") {
        if (formData.aim === "increase") {
          //   let excersisetype = "strength";
          //   return excersisetype;
          setExerciseType("strength");
        } else if (formData.aim === "keep form") {
          //   let excersisetype = "plyometrics";
          //   return excersisetype;
          setExerciseType("plyometrics");
        } else {
          //   let excersisetype = "cardio";
          //   return excersisetype;
          setExerciseType("cardio");
        }
      } else {
        if (formData.aim === "increase") {
          //   let excersisetype = "plyometrics";
          //   return excersisetype;
          setExerciseType("plyometrics");
        } else if (formData.aim === "keep form") {
          //   let excersisetype = "cardio";
          //   return excersisetype;
          setExerciseType("cardio");
        } else {
          //   let excersisetype = "cardio";
          //   return excersisetype;
          setExerciseType("cardio");
        }
      }
    }
    return processedData;
    // console.log(processedData);
    // console.log(excersisetype);
  };

  //   console.log(processedData);

  useEffect(
    (processedData) => {
      console.log(processedData);
      axios
        .get("https://api.api-ninjas.com/v1/exercises?", {
          params: {
            type: excersisetype,
            // difficulty: processedData.experience,
          },
          headers: {
            // "X-Api-Key"
          },
        })
        .then(function (response) {
          console.log(response);
        });
    },
    [excersisetype]
  );

  // $.ajax({
  //     method: 'GET',
  //     url: 'https://api.api-ninjas.com/v1/exercises?muscle="biceps"',
  //     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
  //     contentType: 'application/json',
  //     success: function(result) {
  //         console.log(result);
  //     },
  //     error: function ajaxError(jqXHR) {
  //         console.error('Error: ', jqXHR.responseText);
  //     }
  // });

  //   useEffect(() => {}, []);

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
