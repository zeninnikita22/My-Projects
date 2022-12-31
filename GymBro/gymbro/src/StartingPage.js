import React from "react";
import { Link } from "react-router-dom";

function StartingPage() {
  return (
    <div>
      <Link to="/login" className="login-link">
        Get Started!
      </Link>
    </div>
  );
}

export default StartingPage;
