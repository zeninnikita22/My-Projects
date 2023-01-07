import React, { useState } from "react";
import Ectomorph from "../images/ectomorph.png";
import Mesomorph from "../images/mesomorph.png";
import Endomorph from "../images/endomorph.png";

function BodyTypeInfo({ formData, setFormData }) {
  const [ectomorphClicked, setEctomorphClicked] = useState(false);
  const [mesomorphClicked, setMesomorphClicked] = useState(false);
  const [endomorphClicked, setEndomorphClicked] = useState(false);

  return (
    <div className="bodytype-info">
      <div className="bodytype-info__title">
        Please choose the type of your body
      </div>
      <div className="bodytype-box">
        <div
          className={ectomorphClicked ? "clicked" : "ectomorph"}
          onClick={() => {
            setFormData({ ...formData, bodytype: "ectomorph" });
            setEctomorphClicked(true);
            setMesomorphClicked(false);
            setEndomorphClicked(false);
          }}
        >
          <img src={Ectomorph}></img>
        </div>
        <div
          className={mesomorphClicked ? "clicked" : "mesomorph"}
          onClick={() => {
            setFormData({ ...formData, bodytype: "mesomorph" });
            setEctomorphClicked(false);
            setMesomorphClicked(true);
            setEndomorphClicked(false);
          }}
        >
          <img src={Mesomorph}></img>
        </div>
        <div
          className={endomorphClicked ? "clicked" : "endomorph"}
          onClick={() => {
            setFormData({ ...formData, bodytype: "endomorph" });
            setEctomorphClicked(false);
            setMesomorphClicked(false);
            setEndomorphClicked(true);
          }}
        >
          <img src={Endomorph}></img>
        </div>
      </div>
    </div>
  );
}

export default BodyTypeInfo;
