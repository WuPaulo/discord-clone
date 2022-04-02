import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

const Login = () => {
  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="loginContainers">
      <div className="innerLoginContainer">
        <img src="" alt="" />
        <h1>React-Firebase Chat</h1>
        <button onClick={googleSignIn}>Sign In</button>
        <p>Use your Google Account</p>
      </div>
    </div>
  );
};

export default Login;
