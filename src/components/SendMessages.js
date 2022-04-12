import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";

const SendMessages = () => {
  const [currentMessage, setCurrentMessage] = useState("");

  async function submitMessage(e) {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;

    if (currentMessage.length) {
      await db.collection("messages").add({
        text: currentMessage,
        photoURL,
        uid,
        displayName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } else {
      return false;
    }
    setCurrentMessage("");
  }

  return (
    <div className="sendMessages">
      <form onSubmit={submitMessage}>
        <input
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMessages;
