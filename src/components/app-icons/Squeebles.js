import styled from "styled-components";
import squeebles from "../assets/squeebles-icon.png";

const AppIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background: white;
  height: 64px;
  width: 64px;
  padding: 8px;
`;

const IconImage = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 0.75rem;
`;

const SqueeblesIcon = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <IconImage src={squeebles} alt="squeebles" />
    </AppIconWrapper>
  );
};

export default SqueeblesIcon;
