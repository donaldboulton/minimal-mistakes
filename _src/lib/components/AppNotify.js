'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Notification  from './Notification';

window.React = React;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ignore: true,
      title: ''
    };
  }

  handlePermissionGranted(){
    console.log('Permission Granted');
    this.setState({
      ignore: false
    });
  }
  handlePermissionDenied(){
    console.log('Permission Denied');
    this.setState({
      ignore: true
    });
  }
  handleNotSupported(){
    console.log('Web Notification not Supported');
    this.setState({
      ignore: true
    });
  }

  handleNotificationOnClick(e, tag){
    console.log(e, 'Notification clicked tag:' + tag);
  }

  handleNotificationOnError(e, tag){
    console.log(e, 'Notification error tag:' + tag);
  }

  handleNotificationOnClose(e, tag){
    console.log(e, 'Notification closed tag:' + tag);
  }

  handleNotificationOnShow(e, tag){
    this.playSound();
    console.log(e, 'Notification shown tag:' + tag);
  }

  playSound(filename){
    document.getElementById('sound').play();
  }

  handleButtonClick() {

    if(this.state.ignore) {
      return;
    }

    const now = Date.now();

    const title = 'Don Boulton Notifications' + now;
    const body = 'Hello' + new Date();
    const tag = now;
    const icon = 'https://donboulton.com/assets/images/Notifications_button_24.png';
    const options = {
      tag: tag,
      body: 'Jekyll React Webpack and My Stack!',
      image: 'https://donboulton.com/build/images/stack-320.png',
      icon: icon,
      lang: 'en',
      dir: 'ltr',
      sound: 'https://donboulton.com/build/audio/sound.mp3'
    }
    this.setState({
      title: title,
      options: options
    });
  }

  render() {

    return (
      <div className="Appcenter">
        <h3 className="Appheader"> React Notify </h3>
        <div className='notifyCenter'>
        <button className="btn btn--primary" onClick={this.handleButtonClick.bind(this)}>Notif!</button>
        <Notification
          ignore={this.state.ignore && this.state.title !== ''}
          notSupported={this.handleNotSupported.bind(this)}
          onPermissionGranted={this.handlePermissionGranted.bind(this)}
          onPermissionDenied={this.handlePermissionDenied.bind(this)}
          onShow={this.handleNotificationOnShow.bind(this)}
          onClick={this.handleNotificationOnClick.bind(this)}
          onClose={this.handleNotificationOnClose.bind(this)}
          onError={this.handleNotificationOnError.bind(this)}
          timeout={5000}
          title={this.state.title}
          options={this.state.options}
        />
        <audio id='sound' preload='auto'>
          <source src='https://donboulton.com/build/audio/sound.mp3' type='audio/mpeg' />
          <source src='https://donboulton.com/build/audio/sound.ogg' type='audio/ogg' />
          <embed hidden='true' autostart='false' loop='false' src='https://donboulton.com/build/audio/sound.mp3' />
        </audio>
        </div>
      </div>
    )
  }
};

ReactDom.render(<App/>, document.getElementById('out'));
