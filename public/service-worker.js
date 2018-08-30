self.addEventListener('push', function(event) {
	 if (event.data) {
    console.log('This push event has data: ', event.data.text());
  } else {
    console.log('This push event has no data.');
  }
  const str = event.data.text().split(",,");
  console.log('Title ', str[1]);
  console.log('body ', str[0]);
  const title = str[1];
    const options = {
      body: str[0],
      badge: '/principal-logo.png',
      icon: '/principal-logo.png'
    };
	const promiseChain = self.registration.showNotification(title,options);

  event.waitUntil(promiseChain);
 
});