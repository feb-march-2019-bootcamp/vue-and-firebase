import { initializeApp } from 'firebase';

const config = {
  apiKey: "AIzaSyB6lIUfV-i59_21rg3hCTMicBp4Mue_esM",
  authDomain: "project-2019-c3259.firebaseapp.com",
  databaseURL: "https://project-2019-c3259.firebaseio.com",
  projectId: "project-2019-c3259",
  storageBucket: "project-2019-c3259.appspot.com",
  messagingSenderId: "798918317621"
};

export const FireApp = initializeApp(config);
