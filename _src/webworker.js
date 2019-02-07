var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '708241',
  key: 'd0bdc5190466a0d6e0d0',
  secret: 'c7521cb72d2b298eba55',
  cluster: 'mt1',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});