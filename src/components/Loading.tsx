import React from 'react'

const Spinner = ({ backgroundColor = 'transparent', strokeColor = '#333' }) => (
  <svg
    style={{
      margin: 'auto',
      background: backgroundColor,
      display: 'block',
    }}
    xmlns="http://www.w3.org/2000/svg"
    width="200px"
    height="200px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1"
      r="25"
      strokeDasharray="117.80972450961724 41.269908169872416"
      transform="rotate(279.91 50 50)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="0.8928571428571428s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      ></animateTransform>
    </circle>
  </svg>
)

export default Spinner
