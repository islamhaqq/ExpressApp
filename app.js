var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);
app.get('/', response => response.send('Express Works'));
app.listen(app.get('port'), console.log('Express started. Press CTRL + C to terminate'));
