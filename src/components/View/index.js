import styled from "styled-components/macro";

const View = styled.div`
  float: left;
  width: 100%;
  text-align: ${props => props.align};
  margin: ${props => props.margin};
`;

View.defaultProps = {
  margin: "0"
};

const Inline = styled.div`
  display: inline-block;
  float: ${props => props.float};

  > {
    vertical-align: top;
  }
`;

View.defaultProps = {
  align: "left"
};

Inline.defaultProps = {
  float: "left"
};

View.Inline = Inline;

export default View;
