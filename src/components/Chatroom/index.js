import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { wsConnect } from 'src/actions';
import './style.scss';

import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
import Settings from 'src/components/Settings';

export default function Chatroom() {
  const dispatch = useDispatch();

  // au 1e rendu du composant Chatroom, je veux me connecter au WS
  useEffect(() => {
    dispatch(wsConnect());
  }, []);

  return (
    <div className="chatroom">
      <Settings />
      <Messages />
      <Form />
    </div>
  );
}
