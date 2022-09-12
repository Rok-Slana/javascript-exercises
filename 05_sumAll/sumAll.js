const sumAll = function(firstNumber, lastNumber) {

    let finalSum = 0;

    if(firstNumber < 0 || lastNumber<0 || !Number.isInteger(firstNumber) || !Number.isInteger(lastNumber) || !typeof firstNumber =="number" || !typeof lastNumber == "number") {
        return 'ERROR';
    }

    else{
        if(firstNumber>lastNumber){
            for (let i = firstNumber; i>= lastNumber; i--){
                finalSum += i;
            }
        }else{
            for (let i = firstNumber; i<= lastNumber; i++){
                finalSum+=i;
            }
        }    
        return finalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
