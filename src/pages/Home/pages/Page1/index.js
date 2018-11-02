import React from "react";
import Menu from "components/Menu";
import Icon from "components/Icon";

export default function Page1() {
  return (
    <div style={{ margin: "0 40px" }}>
      <div>page1</div>
      <div>
        <Menu>
          <Menu.Item>
            <span>
              <Icon name="bubble2" />
            </span>
            <span>menu 1</span>
          </Menu.Item>
          <Menu.Item>
            <span>
              <Icon name="bubble2" />
            </span>
            <span>menu 2</span>
          </Menu.Item>
          <Menu.Item>
            <span>
              <Icon name="bubble2" />
            </span>
            <span>menu 3</span>
          </Menu.Item>
          <Menu.Item>
            <span>
              <Icon name="bubble2" />
            </span>
            <span>menu 4</span>
          </Menu.Item>
          <Menu.Item>
            <span>
              <Icon name="bubble2" />
            </span>
            <span>menu 5</span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
