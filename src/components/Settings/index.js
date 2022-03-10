import { useSelector, useDispatch } from 'react-redux';
import { toggleSettings, changeValue } from 'src/actions';
import './style.scss';

export default function Settings() {
  const { open, email, password } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSettings());
  };

  const handleChange = (event) => {
    dispatch(changeValue(event.target.value, event.target.name));
  };

  return (
    <div className={`settings ${open ? 'settings--open' : ''}`}>
      <button
        className="settings__toggler"
        type="button"
        onClick={handleToggle}
      >
        +
      </button>
      <form className="settings__form">
        <input
          type="email"
          className="settings__input"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          className="settings__input"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={handleChange}
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
