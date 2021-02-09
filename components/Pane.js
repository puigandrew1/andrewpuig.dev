import styled from "styled-components";

const StyledPane = styled.div`
  background-color: ${props => props.theme.pane.bg};
  border-left: solid 1px ${props => props.theme.pane.border_color};
  color: ${props => props.theme.pane.color};
  padding: 1.5rem;
  font-size: small;
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-all;
  overflow-y: auto;
  overflow-x: hidden;

  ::selection {
    background-color: ${props => props.theme.pane.selection_bg};
    color: ${props => props.theme.pane.selection_color};
  }
`;

const Pane = ({ children }) => {
  return <StyledPane>{children}</StyledPane>;
};

export default Pane;
