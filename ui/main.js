console.log('Loaded!');

// Make Dino Slide Left Gradually on Click
var img = document.getElementById("dino");
var marginRight = 0;

function moveRight(){
    marginRight = marginRight + 10;
    img.style.marginRight = marginRight + 'px';
}

img.onclick = function () {
    var interval = setInterval(moveRight, 100);
}

// Counter Code
var button = document.getElementById('counter');
button.onclick = function() {
	
	// Create Request Object
	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if (request.currentState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				var counter = request.responseText;
				var span = document.getElementById('count');
				span.innerHTML = counter.toString();
			}
		}

	};
	
	request.open('GET', './counter', true);
	request.send(null);
};