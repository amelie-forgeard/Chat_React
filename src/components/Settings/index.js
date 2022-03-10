import './style.scss';

export default function Settings() {
  return (
    <div className="settings settings--open">
      <button
        className="settings__toggler"
        type="button"
      >
        +
      </button>
      <form className="settings__form">
        <input
          type="email"
          className="settings__input"
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          className="settings__input"
          name="password"
          placeholder="Mot de passe"
        />
        <button
          type="submit"
          className="settings__submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
