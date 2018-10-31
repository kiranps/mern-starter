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
`;

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
