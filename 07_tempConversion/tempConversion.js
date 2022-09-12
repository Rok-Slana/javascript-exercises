const ftoc = function(givenTemp) {
  let convertedTemp = Math.round(((givenTemp - 32) * (5/9))*10)/10;
  return convertedTemp;
};

const ctof = function(givenTemp) {
  let convertedTemp =Math.round(((givenTemp*(9/5) + 32))*10)/10;
  return convertedTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
