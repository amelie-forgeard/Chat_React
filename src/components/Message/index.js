import PropTypes from 'prop-types';
import './style.scss';

export default function Message({ author, content }) {
  return (
    <div className="message">
      <p className="message__author">{author}</p>
      <p className="message__content">{content}</p>
    </div>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
