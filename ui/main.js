console.log('Loaded!');
var img = document.getElementById("ico");
var marginLeft = 0;


img.onClick = function () {
    var interval = setInterval(moveRight, 100);
};

moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}