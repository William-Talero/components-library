import React from "react";

const DownArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 2.20508L1.41 0.795078L7 6.37508L12.59 0.795078L14 2.20508L7 9.20508L0 2.20508Z" />
  </svg>
);

export default DownArrow;
