var numPairDiv = {
    num1:0,
    num2:0,
    denom:function(b){
        if(b > 0)
            return true;
        console.log("here");
        return false;
    },
    
    divide:function(a,b){
        
        if(numPairDiv.denom(b))
            return a/b;
        return "nice try"
    
    },
    
    ceiling:function(a,b){
        if(numPairDiv.denom(b))
            return Math.ceil(a/b);
        return "nice try"
    },
    floor:function(a,b){
        if(numPairDiv.denom(b))
            return Math.floor(a/b);
        return "nice try"
    },
    round:function(a,b){
        if(numPairDiv.denom(b))
            return Math.round(a/b);
        return "nice try"
    }
}

console.log(numPairDiv.divide(10928,1231));
console.log(numPairDiv.ceiling(10928,0));
console.log(numPairDiv.floor(10928,0));
console.log(numPairDiv.round(10928,0));
