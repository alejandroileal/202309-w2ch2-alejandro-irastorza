export const strictEquals = (a, b) => {
  if (Object.is(a, b)) {
    if (Object.is(a, NaN)) {
      return false;
    } else {
      return true;
    }
  }

  if (Object.is(a, b)) {
    if (
      (Object.is(a, 0) && Object.is(b, -0)) ||
      (Object.is(a, -0) && Object.is(b, 0))
    ) {
      return false;
    } else {
      return true;
    }
  }
};
