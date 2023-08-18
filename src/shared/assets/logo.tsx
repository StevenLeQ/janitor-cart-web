import React from 'react';

interface LogoSVGProps {
  color: string; // Define the prop type for color
}

const LogoSVG: React.FC<LogoSVGProps> = ({ color }) => (
  <svg viewBox="0 0 1092 1260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="624" cy="269" r="134" fill={color} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M490 470H602V665H647V470H758V1125H646V860H601V1125H490V470Z"
      fill={color}
    />
    <path
      d="M328.536 549.254V417.126V285H309.509H290.481V675.771V1066.54H243.241H196V1096.05V1125.55H310.165H424.33V1096.05V1066.54H376.433H328.536V847.553C328.536 727.109 328.908 628.564 329.36 628.564C329.993 628.564 406.983 666.833 419.585 673.411C421.173 674.239 422.346 674.247 422.865 673.433C423.31 672.735 494.318 586.661 512 565.337L490 470C464.948 500.273 394.793 580.302 394.15 580.699C393.507 581.097 378.481 574.184 360.758 565.337L328.536 549.254Z"
      fill={color}
    />
    <path
      d="M757.574 470L885.156 762.376L814.582 793.172L687.001 500.796L757.574 470Z"
      fill={color}
    />
    <rect x="20" y="20" width="1052" height="1220" rx="60" stroke={color} strokeWidth="40" />
  </svg>
);

export default LogoSVG;
