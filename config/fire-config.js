import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDJA4j07UwI1HPTbwNNst3TZm9CIkumNhE",
  authDomain: "blogapp-aec12.firebaseapp.com",
  databaseURL: "YOUR DATABASE URL",
  projectId: "blogapp-aec12",
  storageBucket: "blogapp-aec12.appspot.com",
  messagingSenderId: "788460289126",
  appId: "1:788460289126:web:1bd20e34cd4666a35f41a7"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

const fire = firebase;

export default fire;