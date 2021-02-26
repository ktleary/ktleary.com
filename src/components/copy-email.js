import { Cell } from "./cell-row";
import { CopyIcon } from "./icons";

const CopyEmail = ({ handleCopyEmail, copyBackground }) => {
  <Cell
    onClick={handleCopyEmail}
    style={{ background: copyBackground, borderRadius: 16 }}
  >
    <CopyIcon title="Copy" data-testid="copy-icon" />
  </Cell>;
};

export default CopyEmail;
