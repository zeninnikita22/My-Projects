import React, { useState } from "react";
import GymBroAdvice from "./images/gymbro-advice.png";
import "./styles/Advice.css";
import Water from "./images/water-glass.png";
import Sleep from "./images/sleep.png";

function Advice({ formData, setFormData, exersiseList, setExersiseList }) {
  // const [activated, setActivated] = useState(false);
  // const [activeItemsIds, setActiveItemsIds] = useState([]);
  const [activated, setActivated] = useState();

  console.log(exersiseList);
  // console.log(activeItemsIds);

  return (
    <div className="wrapper-advice">
      <div className="advice-box">
        <div className="advice-box__titlelogo">
          <img src={GymBroAdvice} alt="advice" />
        </div>
        <div className="advice-box__header">
          <div className="advice-box__header-water">
            <div className="water-img">
              <img src={Water}></img>
            </div>
            <p>
              You need to drink {formData.neededWaterConsumption} litres of
              water per day
            </p>
          </div>
          <div className="advice-box__header-sleep">
            <div className="sleep-img">
              <img src={Sleep}></img>
            </div>
            <p>You need to sleep 7-9 hours per day</p>
          </div>
        </div>
        <div className="advice-box__grid">
          {exersiseList.map((item, index) => {
            return (
              <div
                className={
                  activated === item.name
                    ? "advice-box__grid-element activated"
                    : "advice-box__grid-element"
                }
                key={index}
                onClick={() => {
                  activated === item.name
                    ? setActivated()
                    : setActivated(item.name);
                }}
              >
                {item.name}
                <div
                  className={
                    activated === item.name
                      ? "advice-box__grid-element-text"
                      : "inactive"
                  }
                >
                  {item.instructions}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Advice;
