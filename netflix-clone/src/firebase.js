import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBHEnbBgwYp-jIo6VIer9vpH0Qw8xD-eP0",
    authDomain: "netflix-react-e8bfc.firebaseapp.com",
    projectId: "netflix-react-e8bfc",
    storageBucket: "netflix-react-e8bfc.appspot.com",
    messagingSenderId: "452910144082",
    appId: "1:452910144082:web:f7b6f7ac01e3e240545d8b"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebase.firestore()
const auth=firebase.auth();

export {db,auth};