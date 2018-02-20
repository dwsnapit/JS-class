/* 
Sticky functions
*/
window.onscroll = function() {myFunction()};

//var header = document.getElementById("myHeader");
//var sticky = document.getElementById("myHeader").offsetTop;

var temp = 174;
//temp = document.getElementById("myHeader").offsetTop;
console.log("temp: "+temp);
function myFunction() {
    console.log(window.pageYOffset + "or" +document.getElementById("myHeader").offsetTop)
  if (window.pageYOffset >= temp) {
    console.log("here");
    document.getElementById("myHeader").classList.add("sticky");
  } else {
      //if(window.pageYOffset === 200 ) {
    console.log("here2");
    document.getElementById("myHeader").classList.remove("sticky");
      //}
  }
}

/*
Snack functions
*/
function showSnack() {
    console.log("show me the Snack");
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}