import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from 'src/actions';
import './style.scss';

export default function Form() {
  // on récupère la méthode dispatch du store avec le hook useDispatch
  const dispatch = useDispatch();

  const inputValue = useSelector((state) => state.newMessage);

  const handleSubmit = (event) => {
    event.preventDefault();
    // ici je veux changer le tableau de messages
    // qui est dans le state
    // le state est dans le store, il faut communiquer
    // avec ce store => dispatch !!
    dispatch(addMessage());
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={inputValue}
        className="form__input"
        type="text"
        placeholder="Saisissez votre message..."
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
