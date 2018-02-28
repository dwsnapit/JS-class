
/*
for(var x = 1; x<=100; x++)
{
    console.log(x);
}
*/

var prime = function(x){
    var isPrime = true;
    for(var cnt = 2;cnt<x;cnt++)
    {
        if(x%cnt === 0)
        {
            isPrime = false;
        }
    }
    if(isPrime)
    {
        console.log(x+" is a Prime number");
    }else{
        console.log(x + " is not a Prime number");
    }
}


prime(10);