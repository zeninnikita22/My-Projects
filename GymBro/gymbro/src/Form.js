import React, { useState, useEffect, useRef } from "react";
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
  const [firstExType, setFirstExType] = useState("");
  const [secondExType, setSecondExType] = useState("");
  const [exersiseList, setExersiseList] = useState([]);

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
    setFormData({
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
    });

    if (formData.gender === "male") {
      if (formData.bmi === "underweight") {
        if (formData.aim === "increase") {
          setFirstExType("strength");
          setSecondExType("powerlifting");
        } else if (formData.aim === "keep form") {
          setFirstExType("plyometrics");
          setSecondExType("strength");
        } else {
          setFirstExType("cardio");
          setSecondExType("plyometrics");
        }
      } else if (formData.bmi === "normal") {
        if (formData.aim === "increase") {
          setFirstExType("powerlifting");
          setSecondExType("strength");
        } else if (formData.aim === "keep form") {
          setFirstExType("strength");
          setSecondExType("cardio");
        } else {
          setFirstExType("cardio");
          setSecondExType("plyometrics");
        }
      } else {
        if (formData.aim === "increase") {
          setFirstExType("cadio");
          setSecondExType("strength");
        } else if (formData.aim === "keep form") {
          setFirstExType("plyometrics");
          setSecondExType("strength");
        } else {
          setFirstExType("cardio");
          setSecondExType("plyometrics");
        }
      }
    } else {
      if (formData.bmi === "underweight") {
        if (formData.aim === "increase") {
          setFirstExType("strength");
          setSecondExType("plyometrics");
        } else if (formData.aim === "keep form") {
          setFirstExType("plyometrics");
          setSecondExType("stretching");
        } else {
          setFirstExType("cardio");
          setSecondExType("plyometrics");
        }
      } else if (formData.bmi === "normal") {
        if (formData.aim === "increase") {
          setFirstExType("strength");
          setSecondExType("plyometrics");
        } else if (formData.aim === "keep form") {
          setFirstExType("plyometrics");
          setSecondExType("stretching");
        } else {
          setFirstExType("cardio");
          setSecondExType("plyometrics");
        }
      } else {
        if (formData.aim === "increase") {
          setFirstExType("plyometrics");
          setSecondExType("strength");
        } else if (formData.aim === "keep form") {
          setFirstExType("cardio");
          setSecondExType("stretching");
        } else {
          setFirstExType("cardio");
          setSecondExType("plyometrics");
        }
      }
    }
    // console.log(processedData);
    // console.log(excersisetype);
  };

  useEffect(() => {
    if (firstExType && secondExType) {
      Promise.all([
        axios.get("https://api.api-ninjas.com/v1/exercises?", {
          params: {
            type: firstExType,
            difficulty: formData.experience,
          },
          headers: {
            // "X-Api-Key": ,
          },
        }),

        axios.get("https://api.api-ninjas.com/v1/exercises?", {
          params: {
            type: secondExType,
            difficulty: formData.experience,
          },
          headers: {
            // "X-Api-Key": ,
          },
        }),
      ])
        .then((response) => {
          console.log(response);
          setExersiseList([...response[0].data, ...response[1].data]);
        })
        // responseArr.push(...response[0].data);
        // responseArr.push(...response[1].data);
        // console.log(responseArr);
        // setExersiseList(responseArr);

        // const user = response[0].data
        // const comments = response[1].data
        // .then(console.log(response))
        .catch((error) => {
          console.log(error);
        });
    }

    // axios
    //   .get("https://api.api-ninjas.com/v1/exercises?", {
    //     params: {
    //       type: firstextype,
    //       difficulty: formData.experience,
    //     },
    //     headers: {
    //       "X-Api-Key": "KHFTm60ZpU7eN3vhFk4hMg==uIRjxBypxGvBF9HI",
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   });
  }, [firstExType, secondExType]);

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
      {/* <div className="test">
        {exersiseList.map((item) => {
          return <div>{item.name}</div>;
        })}
      </div> */}
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
