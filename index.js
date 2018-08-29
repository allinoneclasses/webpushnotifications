var express = require('express');
var app = express();
var routes = require('./routes');

const path = require('path');
const PORT = process.env.PORT || 5000
app.get('/ashish', function (req, res) {
   res.send('Hello World');
})

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req,res){
	console.log(__dirname);
	console.log('Inside app.get method');
	res.sendFile('index.html');
	console.log('sharma');
})


app.post('/api/save-subscription/', function (req, res) {
  console.log('Inside save subscription');
  console.log('req'+req);
  //saveSubscriptionToDatabase(req.body);
  res.send(JSON.stringify({ data: { success: true } }));
 /* return routes.saveSubscriptionToDatabase(req.body)
  .then(function(subscriptionId) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ data: { success: true } }));
  })
  .catch(function(err) {
    res.status(500);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      error: {
        id: 'unable-to-save-subscription',
        message: 'The subscription was received but we were unable to save it to our database.'
      }
    }));
  });*/
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


