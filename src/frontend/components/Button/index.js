import React from "react";
import styled from 'styled-components/macro';
import Spinner from 'components/Spinner';

const Btn = styled.button.attrs({
  type: props => props.type,
  disabled: props => props.loading,
})`
  box-sizing: border-box;
  height: 44px;
  width: 314px;
  border-radius: 3px;
  background-color: #007ceb;
  font-size: 14px;
  color: #ffffff;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  float: left;
`

const Button = ({id, loading, label, height, width, onClick}) => 
  <Btn height={height} width={width}>
    { loading ? <Spinner /> : label }
  </Btn>

Button.defaultProps = {
  height: "32px",
  width: "100px",
}

export default Button;
