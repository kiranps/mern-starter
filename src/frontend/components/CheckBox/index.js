import React from "react";
import styled from "styled-components/macro";
import { withState } from "recompose";

const Box = styled.div`
  display: block;
  cursor: pointer;

  > * {
    display: inline-block;
    vertical-align: middle;
  }
`;

const Label = styled.div`
  color: #4f4f4f;
  font-size: 14px;
  padding-left: 4px;
`;

const enhance = withState("active", "toggle", props => props.active);

const CheckBox = enhance(({ toggle, color, active, label, onChange }) => (
  <Box onClick={() => toggle(!active) && onChange(!active)}>
    <svg
      style={{ width: "18px", height: "18px", cursor: "pointer" }}
      viewBox="3 0 24 24"
    >
      {active ? (
        <path
          fill={color}
          d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
        />
      ) : (
        <path
          fill={color}
          d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"
        />
      )}
    </svg>
    <Label>{label}</Label>
  </Box>
));

CheckBox.defaultProps = {
  active: false,
  color: "#1890ff",
  label: null
};

export default CheckBox;
