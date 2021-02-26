import styled from "styled-components";
import { AngelListButton, CopyButton, EmailButton } from "./buttons";

const AngelListIcon = styled(AngelListButton)`
  color: rgba(255, 255, 255, 0.66);
  height: 24px;
  width: 24px;
`;

const EmailIcon = styled(EmailButton)`
  color: rgba(255, 255, 255, 0.66);
  height: 24px;
  width: 24px;
`;

const CopyIcon = styled(CopyButton)`
  color: rgba(255, 255, 255, 0.66);
  height: 12px;
  width: 12px;
`;

export { AngelListIcon, EmailIcon, CopyIcon };
