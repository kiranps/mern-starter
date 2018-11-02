import React from "react";
import { Menu, Item } from "./Styled";

const MenuBox = ({ onClick, children }) => (
  <Menu>
    {React.Children.map(children, (child, i) =>
      React.cloneElement(child, {
        onClick: () => onClick(child.props.value)
      })
    )}
  </Menu>
);

MenuBox.defaultProps = {
  onClick: () => {}
};

MenuBox.Item = Item;

export default MenuBox;
