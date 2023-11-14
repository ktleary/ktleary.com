import styled from "styled-components";

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #414141;
  height: 18px;
  padding: 2px 8px;
  color: rgba(255, 255, 255, 0.87);
  margin-right: 8px;
  font-size: 12px;
  letter-spacing: -0.15px;
`;

const LabelIos = () => {
  return <LabelWrapper>ios</LabelWrapper>;
};

const LabelWeb = () => {
  return <LabelWrapper>web</LabelWrapper>;
};

const LabelOpenFin = () => {
  return <LabelWrapper>openfin</LabelWrapper>;
};

const LabelOpenSource = () => {
  return <LabelWrapper>open&nbsp;source</LabelWrapper>;
};

export { LabelIos, LabelWeb, LabelOpenFin, LabelOpenSource };
