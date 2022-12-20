import React, { useState, useEffect } from "react";

function Advice({ formData, setFormData, exersiseList, setExersiseList }) {
  return (
    <div>
      <div className="test">
        {exersiseList.map((item) => {
          return <div>{item.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Advice;
