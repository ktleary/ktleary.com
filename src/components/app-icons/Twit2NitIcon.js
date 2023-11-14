import styled from "styled-components";
import duck from "../assets/icons8-duck-60.png";

const AppIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background: linear-gradient(to top right, #1da1f2, #ff6c60);
 
  height: 64px;
  width: 64px;
  padding: 8px;

 
`;

const IconImage = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 0.75rem;
`;

const Twit2NitIcon = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <IconImage src={duck} alt="duck" />
    </AppIconWrapper>
  );
};

export default Twit2NitIcon;