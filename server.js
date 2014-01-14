var express = require('express')
	, http = require('http')
	, _ = require('lodash')
	, uuid = require('node-uuid')
	;
 
var app = express();
 
// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
 
app.use(express.bodyParser());
app.use(express.methodOverride());
 
//app.enableViewRouting();
 
app.use(express.static(__dirname + '/app'));

var doodles = [
{title:"Alpha"},{title:"Beta"}];

app.get('/doodles', function(req, res) {
	res.send(doodles);
});
 
http.createServer(app).listen(9090, function(){
  console.log('Express server listening on port 9090');
});
