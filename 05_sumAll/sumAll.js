const sumAll = function(firstNumber, secondNumber) {
    if ((firstNumber < 0) || (secondNumber < 0)) {
        return "ERROR";
    } else if ((typeof firstNumber != "number") || (typeof secondNumber != "number")) {
        return "ERROR";
    }

    let sumNumber=0;
    let beginNumber= (firstNumber<secondNumber) ? firstNumber : secondNumber;
    let endNumber= (firstNumber<secondNumber) ? secondNumber : firstNumber;
    for (let i=beginNumber;i<=endNumber;i++){
        sumNumber+=i;
    }
    return sumNumber;
};

// Do not edit below this line
module.exports = sumAll;
