import styled from 'styled-components/macro';

const View = styled.div`
  float: left;
  width: 100%;
  margin: ${props => props.margin}
`

View.defaultProps = {
 margin: "0"
}


const Inline = styled.div`
  display: inline-block;
  float: ${props => props.float};

  > {
    vertical-align: top;
  }
`

Inline.defaultProps = {
  float: "left"
}

View.Inline = Inline

export default View;
