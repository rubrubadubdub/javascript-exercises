const removeFromArray = function(myArray, ...args) {
    for (let i = 0; i < args.length; i++) {
        for(let j = 0; j < myArray.length; j++){
            if(myArray[j] === args[i]){
                myArray.splice(j, 1);
            }
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
