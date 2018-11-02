import React from "react";
import "./icons.svg";
import "./style.css";

const Icon = props => (
  <svg className={`icon icon-${props.name}`}>
    <use xlinkHref={`#icons_icon-${props.name}`} />
  </svg>
);

export default Icon;
