import { Cell } from "./cell-row";
import { CopyIcon } from "./icons";
import { and, equals, prop } from "ramda";

const namePropIsEmail = (xo) => equals(prop("name", xo), "Email");

const CopyEmail = ({ handleCopyEmail, copyBackground, contact, showCopy }) =>
  and(namePropIsEmail(contact), showCopy) ? (
    <Cell
      onClick={handleCopyEmail}
      style={{ background: copyBackground, borderRadius: 16 }}
    >
      <CopyIcon title="Copy" data-testid="copy-icon" />
    </Cell>
  ) : null;
export default CopyEmail;
