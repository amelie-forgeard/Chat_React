import './style.scss';

import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
import Settings from 'src/components/Settings';

export default function Chatroom() {
  return (
    <div className="chatroom">
      <Settings />
      <Messages />
      <Form />
    </div>
  );
}
