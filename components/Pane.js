import styled from "styled-components";

// [https://styled-components.com/docs/advanced#theming]
const StyledPane = styled.div`
  height: 100%;
  background-color: #2a3136;
  border-left: solid 1px #1b1f23;
  color: #e6e6e6;
  padding: 1.5rem;
  font-size: small;
  line-height: 1.4;
  white-space: pre;

  ::selection {
    background-color: #4b5861;
    color: #fff;
  }
`;

const Pane = ({ children, width }) => {
  return <StyledPane style={{ width }}>{children}</StyledPane>;
};

export default Pane;
