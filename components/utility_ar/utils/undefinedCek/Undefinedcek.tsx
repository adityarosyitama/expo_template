/* eslint-disable prettier/prettier */
export function Undefinedcek(i) {
  if (
    i === null ||
    i === undefined ||
    i === '' ||
    i === [] ||
    i === {} ||
    i === 0 ||
    i.length === 0
  ) {
    return true;
  } else {
    return false;
  }
}
export function Undefinedcekmap(i) {
  if (
    i === null ||
    i === undefined ||
    i === '' ||
    i === NaN ||
    i === 0 ||
    i.length === 0 ||
    isNaN(i)
  ) {
    return true;
  } else {
    return false;
  }
}
