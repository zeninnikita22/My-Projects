import ClipLoader from "react-spinners/ClipLoader";
import "./styles/Data.css";

function Loading() {
  return (
    <div className="loading-wrapper">
      <div className="loading-box">
        <div className="loading-box__message">
          GymBro is analyzing your data...
        </div>
        <div className="clip-loader">
          <ClipLoader
            color="#71c70f"
            loading="true"
            size={200}
            speedMultiplier={0.5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    </div>
  );
}

export default Loading;
