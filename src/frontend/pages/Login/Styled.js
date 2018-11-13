import React from "react";
import styled from "styled-components/macro";

export const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #f8f8f8;
`;

export const Heading = styled.div`
  text-align: center;
  font-size: 22px;
  margin-bottom: 12px;
  color: #252525;
`;

export const LoginBox = styled.div`
  position: fixed;
  padding: 72px 62px 40px 62px;
  box-sizing: border-box;
  display: inline-block;
  top: 17%;
  right: 50%;
  margin-right: -220px;
  width: 440px;
  height: 468px;
  background-color: #ffffff;
  border: 1px solid #d8d8d8;
`;

export const Form = styled.form``;

export const UserName = styled.input.attrs({
  name: "username",
  autoComplete: "username",
  spellCheck: "false"
})`
  box-sizing: border-box;
  height: 38px;
  width: 314px;
  border: 1px solid #c9c8c8;
  border-radius: 3px;
  padding: 0 5px;
  outline: none;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }

  &:focus {
    border: 2px solid #007ceb;
  }
`;

export const Password = styled.input.attrs({
  name: "password",
  autoComplete: "current-password",
  type: "password"
})`
  box-sizing: border-box;
  height: 38px;
  width: 314px;
  border: 1px solid #c9c8c8;
  border-radius: 3px;
  padding: 0 5px;
  outline: none;

  &:focus {
    border: 2px solid #007ceb;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  height: 44px;
  width: 314px;
  border-radius: 3px;
  background-color: #d8583b;
  font-size: 14px;
  color: #ffffff;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  float: left;

  > * {
    display: inline-block;
    vertical-align: top;
    line-height: 25px;
  }
`;

export const GoogleSignIn = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);
