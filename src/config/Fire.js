import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC9NWKKTfx1jpU4V3uLb9n1GEs5lhUC0rY",
    authDomain: "booked-up.firebaseapp.com",
    databaseURL: "https://booked-up.firebaseio.com",
    projectId: "booked-up",
    storageBucket: "booked-up.appspot.com",
    messagingSenderId: "760422446689",
    appId: "1:760422446689:web:c144ce52486f0369"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;