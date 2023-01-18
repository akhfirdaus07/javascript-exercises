const fibonacci = function(num) {
    if(num<1){
        return "OOPS";
    }
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= num; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return n1;



    // }
    // let baseNum=1;
    // let fibo=1;
    // let prevNum=1;
    // for (let i=2;i<num;i++){
        
    //     fibo+=prevNum;
    //     prevNum=fibo;
    // }
    // return fibo;
};

// Do not edit below this line
module.exports = fibonacci;
