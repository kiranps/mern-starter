import React, { Component } from "react";
import { DropdownBox, DropdownItem } from "./Styled";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.hide, false);
  }

  toggleOpen = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
    document.addEventListener("click", this.hide, false);
  };

  hide = () => {
    this.setState({ isOpen: false });
    document.removeEventListener("click", this.hide, false);
  };

  render() {
    const { children, menu: DropdownMenu } = this.props;
    const { isOpen } = this.state;
    return (
      <DropdownBox>
        <DropdownItem onClick={this.toggleOpen}>{children}</DropdownItem>
        {isOpen && <DropdownMenu />}
      </DropdownBox>
    );
  }
}

export default Dropdown;
