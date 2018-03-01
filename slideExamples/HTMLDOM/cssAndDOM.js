console.log(document.getElementById("first").className);

document.getElementById("first").className= "paraAlt";
var hide = function()
{
    document.getElementById("first").style.visibility= "hidden";
}
var unHide = function()
{
    document.getElementById("first").style.visibility= "visible";
}

var visibility = function()
{
    if(document.getElementById("first").style.visibility=== "visible")
        hide();
    else
        unHide();

    
}