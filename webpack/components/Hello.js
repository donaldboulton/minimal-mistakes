import React, { Component } from 'react';

import * as RealtimeMessaging from 'realtime-messaging';

const client = RealtimeMessaging.createClient();
client.setClusterUrl("http://ortc-developers.realtime.co/server/2.1/");
client.connect('zeTkBw', 'token');

client.onConnected = (client) => {
    console.log("realtime connected");
    client.subscribe("channel", true, (client, channel, message) => {
        console.log("Received message:", message);
    });
}

class Hello extends Component {
  render() {
    return (
      <div>Hey, y’all!! This is a React Component</div>
    )
  }
}
export default Hello;
