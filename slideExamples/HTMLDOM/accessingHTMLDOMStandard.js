//accessingHTMLDOMStandard.js
var node = document.getElementById("para1")
var para1 = "";
var size = node.childElementCount
for(var cnt = 0;cnt< size; cnt++)
{
    para1 += node.childNodes[cnt].nodeValue+" ";
}
console.log(para1);

while(node.firstChild)
{
    node.removeChild(node.firstChild);
}
node.appendChild(document.createTextNode(para1 + " BLAH "));
//console.log(document.getElementById("para1").firstChild.nextSibling);
