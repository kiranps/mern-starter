import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro';

const Link = styled.div`
  text-decoration: none;
  font-size: 14px;

  &:link {
    color: #1890ff;
  } 

  &:hover {
    color: #1890ff;
  } 

  &:visited {
    color: #1890ff;
  } 

  &:active {
    color: #1890ff;
  } 
`

const Nav = Link.withComponent(NavLink)

export default Nav
