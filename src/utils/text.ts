// e.g. card-details - Card Details
export const formatUrlToText = (str: string) => {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/-/g, " ")
    .replace(/^./, (str) => str.toUpperCase());
};
