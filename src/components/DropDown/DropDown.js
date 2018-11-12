import React, { Component, Fragment } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, style: {} };
    this.myRef = React.createRef();
    this.showDropList = false;
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.hide, false);
  }

  componentDidUpdate = () => {
    if (this.state.isOpen && !this.showDropList) {
      const { width } = this.myRef.current.children[0].getBoundingClientRect();
      this.width = width;
      this.showDropList = true;
      this.setState({
        style: {
          left: window.innerWidth - this.width + "px",
          top: this.top + "px"
        }
      });
    } else {
      this.showDropList = false;
    }
  };

  toggleOpen = e => {
    this.top = e.target.getBoundingClientRect().height;
    console.log(this.top);
    this.setState({ isOpen: !this.state.isOpen });
    document.addEventListener("click", this.hide, false);
  };

  hide = () => {
    this.setState({ isOpen: false });
    document.removeEventListener("click", this.hide, false);
  };

  render() {
    const { children, menu } = this.props;
    const { isOpen, style } = this.state;
    console.log("render");
    console.log(this.showDropList);
    console.log(style);

    return (
      <Fragment>
        {React.cloneElement(children, {
          onClick: this.toggleOpen
        })}
        {isOpen && (
          <div
            ref={this.myRef}
            style={{ visibility: this.showDropList ? "visible" : "hidden" }}
          >
            {React.cloneElement(menu(), { style })}
          </div>
        )}
      </Fragment>
    );
  }
}

export default Dropdown;
