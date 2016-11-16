var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var app = express();

app.set('port', process.env.PORT || 3000);
app.get('/', function(request, response){
    response.send('Express Works');
});
app.listen(app.get('port'), console.log('Express started. Press CTRL + C to terminate'));
app.disable('x-powered-by');
app.engine('handlebars', handlebars.engine);
app.set('view engine', handlebars);
app.use(express.static(__dirname + '/public'));