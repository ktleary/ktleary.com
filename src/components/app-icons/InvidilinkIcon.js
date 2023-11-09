import styled from "styled-components";
import play from "../assets/icons8-play-50.png";

const AppIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background: linear-gradient(to right, #ff0000, #ffb300, #4caf50);
  
  height: 56px;
  min-height: 56px;
  width: 56px;
  min-width: 56px;
  padding: 16px;
  padding-right: 8px;
 
`;

const IconImage = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 0.75rem;
`;

const InvidilinkIcon = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <IconImage src={play} alt="play" />
    </AppIconWrapper>
  );
};

export default InvidilinkIcon;
