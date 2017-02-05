/**
 * Created by swapnil on 18/12/16.
 */

import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD6lbGevhQZzMC2QII6bBUDscOzI0UwtEY",
  authDomain: "react-todoapp-9c099.firebaseapp.com",
  databaseURL: "https://react-todoapp-9c099.firebaseio.com",
  storageBucket: "react-todoapp-9c099.appspot.com",
  messagingSenderId: "831611208944"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  appName: 'TodoApp',
  isRunning: true,
  user: {
    name: 'Swapnil',
    number: 25
  }
});