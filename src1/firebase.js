import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDOzmnX_9yJZQeEFz_vlZQCSNoUbCMlgNo",
    authDomain: "ecommerce-app-9aa4c.firebaseapp.com",
    projectId: "ecommerce-app-9aa4c",
    storageBucket: "ecommerce-app-9aa4c.appspot.com",
    messagingSenderId: "563835781719",
    appId: "1:563835781719:web:cc43e0f7c41ef6126e1912",
    measurementId: "G-25VBSLEMNW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };