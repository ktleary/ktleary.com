import styled from "styled-components";
import play from "../assets/icons8-play-50.png";

const AppIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: linear-gradient(to right, #ff0000, #ffb300, #4caf50);
  height: 72px;
  width: 72px;
  min-height: 72px;
  min-width: 72px;
`;

const IconImage = styled.img`
  height: 48px;
  width: 48px;
`;

const InvidilinkIcon = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <IconImage src={play} alt="play" />
    </AppIconWrapper>
  );
};

export default InvidilinkIcon;
