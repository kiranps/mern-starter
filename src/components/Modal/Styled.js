import styled from "styled-components/macro";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  overflow: hidden;
  z-index: 5;
`;

const DialogBox = styled.div`
  top: 100px;
  position: relative;
  border-radius: 4px;
  margin: 0 auto;
  width: 416px;
  height: 184px;
  background-color: #fff;
`;

const Message = styled.div``;

export { DialogBox, Overlay, Message };
