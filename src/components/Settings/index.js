import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSettings, changeValue, login } from 'src/actions';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // pour se logguer on va faire comme pour un changement de state
    // => dispatch d'une action
    // cette action sera traitée dans un Middleware
    dispatch(login());

    // const response = await axios.post('http://localhost:3001/login', {
    //   email: 'bouclierman@herocorp.io',
    //   password: 'jennifer',
    // });
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
      <form className="settings__form" onSubmit={handleSubmit}>
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
