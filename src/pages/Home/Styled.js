import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

const AppBar = styled.nav`
  height: 60px;
  user-select: none;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: nowrap
  padding-bottom: 0;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0;
  text-align: center;
  height: 100%;
  padding: 20px 10px;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }
`;

const Left = styled.div``;

const Right = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;

  height: 100%;
  margin: 0 20px 0 0;
`;

const Link = styled(NavLink)`
  text-decoration: none;

  &:link {
    color: #000000;
  }

  &:visited {
    color: #000000;
  }

  &:hover {
    color: #039be5;
  }
`;

AppBar.Right = Right;
AppBar.Left = Left;

export { AppBar, NavItem, Link };
