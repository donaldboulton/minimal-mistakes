import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/messaging';

const getFirebaseMessagingObject = () => {
  const config = {
    apiKey: 'AIzaSyBoZgIki3tEgCtgSVVWDdastZCqW9WWGKE',
    authDomain: 'airy-office-413.firebaseapp.com',
    databaseURL: 'https://airy-office-413.firebaseio.com',
    projectId: 'airy-office-413',
    storageBucket: 'airy-office-413.appspot.com',
    messagingSenderId: '857761645811',
    serverKey: "AAAAx7aUBPM:APA91bFxAfB5yAI4ILnxRpcpIAXEICRQ3O8YEu9A55ZgNEVkcc1jLMBj0g9GAvQGq4Y6DXMBcT1-1mxDzTdZIhQtGIsUWYoNK8g9ZZACxIZEmBGQQ7h-PZe7C1LxACe6FWYsHgbs0O7iJEvO3VwvWf9boSXKqALE6A",
  };
  firebase.initializeApp(config); 
};

