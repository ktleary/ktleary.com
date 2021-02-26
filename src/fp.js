import {
  addIndex,
  compose,
  concat,
  dec,
  equals,
  gt,
  length,
  lt,
  map,
  tail,
  toLower,
  prop,
  split,
} from "ramda";

const mapIndexed = addIndex(map);
const isActive = (x, view) => (equals(toLower(x), view) ? 1 : 0);
const makeLink = (x) => concat("/", x);
const makeKey = (id, idx) => `link-${id}-${idx}`;
const decLength = compose(dec, length);
const idxLessLinkLength = (idx, linkData) => lt(idx, decLength(linkData));
const getToLower = compose(makeLink, toLower);
const getName = (x) => prop("name", x);

// -- contact -------

const nameIsEmail = (contact) => equals(prop("name", contact), "Email");
const gt1 = (x) => gt(x, 1);
const lenGt1 = compose(gt1, length);
const allAfterColon = compose(tail, split(":"));
const splitMailto = (mailto) => (lenGt1(mailto) ? allAfterColon(mailto) : "");
const getNameAtt = (e) => prop("currentTarget", e).getAttribute("name");

const currentTargetName = (e) => prop("currentTarget", e).getAttribute("name");
const lowerCurrentTargetName = compose(toLower, currentTargetName);

export {
  isActive,
  makeLink,
  makeKey,
  decLength,
  idxLessLinkLength,
  getToLower,
  getName,
  lowerCurrentTargetName,
  mapIndexed,
  nameIsEmail,
  splitMailto,
  getNameAtt
};
