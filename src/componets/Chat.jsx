import React, { useState, useEffect } from 'react';
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
    query,
    where,
} from 'firebase/firestore'
import { db } from '../../firebase.config';



const MiChat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('ChatPizzaria').orderBy('timestamp').onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

      console.log('db:', db);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    await db.collection('ChatPizzaria').add({
      text: message,
      user: 'user',
      timestamp: new Date(),
    });

    setMessage('');
  };

  return (
    <div>
      <div className="message-container">
        {messages.map((msg) => (
          <div key={msg.id} className={`ChatPizzaria ${msg.user === 'user' ? 'user' : 'bot'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default MiChat;
