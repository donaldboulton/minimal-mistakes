import React from 'react';
import ReactDOM from 'react-dom';
import ReactChatSlack from 'react-chat-slack';


import './styles.css';

const App = () => (
  <div>
    <div id="greeting">
      <span>Don Boulton Chat</span>
    </div>

    <ReactChatSlack
        token="eG94Yi00NjU0NjM5OTA5ODMtNDY2OTUwMjMzMDYzLTJDdzBJVjFYbWlOQmlhY1BuYjdSUUtVRQ=="
        channel_id="D8PMJ6MQC"
        username="donboulton"
        title="Need Help"
        saveSession={true} // default is false
      />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
