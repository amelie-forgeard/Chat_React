import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './style.scss';

export default function Message({ author, content }) {
  // on détermine si le message est le nôtre en comparant l'author
  // avec le user connecté à l'application (pseudo)
  const pseudo = useSelector((state) => state.user.pseudo);
  const classnames = author === pseudo ? 'message message--is-mine' : 'message';

  return (
    <div className={classnames}>
      <p className="message__author">{author}</p>
      <p className="message__content">{content}</p>
    </div>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
