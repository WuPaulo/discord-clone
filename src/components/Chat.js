import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import SendMessages from "./SendMessages";
import firebase from "firebase/compat/app";
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
    <div className="chat">
      <div className="leftChat">
        <img src={firebase.auth().currentUser.photoURL} alt="user profile" />
        <h2>{firebase.auth().currentUser.displayName}</h2>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
      <div className="rightChat">
        <div className="chatHeader">
          <h2>React Firebase chat</h2>
        </div>
        <div className="chatWindow">
          {messages ? (
            messages.map(({ id, text, photoURL, uid, createdAt }) => (
              // checking to see if its my own message
              <div
                key={id}
                className={`messages ${
                  uid === auth.currentUser.uid ? "sent" : "received"
                }`}
              >
                <img src={photoURL} alt="" />
                <div className="innerMessages">
                  <h3>
                    {firebase.auth().currentUser.displayName}
                    {"   "}
                    <span>
                      {new Date(createdAt?.toDate()).toLocaleString()}
                    </span>
                  </h3>
                  <p>{text}</p>
                </div>
              </div>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <SendMessages />
      </div>
    </div>
  );
}

export default Chat;
