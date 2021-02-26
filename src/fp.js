import { nanoid } from "nanoid";
import {
  always,
  compose,
  concat,
  dec,
  equals,
  length,
  lt,
  toLower,
  prop,
} from "ramda";

const id = always(nanoid());
const isActive = (x, view) => (equals(toLower(x), view) ? 1 : 0);
const makeLink = (x) => concat("/", x);
const makeKey = (id, idx) => `link-${id}-${idx}`;
const decLength = compose(dec, length);
const idxLessLinkLength = (idx, linkData) => lt(idx, decLength(linkData));
const getToLower = compose(makeLink, toLower);
const getName = (x) => prop("name", x);

export {
  id,
  isActive,
  makeLink,
  makeKey,
  decLength,
  idxLessLinkLength,
  getToLower,
  getName,
};
