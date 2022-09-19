import * as React from "react";
export default function Mail({ fill }) {
  return (
    <svg
      style={{ transform: "scale(4)" }}
      stroke="black"
      fill={fill}
      stroke-width="0"
      width="1rem"
      height="1rem"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"></path>
    </svg>
  );
}
