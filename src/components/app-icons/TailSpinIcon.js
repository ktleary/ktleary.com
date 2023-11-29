import styled from "styled-components";
import tail from "../assets/tailspin/tailspin-logo-1.png";

// let's spin the tailspin logo on hover
const AppIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: linear-gradient(to top right, #0d47a1, #64b5f6);
  height: 72px;
  width: 72px;
  min-height: 72px;
  min-width: 72px;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
`;

const IconImage = styled.img`
  height: 64px;
  width: 64px;
`;

const Red4UIcon = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <IconImage src={tail} alt="duck" />
    </AppIconWrapper>
  );
};

export default Red4UIcon;
