import './style.scss';

import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

export default function Chatroom() {
  return (
    <div className="chatroom">
      <Messages />
      <Form />
    </div>
  );
}
