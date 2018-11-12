import React, { Fragment, lazy } from "react";
import { AppBar, NavItem, Link } from "./Styled";
import LazyRoute from "components/LazyRoute";
import DropDown from "components/DropDown";
import Menu from "components/Menu";
import Icon from "components/Icon";

const Page1 = lazy(() => import("./pages/Page1"));
const Page2 = lazy(() => import("./pages/Page2"));

const DropDownMenu = () => (
  <Menu>
    <Menu.Item value="support">
      <span>
        <Icon name="bubble2" />
      </span>
      <span>support</span>
    </Menu.Item>
    <Menu.Item value="users">
      <span>
        <Icon name="users" />
      </span>
      <span>users</span>
    </Menu.Item>
    <Menu.Item value="logout">
      <Link to="/logout">
        <span>
          <Icon name="exit" />
        </span>
        <span>logout</span>
      </Link>
    </Menu.Item>
  </Menu>
);

export default function Home() {
  return (
    <Fragment>
      <AppBar>
        <AppBar.Right>
          <Link to="/h/page1">
            <NavItem>Page1</NavItem>
          </Link>
          <Link to="/h/page2">
            <NavItem>Page2</NavItem>
          </Link>
          <Link to="/page3">
            <NavItem>Page3</NavItem>
          </Link>
          <DropDown menu={DropDownMenu}>
            <NavItem>Kiran</NavItem>
          </DropDown>
        </AppBar.Right>
      </AppBar>
      <LazyRoute exact path="/h/page1" component={Page1} />
      <LazyRoute exact path="/h/page2" component={Page2} />
    </Fragment>
  );
}
