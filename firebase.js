import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBE-7xMCsq5yRlWZ59MPWbTPsft5Q5unT4",
  authDomain: "clone-8fb5b.firebaseapp.com",
  databaseURL: "https://clone-8fb5b.firebaseio.com",
  projectId: "clone-8fb5b",
  storageBucket: "clone-8fb5b.appspot.com",
  messagingSenderId: "749157791213",
  appId: "1:749157791213:web:68fd2ee0e2c6c5cb2823e4",
  measurementId: "G-JP8EW0KSED",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
