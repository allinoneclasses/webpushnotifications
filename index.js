var express = require('express');
var app = express();
const path = require('path');
const PORT = process.env.PORT || 5000
app.get('/ashish', function (req, res) {
   res.send('Hello World');
   if (!('serviceWorker' in navigator)) {
  console.log('Push isnt supported on this browser, disable or hide UI.');
  return;
}
if (!('PushManager' in window)) {
  console.log('Push isnt supported on this browser, disable or hide UI.');
  return;
}
console.log('SERVICE WORKER SUPPORTED');
})

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req,res){
	console.log(__dirname);
	res.sendFile('index.js');
	console.log('sharma');
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


