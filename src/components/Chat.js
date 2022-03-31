import React from "react";
import { auth } from "../firebase";

function Chat() {
  return (
    <div>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}

export default Chat;
