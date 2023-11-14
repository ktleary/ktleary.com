import styled from "styled-components";
import letteru from "../assets/letter-u.png";

const AppIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: rgb(255, 69, 0);
  height: 72px;
  width: 72px;
  min-height: 72px;
  min-width: 72px;
`;

const IconImage = styled.img`
  height: 64px;
  width: 64px;
`;

const Red4UIcon = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <IconImage src={letteru} alt="duck" />
    </AppIconWrapper>
  );
};

export default Red4UIcon;
