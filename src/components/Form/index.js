import './style.scss';

export default function Form() {
  return (
    <form className="form">
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
