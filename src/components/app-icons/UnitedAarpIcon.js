import styled from "styled-components";
import unitedaarp from "../assets/aarpmedicare.png";

const AppIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: white;
  height: 72px;
  min-height: 72px;
  width: 72px;
  min-width: 72px;
`;

const IconImage = styled.img`
  height: 64px;
  width: 64px;
`;

const SeatGeekIcon2019 = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <IconImage src={unitedaarp} alt="united aarp" />
    </AppIconWrapper>
  );
};

export default SeatGeekIcon2019;
