import React from "react";
import "../LoadingPlaceholder.css";
import GIF from "../assets/MB.gif";

function LoadingPlaceholder() {
  return (
    <div className="LoadingPlaceholder bgVideo">
      <img src={GIF} height={300} width={400} alt="logo" />
      <i className="fas fa-spinner fa-spin fa-2x"></i>
    </div>
  );
}

export default LoadingPlaceholder;