import styled from "styled-components";
import letteru from "../assets/letter-u.png";

const AppIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background: rgb(255, 69, 0);
  height: 64px;
  width: 64px;
  padding: 8px;
`;

const IconImage = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 0.75rem;
`;

const Red4UIcon = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <IconImage src={letteru} alt="duck" />
    </AppIconWrapper>
  );
};

export default Red4UIcon;
