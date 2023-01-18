const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(num) {
  let totalSum=0;
	for(let i=0;i<=num.length-1;i++){
    totalSum+=num[i];
  }
  return totalSum;
};

const multiply = function(num) {
  let totalMultiply=num[0];
  for(let i=1;i<=num.length-1;i++){
    totalMultiply*=num[i];
  }
  return totalMultiply;
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i=num-1; i >= 1; i--) {
    num *= i;
  }
  return num;
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
