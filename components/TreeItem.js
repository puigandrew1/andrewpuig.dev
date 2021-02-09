import styled from "styled-components";

const StyledTreeItem = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  line-height: 1.4;
  padding: 0.25rem 0;
  display: flex;
  align-items: center;
`;

const StyledText = styled.div`
  margin-left: 0.25rem;
  opacity: 0.9;
  letter-spacing: -0.1px;
`;

const StyledIcon = styled.div`

`;

const TreeItem = ({ children }) => {
  return <StyledTreeItem>{children}</StyledTreeItem>;
};

const TreeItemText = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

const TreeItemIcon = ({ children }) => {
  return <StyledIcon>{children}</StyledIcon>;
};

export { TreeItem, TreeItemText, TreeItemIcon };
