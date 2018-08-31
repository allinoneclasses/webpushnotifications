self.addEventListener('push', function(event) {
	 if (event.data) {
    console.log('This push event has data: ', event.data.text());
  } else {
    console.log('This push event has no data.');
  }
  const data = event.data.json();
  console.log('Title ', data.header);
  console.log('body ', data.message);
  const title = data.header;
    const options = {
      body: data.message,
      badge: '/principal-logo.png',
      icon: '/principal-logo.png',
      requireInteraction: true
    };
	const promiseChain = self.registration.showNotification(title,options);

  event.waitUntil(promiseChain);
 
});

self.addEventListener('notificationclick', function(event) {
  const clickedNotification = event.notification;
  clickedNotification.close();
  
  // Do something as the result of the notification click
  const promiseChain = clients.openWindow('https://www.google.com');
  event.waitUntil(promiseChain);
});
