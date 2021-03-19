import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFstEnsOAuFIUUqLZYecwvNV7omStzFh4",
  authDomain: "the-mafia-store.firebaseapp.com",
  projectId: "the-mafia-store",
  storageBucket: "the-mafia-store.appspot.com",
  messagingSenderId: "268306764492",
  appId: "1:268306764492:web:d61fc0afbbbd3b08db2869",
  measurementId: "G-RQ8HW2R388"
};

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export { auth }
