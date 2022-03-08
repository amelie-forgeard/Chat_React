import Message from 'src/components/Message';
import './style.scss';

export default function Messages() {
  return (
    <div className="messages">
      Messages
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}
