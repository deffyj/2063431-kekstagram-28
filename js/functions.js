const isLessOrEqual = (string, length) => string.length <= length;
isLessOrEqual();

const isPalindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll(' ', '');
  const reverseString = tempString.split('').reverse().join('');
  return tempString === reverseString;
};
isPalindrom();

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return Math.abs(string);
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
extractNumber();

const padTheString = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
padTheString();
