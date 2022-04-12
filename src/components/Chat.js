import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase";
import SendMessages from "./SendMessages";
import firebase from "firebase/compat/app";
function Chat() {
  const scroll = useRef(null);
  const [messages, setMessages] = useState();
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

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
            messages.map(
              ({ id, text, photoURL, uid, createdAt, displayName }) => (
                // checking to see if its my own message
                <div key={id} className="messages">
                  <img src={photoURL} alt="" />
                  <div className="innerMessages">
                    {firebase.auth().currentUser.displayName == displayName ? (
                      <h3 className="currentUser">
                        {displayName}
                        {"   "}
                        <span>
                          {new Date(createdAt?.toDate()).toLocaleString(
                            ([], { hour: "2-digit", minute: "2-digit" })
                          )}
                        </span>
                      </h3>
                    ) : (
                      <h3>
                        {displayName}
                        {"   "}
                        <span>
                          {new Date(createdAt?.toDate()).toLocaleString(
                            ([], { hour: "2-digit", minute: "2-digit" })
                          )}
                        </span>
                      </h3>
                    )}
                    <p>{text}</p>
                  </div>
                </div>
              )
            )
          ) : (
            <h2>Loading...</h2>
          )}
          <div ref={scroll} />
        </div>
        <SendMessages />
      </div>
    </div>
  );
}

export default Chat;
