console.log('Loaded!');
var img = document.getElementById('madi');
img.onClick = function() {
    var interval = setInterval(moveleft, 100);
    img.style.marginLeft = '100px';
}