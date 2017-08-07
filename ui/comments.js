
var csubmit = document.getElementById('comment_btn');
csubmit.onclick = function() {

	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				var comments = request.responseText;
				comments = JSON.parse(comments);
				var list = '';
				for (var i =0; i<comments.length; i++) {
					list += '<li>' + comments[i] +'</li>' ;
				}
				var ul = document.getElementById('commentList');
				ul.innerHTML= list;
				
			}
		}

	};
	var commentInput = document.getElementById('comment');
var comment = commentInput.value;
	request.open('GET', './comments-a1/?comment=' + comment, true);
	request.send(null);


	

};
  
