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
    <div className={`tvr-comp-alert tvr-comp-alert-${type}`}>
      <span className="tvr-comp-alert-icon">{iconMap[type]}</span>
      <span className="tvr-comp-alert-message">{message}</span>
    </div>
  );
};

export { Alert };
