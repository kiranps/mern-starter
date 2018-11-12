import styled from "styled-components/macro";

const Menu = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: inherit;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  border-radius: 0 0 1px 1px;
  border-top: 1px solid #e6e6e6;
  overflow: hidden;
  padding: 6px 0 6px 0;
`;

const Item = styled.div`
  box-sizing: border-box;
  height: 28px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 28px;
  font-family: sans-serif;
  padding: 0 5px 0 10px;
  color: #3b444e;

  &:hover {
    background-color: #e9eff3;
  }
`;

export { Menu, Item };
