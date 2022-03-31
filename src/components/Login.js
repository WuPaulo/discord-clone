import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

const Login = () => {
  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button onClick={googleSignIn}>Sign In</button>
    </div>
  );
};

export default Login;
