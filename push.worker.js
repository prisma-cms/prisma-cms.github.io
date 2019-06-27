
console.log("Push Codelab self", self);

const title = 'Push Codelab';
const options = {
  body: 'Yay it works.',
  icon: 'android-icon-72x72.png',
  badge: 'android-icon-72x72.png'
};
self.registration.showNotification(title, options);

self.addEventListener('push', function(event) {

  console.log("addEventListener push event", event);

  let notificationData = {};
  
  try {
    notificationData = event.data.json();
  } catch (e) {
    notificationData = {
      title: 'Default title',
      body: 'Default message',
      icon: '/default-icon.png'
    };
  }
  
  event.waitUntil(
    self.registration.showNotification(notificationData.title, {
      body: notificationData.body,
      icon: notificationData.icon
    })
  );
});
