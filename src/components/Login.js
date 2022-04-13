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
        <h1>
          <span className="reactColor">React</span>-
          <span className="fireColorOne">Fire</span>
          <span className="fireColorTwo">base</span>{" "}
          <span className="fireColorThree">Chat</span>
        </h1>
        <button onClick={googleSignIn}>
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="google icon"
          />
          <p>Sign In</p>
        </button>
        <p>Log in with Google</p>
      </div>
    </div>
  );
};

export default Login;
