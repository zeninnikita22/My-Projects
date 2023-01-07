import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import AimInfo from "./components/AimInfo";
import BodyTypeInfo from "./components/BodyTypeInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import GenderInfo from "./components/GenderInfo";
import HeightInfo from "./components/HeightInfo";
import SleepInfo from "./components/SleepInfo";
import WaterInfo from "./components/WaterInfo";
import WeightInfo from "./components/WeightInfo";
import Logo from "./images/gymbro-logo.png";
import "./styles/Data.css";

function Data({
  formData,
  setFormData,
  exersiseList,
  setExersiseList,
  isSubmitted,
  setIsSubmitted,
}) {
  const [page, setPage] = useState(0);
  const [firstExType, setFirstExType] = useState("");
  const [secondExType, setSecondExType] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigateAdvice = useNavigate();

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
    setIsSubmitted("true");
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
  };

  useEffect(() => {
    async function getData() {
      if (firstExType && secondExType) {
        setLoading(true);
        let result = await Promise.all([
          axios.get("https://api.api-ninjas.com/v1/exercises?", {
            params: {
              type: firstExType,
              difficulty: formData.experience,
            },
            headers: {
              "X-Api-Key": "KHFTm60ZpU7eN3vhFk4hMg==uIRjxBypxGvBF9HI",
            },
          }),

          axios.get("https://api.api-ninjas.com/v1/exercises?", {
            params: {
              type: secondExType,
              difficulty: formData.experience,
            },
            headers: {
              "X-Api-Key": "KHFTm60ZpU7eN3vhFk4hMg==uIRjxBypxGvBF9HI",
            },
          }),
        ]);
        setExersiseList([...result[0].data, ...result[1].data]);
        setLoading(false);
        if (exersiseList) {
          setSuccess(true);
        }
        // .catch((error) => {
        //   console.log(error);
        // });
      }
    }
    getData();
  }, [firstExType, secondExType, isSubmitted]);

  useEffect(() => {
    if (success) {
      return navigateAdvice("/advice");
    }
  }, [success]);

  return loading ? (
    <Loading exersiseList={exersiseList} />
  ) : (
    <div className="wrapper">
      <div className="form-box">
        <img className="logo" alt="gymbro-logo" src={Logo}></img>
        <div className="form-box__progressbar">
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
        <div className="form-box__container">{PageDisplay()}</div>
        <div className="form-box__footer">
          <button
            className="form-box__footer-prev-button"
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            <span>Prev</span>
          </button>
          <button
            className="form-box__footer-next-button"
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
    </div>
  );
}

export default Data;
