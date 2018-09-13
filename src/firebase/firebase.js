import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD3XaLKie8TuH0G3QbfAhVvY-IVUFIqh1c",
  authDomain: "atrox-54ea2.firebaseapp.com",
  databaseURL: "https://atrox-54ea2.firebaseio.com",
  projectId: "atrox-54ea2",
  storageBucket: "atrox-54ea2.appspot.com",
  messagingSenderId: "631598012803"
};

firebase.initializeApp(config)

export default firebase;
