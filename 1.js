var express = require('express');
var app = express();
var router = express.Router();
const lega = require('./user')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/legacy1.htm'));
});
app.post('/user',function(req,res){
    var myData = new lega(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.listen(3000);
console.log('the server is running');
