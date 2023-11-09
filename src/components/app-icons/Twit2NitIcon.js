import styled from "styled-components";
import duck from "../assets/icons8-duck-60.png";

const AppIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background: linear-gradient(to top right, #1DA1F2, #ff6c60);
  padding: 0.75rem;
`;

const Twit2NitIcon = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <img src={duck} alt="duck" />
    </AppIconWrapper>
  );
};

export default Twit2NitIcon;
