import ReactChatSlack from 'react-chat-slack';
 
class App extends Component {
  render() {
    return (
      <ReactChatSlack
        token="eG94cC0yOTU3MzIyMDM3ODAtMjk2NTU4OTA5MTU4LTQ2MTgzODU5OTc3Ni05ZDEyNDI3MzQ0NTdhNmJlNmQ2MWIxYzAyMjdjZTIwMg="
        channel_id="D8PMJ6MQC"
        username="Donald Boulton"
        title="Need Help"
        saveSession={true} // default is false
      />
    )
  }
}
