console.log('Loaded!');
var img = document.getElementById('madi');
function moveRight() {
    marginLeft = marginLeft + 10;
    img.stlyle.marginLeft = marginLeft + 'px';
}
img.onClick = function() {
    var interval = setInterval(moveRight, 100);
}