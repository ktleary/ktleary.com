import styled from "styled-components";
import seatgeek2019 from "../assets/seatgeek2019.png";

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

const SeatGeekIcon2019 = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <IconImage src={seatgeek2019} alt="seatgeek" />
    </AppIconWrapper>
  );
};

export default SeatGeekIcon2019;
