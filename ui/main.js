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
		if (request.readyState === XMLHttpRequest.DONE) {
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

// Submit Name


var submit = document.getElementById('submit_btn');
submit.onclick = function() {
	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				var names = request.responseText;
				names = JSON.parse(names);
				var list = '';
				for (var i=0; i< names.length; i++) {
					list += '<li>' + names[i] + '</li>' ;
				}

				var ul = document.getElementById('namelist');
				ul.innerHTML = list;

				// nameInput.innerHTML = "";
			}
		}

	};
	var nameInput = document.getElementById('name');
	var name = nameInput.value;
	request.open('GET', './submit-name/?name=' + name, true);
	request.send(null);
	
};

var c1submit = document.getElementById('c1_submit');
c1submit.onclick = function() {
	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				var comments = request.responseText;
				comments = JSON.parse(comments);
				var list = '';
				for (var i=0; i< comments.length; i++) {
					list += '<li>' + comments[i] + '</li>' ;
				}

				var ul = document.getElementById('c1list');
				ul.innerHTML = list;

				// c1_input.innerHTML = "";
			}
		}
	};


	var c1input = document.getElementById('c1');
	var comment = c1input.value;
	request.open('GET', './a1-comments/?c1=' + comment, true);
	request.send(null);
};
