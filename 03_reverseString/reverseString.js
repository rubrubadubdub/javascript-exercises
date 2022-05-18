const reverseString = function(string) {
    let stringArray = new String();
    if(string == ''){return ''}
    for(let i = 1; i < string.length + 1; i++){
        let newChar = string.charAt(string.length - i);
        stringArray += newChar;
    }
    return stringArray;
};

// Do not edit below this line
module.exports = reverseString;
