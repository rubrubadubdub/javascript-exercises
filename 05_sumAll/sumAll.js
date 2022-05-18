const sumAll = function(a,b) {
    if(Number.isInteger(a) == false || Number.isInteger(b) == false || a<0 || b<0){return 'ERROR'}

    let c = new Number();

    if(a>b){
        c = b;
        while(a>b){
            b = b + 1;
            c = b + c;
        }
        return c;
    }

    if(a<b){
        c = a;
        while(a<b){
            a = a + 1;
            c = a + c;
        }
        return c;
    }
};

// Do not edit below this line
module.exports = sumAll;
