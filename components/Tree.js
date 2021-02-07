import styled from "styled-components";

const StyledTree = styled.div`
  background-color: #1f2428;
  padding: 20px;
  height: 100%;
  border-left: solid 1px #1b1f23;
`;

const Tree = ({ children }) => {
  return <StyledTree>{children}</StyledTree>;
};

export default Tree;