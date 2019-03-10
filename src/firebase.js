import { initializeApp } from 'firebase';

const config = {
    apiKey: '' || new Error('add your app config'),
    authDomain: '' || new Error('add your app config'),
    databaseURL: '' || new Error('add your app config'),
    projectId: '' || new Error('add your app config'),
    storageBucket: '' || new Error('add your app config'),
    messagingSenderId: '' || new Error('add your app config'),
  };

export const FireApp = initializeApp(config);
