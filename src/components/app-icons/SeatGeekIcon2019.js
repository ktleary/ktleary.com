import styled from "styled-components";
import seatgeek2019 from "../assets/seatgeek2019.png";

const AppIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: white;
  height: 68px;
  width: 68px;
  min-height: 68px;
  min-width: 68px;
  padding: 2px;

`;

const IconImage = styled.img`
  height: 64px;
`;

const SeatGeekIcon2019 = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <IconImage src={seatgeek2019} alt="seatgeek" />
    </AppIconWrapper>
  );
};

export default SeatGeekIcon2019;
