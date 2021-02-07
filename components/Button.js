import styled from "styled-components";

const StyledButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  padding: 0;
  ${props => props.block && "display: block"}
`;

const Button = ({ onClick, children, block }) => {
  return <StyledButton onClick={onClick} block={block}>{children}</StyledButton>;
};

export default Button;
