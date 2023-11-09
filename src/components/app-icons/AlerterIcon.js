import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)`
  height: 56px;
  width: 56px;
`;

const AlerterSvg = ({ className }) => (
  <Svg
    title="Alerter"
    viewBox="0 -960 960 960"
    className={className}
    fill="#90caf9"
  >
    <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
  </Svg>
);

const AppIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background: #0d47a1;
  height: 64px;
  min-height: 64px;
  width: 64px;
  min-width: 64px;
  padding: 8px;
`;

const AlerterIcon = ({ icon, size, color, style }) => {
  return (
    <AppIconWrapper>
      <AlerterSvg />
    </AppIconWrapper>
  );
};

export default AlerterIcon;
