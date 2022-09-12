

const removeFromArray = function(workingArray, ...index) {

    for(let i = 0; i<= workingArray.length; i++){

        for(let indexValue of index){

            if(Number.isInteger(indexValue) && indexValue === workingArray[i]){
                workingArray.splice(i,1);
                i--;
            }
            
            else if(indexValue.toString() == workingArray[i] && indexValue === workingArray[i]){
                workingArray.splice(i,1);
                i--;
            }
            else{
                //SKIP
            }
        }
    }   

    return workingArray;
}

// Do not edit below this line
module.exports = removeFromArray;
