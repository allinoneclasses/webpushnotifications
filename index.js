var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000
app.get('/', function (req, res) {
   res.send('Hello World');
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
 var app = new express();
app.use(express.static(path.join(__dirname, 'public')))
  .get('/',function(req,res){
     res.sendFile('index.html');
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get('/ashish', function(req,res){
	console.log('ashish');
	res.sendFile('abc.html');
	console.log('sharma');
})