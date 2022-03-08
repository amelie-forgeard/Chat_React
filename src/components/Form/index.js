import { useDispatch } from 'react-redux';
import './style.scss';

export default function Form() {
  // on récupère la méthode dispatch du store avec le hook useDispatch
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // ici je veux changer le tableau de messages
    // qui est dans le state
    // le state est dans le store, il faut communiquer
    // avec ce store => dispatch !!
    console.log('je soumets le form');

    dispatch({
      type: 'ADD_MESSAGE',
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
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
