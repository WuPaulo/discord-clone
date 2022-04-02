import React from "react";
import Login from "./components/Login";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  // checcking if user is already signed into google account
  const [user] = useAuthState(auth);
  return <div>{user ? <Chat /> : <Login />}</div>;
};

export default App;
