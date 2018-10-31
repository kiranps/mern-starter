import React from "react";
import styled from 'styled-components';

const Label = styled.div`
  color: #4f4f4f;
  padding-bottom: 5px;
  font-size: 14px;
`

const ValidationMessage = styled.div`
  padding-top: 2px;
  height: 14px;
  color: #4f4f4f;
  font-size: 13px;
`

const Box = styled.div`
  box-sizing: border-box;
  float: left;
`

export default class FormItem extends React.Component {
  render() {
    const { children, label, message} = this.props
    
    return (
      <Box>
        <Label>{label}</Label>
        {children}
        <ValidationMessage>{message}</ValidationMessage>
      </Box>
    )
  }
}
