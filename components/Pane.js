import styled from "styled-components";

// [https://styled-components.com/docs/advanced#theming]
const StyledPane = styled.div`
  background: rgb(31, 36, 40);
  padding: 20px;
  height: 100%;
  border-left: solid 1px #1b1f23;
  color: #f2f2f2;
  font-family: monospace;
  line-height: 1.4;
`;

const Pane = ({ children, width }) => {
  return <StyledPane style={{ width }}>{children}</StyledPane>;
};

export default Pane;
