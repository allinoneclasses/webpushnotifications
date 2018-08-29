var express = require('express');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser')
const webpush = require('web-push');

const vapidKeys = {
  publicKey:
  'BIY6zwhkwWk68u5Xzh_NYKwEzsEpOLsSSEdxDHLZWaGWEQOvAWpZ8iJJEqJof2y6BnIxNrPFo4v3tGO4wbkyywY',
  privateKey: 'Flu-wiv4hfQy-astZyx9_pykQt_54QpQJWQqm3QoQVw'
};

const path = require('path');
const PORT = process.env.PORT || 5000
app.get('/ashish', function (req, res) {
   res.send('Hello World');
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.get('/', function(req,res){
	console.log(__dirname);
	console.log('Inside app.get method');
	res.sendFile('index.html');
	console.log('sharma');
})

function saveSubscriptionToDatabase(body) {
  console.log('subscription received5689', body);
  webpush.setVapidDetails(
  'mailto:ashishrsharma2@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

  console.log(body);
  triggerPushMsg(body, 'Test Dataasd');
  return 123;
}

const triggerPushMsg = function(subscription, dataToSend) {
  console.log('Data to send', dataToSend);
  return webpush.sendNotification(subscription, dataToSend)
  .then(function abc(){
    console.log('data successfully sent to push message services');
  })
  .catch((err) => {
    if (err.statusCode === 410) {
     // return deleteSubscriptionFromDatabase(subscription._id);
    } else {
      console.log('Subscription is no longer valid: ', err);
    }
  });
};


  
app.post('/api/save-subscription/', function (req, res) {
  console.log('Inside save subscription2: ', req.body);
  var subscription = {endpoint: req.body.endpoint , keys: req.body.keys, auth: req.body.auth};
  var categories = req.body.categories;
  console.log("body: ", subscription);
  console.log("cat: ", categories);
  saveSubscriptionToDatabase(subscription);

    res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ data: { success: true } }));

 // res.send(JSON.stringify({ data: { success: true } }));
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