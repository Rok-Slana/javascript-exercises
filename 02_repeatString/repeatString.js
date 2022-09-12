
const repeatString = function( repeatStringInput, repeatStringMultiplier) {

    let repeatStringOutput = '';

    if(repeatStringInput == ""){
        return repeatStringOutput;
    }

    if(repeatStringMultiplier >= 0){
        for ( let x = 1; x <= repeatStringMultiplier; x++ )
        {
            repeatStringOutput+=repeatStringInput;
        }
    
    }else{
        repeatStringOutput = 'ERROR';
    }

    return  repeatStringOutput;    

};

// Do not edit below this line
module.exports = repeatString;
