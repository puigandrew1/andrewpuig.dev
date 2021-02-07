import styled from "styled-components";

const StyledWindow = styled.div`
  display: grid;
  grid-template-columns: auto 20% 1fr;
`;

const Window = ({ children }) => {
  return <StyledWindow>{children}</StyledWindow>;
};

export default Window;
