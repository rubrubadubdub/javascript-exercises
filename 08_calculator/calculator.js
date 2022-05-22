const add = function() {
	let $sum = 0;
  for(let i = 0; i < arguments.length; i++){
    $sum += arguments[i];
  }
  return $sum;
};

const subtract = function() {
	let $sum = arguments[0];
  for(let i = 1; i < arguments.length; i++){
    $sum -= arguments[i];
  }
  return $sum;
};

const sum = function(args) {
  let $sum = 0;
  for(let i = 0; i < args.length; i++){
    $sum += Number(args[i]);
  }
  return Number($sum);
};

const multiply = function(args) {
  let $sum = args[0];
  for(let i = 1; i < args.length; i++){
    $sum = args[i] * $sum;
    }
  return $sum;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	let answer = 1;
  if(n == 0 || n == 1){
    return 1;
  } else {
    for(let i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
