import React, { Fragment, lazy } from "react";
import { AppBar, NavItem, Link } from "./Styled";
import LazyRoute from "components/LazyRoute";
const Page1 = lazy(() => import("pages/Page1"));
const Page2 = lazy(() => import("pages/Page2"));

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
          <NavItem>Kiran</NavItem>
        </AppBar.Right>
      </AppBar>
      <LazyRoute exact path="/h/page1" component={Page1} />
      <LazyRoute exact path="/h/page2" component={Page2} />
    </Fragment>
  );
}
