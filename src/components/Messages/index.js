import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Message from 'src/components/Message';
import './style.scss';

export default function Messages() {
  const messages = useSelector((state) => state.messages);

  // useRef nous permet de mettre une référence sur le composant React
  // une fois injecté dans le DOM, on se sert de cette référence pour l'atteindre
  const messagesRef = useRef();

  const scrollRef = useRef();

  // on veut scroller automatiquement en bas de la zone à chaque nouveau message
  useEffect(() => {
    // quand le callback de useEffect est exécuté, on est après la phase de commit
    // on a donc accès au DOM
    // 1e méthode en impératif
    // const messagesElement = document.querySelector('.messages');
    // messagesElement.scroll(0, messagesElement.scrollHeight);

    // 2e méthode
    // messagesRef.current.scroll(0, messagesRef.current.scrollHeight);

    // 3e méthode
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="messages" ref={messagesRef}>
      {messages.map((message) => (
        <Message
          key={message.id}
          {...message}
        />
      ))}
      {/* on place une div en bas de tous les messages */}
      <div ref={scrollRef} />
    </div>
  );
}
