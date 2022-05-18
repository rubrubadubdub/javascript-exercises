const repeatString = function(string,num) {
    let hey = '';
    if(num<0){return 'ERROR'}
    if(string == ''){return ''}
    for(let i = 0; i < num; i++){
        hey += 'hey';
    }
    return hey;
};



// Do not edit below this line
module.exports = repeatString;
