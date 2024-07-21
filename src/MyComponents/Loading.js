import React from "react";
import "../Loading.css";

const Loading = () => {
  return (
    <div className="loading-screen" style={{ background: "none !important" }}>
      <div className="loading-animation"></div>
    </div>
  );
};

export default Loading;
