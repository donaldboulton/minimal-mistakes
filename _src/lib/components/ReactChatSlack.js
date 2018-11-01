import React, { Component}  from 'react';
import ReactDOM from 'react-dom';
import ReactChatSlack from 'react-chat-slack';
 
class App extends Component {
  render() {
    return (
      <ReactChatSlack
        token="eG94Yi00NjU0NjM5OTA5ODMtNDY2OTUwMjMzMDYzLTJDdzBJVjFYbWlOQmlhY1BuYjdSUUtVRQ=="
        channel_id="D8PMJ6MQC"
        username="donboulton"
        title="Need Help"
        saveSession={true} // default is false
      />
    )
  }
}
