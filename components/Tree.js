import styled from "styled-components";

const StyledTree = styled.div`
  background-color: ${props => props.theme.tree.bg};
  border-left: solid 1px ${props => props.theme.tree.border_color};
  padding: 1rem;
`;

const Tree = ({ children }) => {
  return <StyledTree>{children}</StyledTree>;
};

export default Tree;