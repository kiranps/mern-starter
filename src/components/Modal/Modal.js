import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Overlay, DialogBox, Message } from "./Styled";

export default function Modal({ title }) {
  const modalRoot = document.getElementById("modal-root");
  const el = document.createElement("div");
  modalRoot.appendChild(el);

  function handleClose() {
    modalRoot.removeChild(el);
    // onOk();
  }

  ReactDOM.render(
    <Overlay>
      <DialogBox>
        <Message>{title}</Message>
        <button onClick={handleClose}>cancel</button>
        <button onClick={handleClose}>ok</button>
      </DialogBox>
    </Overlay>,
    el
  );

  return true;
}
