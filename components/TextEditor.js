import styled from "styled-components";

const StyledEditor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  overflow: hidden;
`;

const Editor = ({ children }) => {
  return <StyledEditor>{children}</StyledEditor>;
};

export default Editor;
