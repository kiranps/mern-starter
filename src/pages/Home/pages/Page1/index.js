import React from "react";
import Menu from "components/Menu";

export default function Page1() {
  return (
    <div style={{ margin: "0 40px" }}>
      <div>page1</div>
      <div>
        <Menu>
          <Menu.Item>menu 1</Menu.Item>
          <Menu.Item>menu 2</Menu.Item>
          <Menu.Item>menu 3</Menu.Item>
          <Menu.Item>menu 4</Menu.Item>
          <Menu.Item>menu 5</Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
