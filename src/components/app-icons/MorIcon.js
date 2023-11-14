import styled from "styled-components";
import moricon from "../assets/mor-app-icon.png";

const AppIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: white;
  height: 72px;
  width: 72px;
  min-height: 72px;
  min-width: 72px;
  border: 0;
`;

const IconImage = styled.img`
  width: 72px;
  height: 72px;
  border: 0;
  border-radius: 0.5rem;
`;

const MorIcon = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <IconImage src={moricon} alt="moricon" />
    </AppIconWrapper>
  );
};

export default MorIcon;
