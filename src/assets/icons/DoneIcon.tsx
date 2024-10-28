import React from 'react';

const DoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g id="done">
      <path
        id="Vector"
        d={
          'M8.8002 15.8969L4.6002 11.6969L3.2002 13.0969L8.8002 ' +
          '18.6969L20.8002 6.69688L19.4002 5.29688L8.8002 15.8969Z'
        }
      />
    </g>
  </svg>
);

export default DoneIcon;
