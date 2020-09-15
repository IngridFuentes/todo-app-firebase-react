// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBoO13LJq2MBXrc2l8C1ru7pbNWwB66jo8",
    authDomain: "todo-app-cp-d0096.firebaseapp.com",
    databaseURL: "https://todo-app-cp-d0096.firebaseio.com",
    projectId: "todo-app-cp-d0096",
    storageBucket: "todo-app-cp-d0096.appspot.com",
    messagingSenderId: "575185283955",
    appId: "1:575185283955:web:fc502e5dc7166cbf5a3306",
    measurementId: "G-09KQVQ0258"
  });

const db = firebaseApp.firestore();
export default db;