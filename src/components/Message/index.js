import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isMessageMine } from 'src/selectors';
import classNames from 'classnames';
import './style.scss';

export default function Message({ author, content }) {
  // on détermine si le message est le nôtre en comparant l'author
  // avec le user connecté à l'application (pseudo)
  const isMine = useSelector(isMessageMine(author));

  // const classnames = isMine ? 'message message--is-mine' : 'message';
  // classNames est une librairie utilitaire pour déterminer si une classe
  // doit être présente ou non dans notre jsx
  const classnames = classNames('message', { 'message--is-mine': isMine });

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
