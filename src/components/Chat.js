import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import SendMessages from "./SendMessages";
function Chat() {
  const [messages, setMessages] = useState();
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <button onClick={() => auth.signOut()}>Sign Out</button>
      {messages ? (
        messages.map(({ id, text, photoURL, uid, createdAt }) => (
          <div key={id}>
            <p>{text}</p>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
      <SendMessages />
    </div>
  );
}

export default Chat;
