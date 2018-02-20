function changeImage()
{
    var image = document.getElementById('lightbulb');
    if (image.getAttribute('src')=='off.png')
       image.src="on.png";
    else
       image.src="off.png";
}
