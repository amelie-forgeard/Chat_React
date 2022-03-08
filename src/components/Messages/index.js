import { useSelector } from 'react-redux';
import Message from 'src/components/Message';
import './style.scss';

export default function Messages() {
  const messages = useSelector((state) => state.messages);

  return (
    <div className="messages">
      {messages.map((message) => (
        <Message
          key={message.id}
          {...message}
        />
      ))}
    </div>
  );
}
