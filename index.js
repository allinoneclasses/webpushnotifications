var express = require('express');
var app = express();
const path = require('path');
const PORT = process.env.PORT || 5000
app.get('/', function (req, res) {
   res.send('Hello World');
})

app.use(express.static(path.join(__dirname, 'public')));
app.get('/ashish', function(req,res){
	console.log('ashish');
	res.sendFile('abc.html');
	console.log('sharma');
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

