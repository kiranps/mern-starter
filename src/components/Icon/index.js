import React from "react";
import "./style.css";
import "./symbol-defs.svg";

const Icon = props => (
  <svg className={`icon icon-${props.name}`}>
    <use xlinkHref={`#icons_${props.name}`} />
  </svg>
);

export default Icon;
