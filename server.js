var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
    secret: new Buffer('V2tICkXzvkrTDZBeoNQggQ4B9jJV4RjL6b7jovB7VOahBQiL4gGxyt4G_2nFA8_J','base64'),
    audience: 'j3xGUmcC6Br8PczpxOgRunZDwApBjwXP'
});

app.get('/api/public',function(req, res){
    res.json({message: 'Hello from public blah blah'});
});
app.get('/api/private', authCheck, function(req, res){
    res.json({message: 'Hello from private blah blah'});
});
app.get('/api/enteries', function(req, res){
    var objectArray = [{Name:'shlomo1'},{Name:'shlomo1'}];
    res.json(objectArray);
});
app.get('/api/secretEnteries', authCheck, function(req, res){
    var objectArray = [{Name:'shlomo2 Secret'},{Name:'shlomo Secret'}];
    res.json(objectArray);
});

app.listen(3001);
console.log('Listening on localhost 3001');