import React from "react";
import "@/styles.scss";
import { AlertProps } from "./IAlert";

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const iconMap = {
    success: "✓",
    error: "✕",
    alert: "!",
  };

  return (
    <div className={`alert alert-${type}`}>
      <span className="alert-icon">{iconMap[type]}</span>
      <span className="alert-message">{message}</span>
    </div>
  );
};

export { Alert };
