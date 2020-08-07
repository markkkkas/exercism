export const gigasecond = (dateObject) =>
  new Date(dateObject.getTime() + 10 ** 9 * 1000);
