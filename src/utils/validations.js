export const hasSpace = inputValue => {
  return inputValue.includes(' ');
};
export const isNotNumber = inputValue => {
  return isNaN(Number(inputValue));
};

export const isLengthOver = (inputValue, length) => {
  return inputValue.length > length;
};

export const isNotValidMonth = inputValue => {
  const monthValue = Number(inputValue);
  return monthValue < 1 || monthValue > 12;
};

export const isNotAlphabet = inputValue => {
  return inputValue.match(/^[a-zA-Z]*$/) === null;
};

export const isLengthBelow = (inputValue, length) => {
  return inputValue.length < length;
};