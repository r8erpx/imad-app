var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles{
    articleOne = {
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
    `
    },
    articleTwo = {
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
    `
    },
    articleThree = {
        title: 'Article Three | Rachit Arora',
        heading: 'Article Three',
        date: 'October 8 2017',
        content: `
            <p>
    			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic excepturi deleniti adipisci maiores, odit recusandae sint nemo, distinctio quae reprehenderit veniam nesciunt. Ullam est ipsa, nesciunt dolor consectetur porro iste.
    		</p>
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
    </html>
    `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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