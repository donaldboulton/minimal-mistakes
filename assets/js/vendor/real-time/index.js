var channel = generateUserChannel();

    var RealtimeAppKey = "zeTkBw";

    $('#curl').text('curl "http://ortc-developers-useast1-s0001.realtime.co/send" --data "AK=' + RealtimeAppKey + '&AT=SomeToken&C=' + channel + '&M=12345678_1-1_This is a web push notification sent using the Realtime REST API"');
    $('#channel').text(channel);

    var webPushManager = new WebPushManager();

    webPushManager.start(function(error, registrationId){
      if (error) {

        if(error.message) {
          alert(error.message);
        } else {
          alert("Ooops! It seems this browser doesn't support Web Push Notifications :(");
        }

        $("#curl").html("Oops! Something went wrong. It seems your browser does not support Web Push Notifications.<br><br>Error:<br>" + error.message);
        $("#sendButton").text("No can do ... this browser doesn't support web push notifications");
        $("#sendButton").css("background-color","red");
      };

      client = RealtimeMessaging.createClient();
      client.setClusterUrl('https://ortc-developers.realtime.co/server/ssl/2.1/');

      client.onConnected = function (theClient) {

        theClient.subscribeWithNotifications(channel, true, registrationId,
            function (theClient, channel, msg) {

              console.log("Received a message from the Realtime server:", msg);

              webPushManager.forceNotification(msg);
            });
      };

      client.connect(RealtimeAppKey, 'JustAnyRandomToken');
    });

function S4() {
  return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

function generateUserChannel(){
  userChannel = localStorage.getItem("channel");
  if (userChannel == null || userChannel == "null"){
      guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
      userChannel = 'channel-' + guid;
      localStorage.setItem("channel", userChannel);
  }
  return userChannel;
}

function send(){
  if (client) {
    client.send(channel, "This is a web push notification sent using the Realtime JavaScript SDK");
  }
}
