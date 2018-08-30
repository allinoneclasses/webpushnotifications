self.addEventListener('push', function(event) {
	 if (event.data) {
    console.log('This push event has data: ', event.data.text());
  } else {
    console.log('This push event has no data.');
  }
  const title = 'Simple Title';
    const options = {
      body: event.data.text()
    };
	const promiseChain = self.registration.showNotification(title,options);

  event.waitUntil(promiseChain);
 
});