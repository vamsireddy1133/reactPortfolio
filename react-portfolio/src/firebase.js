import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebseApp = firebase.initializeApp({
  apiKey: "AIzaSyCe4dmVZ4aRmFoC3LuIGJOwEdQW2oCHn6k",
  authDomain: "portfolio-response-5d73b.firebaseapp.com",
  projectId: "portfolio-response-5d73b",
  storageBucket: "portfolio-response-5d73b.appspot.com",
  messagingSenderId: "920904325664",
  appId: "1:920904325664:web:afae72ff24899660293a45",
  measurementId: "G-P2MKFFS8PT",
});

const db = firebseApp.firestore();
export { db };
