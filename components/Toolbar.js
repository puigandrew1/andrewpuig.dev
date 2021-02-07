import styled from "styled-components";

const StyledToolbar = styled.div`
  background-color: ${props => props.theme.toolbar.bg};
  color: ${props => props.theme.toolbar.color};
  padding: 0.7rem;
`;

const Toolbar = ({ children }) => {
  return <StyledToolbar>{children}</StyledToolbar>;
};

export default Toolbar;
