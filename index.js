const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
 var app = express();
express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/',function(req,res){
     res.sendFile('index.html');
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get('/ashish', function(req,res){
	res.sendFile('abc.html');
})