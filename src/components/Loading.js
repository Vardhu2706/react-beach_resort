// Importing Helpers
import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";

// Functional Component
function Loading() {
  return (
    <div className="loading">
      <h4>Best offers, coming up...</h4>
      <img src={loadingGif} alt="loading-gif" />
    </div>
  );
}

// Default Export
export default Loading;
