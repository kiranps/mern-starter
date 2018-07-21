import React from "react";
import { nest } from 'recompose';
import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #f8f8f8;
`

export const Heading = styled.div`
  text-align: center;
  font-size: 22px;
  margin-bottom: 12px;
  color: #252525;
`

export const Form = styled.form`
  position: fixed;
  padding: 72px 62px 40px 62px;
  box-sizing: border-box;
  display: inline-block;
  top: 17%;
  right: 50%; 
  margin-right: -220px;
  width: 440px;
  height: 425px;
  background-color: #ffffff;
  border: 1px solid #d8d8d8;
`

export const UserName = styled.input.attrs({
  name: "username",
  spellCheck: "false"
})`
  box-sizing: border-box;
  height: 38px;
  width: 314px;
  border: 1px solid #c9c8c8;
  border-radius: 3px;
  padding: 0 5px;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }

  &:focus {
    border: 1px solid #007ceb;
  }
`

export const Password = styled.input.attrs({
  name: "password", type: "password"
})`
  box-sizing: border-box;
  height: 38px;
  width: 314px;
  border: 1px solid #c9c8c8;
  border-radius: 3px;
  padding: 0 5px;

  &:focus {
    border: 1px solid #007ceb;
  }
`

export const Button = styled.button.attrs({
  children: props => props.label
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
`

export const ValidationMessage = styled.div`
  color: #4f4f4f;
`
