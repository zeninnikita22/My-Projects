// import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
  //   let [loading, setLoading] = useState(true);
  //   let [color, setColor] = useState("#ffffff");
  return (
    <div className="loading-box">
      <div className="loading-box__message">
        GymBro is analyzing your data...
      </div>
      <div className="clip-loader">
        <ClipLoader
          color="#36d7b7"
          loading="true"
          size={200}
          speedMultiplier={0.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Loading;
