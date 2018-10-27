import ReactChatSlack from 'react-chat-slack';
 
class App extends Component {
  render() {
    return (
      <ReactChatSlack
        token="xoxb-465463990983-466950233063-2Cw0IV1XmiNBiacPnb7RQKUE"
        channel_id="D8PMJ6MQC"
        username="donboulton"
        title="Need Help"
        saveSession={true} // default is false
      />
    )
  }
}
