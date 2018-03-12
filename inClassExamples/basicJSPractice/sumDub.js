var posDub = function(a, b){
    var sum = a+b;
    if(a===b)
    {
        sum *= 2;
    }
    return sum;
}
console.log(posDub(4,4));
console.log(posDub(1,1));
console.log(posDub(4,2));
console.log(posDub(4,9));
