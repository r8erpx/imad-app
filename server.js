var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var counter = 0;
var article = { 
    'article-one' : {
        title: 'Article One | Rachit Arora',
        heading: 'Article One',
        date: 'August 4 2017',
        content: `
            <p>
    			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic excepturi deleniti adipisci maiores, odit recusandae sint nemo, distinctio quae reprehenderit veniam nesciunt. Ullam est ipsa, nesciunt dolor consectetur porro iste.
    		</p>
    
    		<p>
    			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic excepturi deleniti adipisci maiores, odit recusandae sint nemo, distinctio quae reprehenderit veniam nesciunt. Ullam est ipsa, nesciunt dolor consectetur porro iste.
    		</p>
    
    		<p>
    			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic excepturi deleniti adipisci maiores, odit recusandae sint nemo, distinctio quae reprehenderit veniam nesciunt. Ullam est ipsa, nesciunt dolor consectetur porro iste.
    		</p>

            <input type="text" id="comment" placeholder="Comment"></input>
            <button type="submit" value="submit" id="comment_btn">Submit</button>
            <ul id="commentList">
            
            </ul>
    `
    },
    'article-two' : {
        title: 'Article Two | Rachit Arora',
        heading: 'Article Two',
        date: 'September 3 2017',
        content: `
            <p>
    			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic excepturi deleniti adipisci maiores, odit recusandae sint nemo, distinctio quae reprehenderit veniam nesciunt. Ullam est ipsa, nesciunt dolor consectetur porro iste.
    		</p>
    
    		<p>
    			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic excepturi deleniti adipisci maiores, odit recusandae sint nemo, distinctio quae reprehenderit veniam nesciunt. Ullam est ipsa, nesciunt dolor consectetur porro iste.
    		</p>
            <input type="text" id="comment" placeholder="Comment"></input>
            <button type="submit" value="submit" id="comment_btn">Submit</button>
            <ul id="commentList">
            
            </ul>
    `
    },
    'article-three' : {
        title: 'Article Three | Rachit Arora',
        heading: 'Article Three',
        date: 'October 8 2017',
        content: `
            <p>
    			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic excepturi deleniti adipisci maiores, odit recusandae sint nemo, distinctio quae reprehenderit veniam nesciunt. Ullam est ipsa, nesciunt dolor consectetur porro iste.
    		</p>
            <input type="text" id="comment" placeholder="Comment"></input>
            <button type="submit" value="submit" id="comment_btn">Submit</button>
            <ul id="commentList">
            
            </ul>
    `
    }
}

function createTemplate(data) {
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
    	<head>
    		<title>
    		${title}
    		</title>
    		<link rel="stylesheet" href="ui/style.css">
    		<meta name="viewport" content="width=device-width, initial-scale=1">
    	</head>
    
    	<body>
    		<div class="container">
    			<div>
    				<a href="/">Home</a>
    			</div>
    			<hr>
    			<h3>${heading}</h3>
    			<div>
    				${date}
    			</div>
    			<div>
    			${content}
    			</div>
    		</div>
    	</body>
        <script type="text/javascript" src="/ui/comments.js"></script>
    </html>
    `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names = [];
app.get('/submit-name/', function (req, res) {
    var name = req.query.name; 
    names.push(name);
    res.send(JSON.stringify(names));

});

var comments = [];
app.get('/comments-a1' , function (req, res) {
    var comment = req.query.comment;
    comments.push(comment);
    res.send(JSON.stringify(comments));
});



app.get('/counter', function(req,res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(article[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/comments.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'comments.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});