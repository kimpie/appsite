var express = require('express'),
        app = express(),
        fs = require('fs'),
        http = require('http'),
        server = http.createServer(app);

app.configure(function(){
        app.set('view engine', 'handlebars');
        app.use(express.bodyParser());
        app.use(express.cookieParser());
        app.use(express.methodOverride());
        app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
       app.use(express.errorHandler());
});

app.get('/', function (req, res){
  res.send(index.html);
});

app.get('/*', function  (req, res) {
  res.json(404, {status: 'not found'});
});

server.listen(
  8080, function (){
  console.log('Server listening on port 8080');
}
);