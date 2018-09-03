import React from "react";
import ReactDOM from "react-dom";
import Realtime from 'realtime-messaging';
class App extends Component {

    componentWillMount() {
      // Instantiate a Realtime client
      Realtime.loadOrtcFactory(Realtime.IbtRealTimeSJType, (factory, error) => {
        if(!error) {
          this.realtime = factory.createClient();

          this.realtime.onConnected = (client) => {
            console.log("realtime connected");

            // subscribe a channel to receive messages
            client.subscribe("myChannel", true, (client, channel, message) => {
              console.log("Received message:", message);
            });
          }

          this.realtime.setClusterUrl("http://ortc-developers.realtime.co/server/2.1/");
          this.realtime.connect('zeTkBw', 'token');
        }
      });
    }
    render() {
        return (
          <div>
            <SomeOtherReactComponent realtime={ this.realtime } />
          </div>
        );
      }
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
