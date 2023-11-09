import styled from "styled-components";
import moricon from "../assets/mor-app-icon.png";

const AppIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background: linear-gradient(to top right, #1da1f2, #ff6c60);
  height: 72px;
  width: 72px;
`;

const IconImage = styled.img`
  height: 72px;
  width: 72px;
  border-radius: 0.75rem;
`;

const Twit2NitIcon = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <IconImage src={moricon} alt="moricon" />
    </AppIconWrapper>
  );
};

export default Twit2NitIcon;
