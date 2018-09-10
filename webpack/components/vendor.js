import * as RealtimeMessaging from 'realtime-messaging';

const client = RealtimeMessaging.createClient();
client.setClusterUrl("http://ortc-developers.realtime.co/server/2.1/");
client.connect('zeTkBw', 'token');

client.onConnected = (client) => {
    console.log("realtime connected");
    client.subscribe("channel", true, (client, channel, message) => {
        console.log("Received message:", message);
    });
};

const passiveevents = require('default-passive-events');

const pjax = require("jquery-pjax");
