import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAubSwG_xuvhoaOS_FFFndkZEUldbX19Xs",
  authDomain: "discord-clone-774b6.firebaseapp.com",
  projectId: "discord-clone-774b6",
  storageBucket: "discord-clone-774b6.appspot.com",
  messagingSenderId: "216274464008",
  appId: "1:216274464008:web:9f61ea274605f2f42110bd",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
