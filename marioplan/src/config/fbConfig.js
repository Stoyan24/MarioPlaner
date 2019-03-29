import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDE2hQdy3J3lrer2NfVHNSBBJQ-0yHEXXo",
  authDomain: "ss-marioplan.firebaseapp.com",
  databaseURL: "https://ss-marioplan.firebaseio.com",
  projectId: "ss-marioplan",
  storageBucket: "ss-marioplan.appspot.com",
  messagingSenderId: "586547260836"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 