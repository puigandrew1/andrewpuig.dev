import styled from "styled-components";

const StyledEditor = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const Editor = ({ children }) => {
  return <StyledEditor>{children}</StyledEditor>;
};

export default Editor;
