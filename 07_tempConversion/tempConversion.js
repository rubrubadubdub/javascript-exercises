const ftoc = function(tempF) {
  let newTemp = (tempF - 32) * (5 / 9);
  return roundOne(newTemp);
};

const ctof = function(tempC) {
  let newTemp = tempC * (9 / 5) + 32;
  return roundOne(newTemp);
};

function roundOne(num){
  let result = Math.round(num * 10) / 10;
  return result;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
