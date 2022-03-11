import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, changeInputValue } from 'src/actions';
import './style.scss';

export default function Form() {
  // cas d'utilisation du champs contrôlé avec un state local
  // const [inputValue, setInputValue] = useState('');
  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // il faudra passer la valeur du state local dans le payload de l'action
  //   dispatch(addMessage(inputValue));
  // };

  // on récupère la méthode dispatch du store avec le hook useDispatch
  const dispatch = useDispatch();

  const inputValue = useSelector((state) => state.newMessage);

  // on pose une ref sur l'input
  const inputRef = useRef();

  // au 1e rendu du composant,je veux avoir le focus sur l'input
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // ici je veux envoyer le message au server websocket
    dispatch(sendMessage());
  };

  const handleChange = (event) => {
    const action = changeInputValue(event.target.value);
    dispatch(action);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={inputValue}
        className="form__input"
        type="text"
        placeholder="Saisissez votre message..."
        onChange={handleChange}
      />
      <button
        className="form__button"
        type="submit"
      >
        Envoyer
      </button>
    </form>
  );
}
