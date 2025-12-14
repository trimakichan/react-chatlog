import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onLikeToggle, messageColors}) => {

  const senderType = sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <section className={`chat-entry ${senderType}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={messageColors?.[senderType] ?? ''}>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like" onClick={() => onLikeToggle(id)}>{liked ? '❤️' : '🤍'}
        </button>
      </section>
    </section>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeToggle: PropTypes.func.isRequired,
  messageColors: PropTypes.shape({
    local: PropTypes.string.isRequired,
    remote: PropTypes.string.isRequired
  }).isRequired,
};

export default ChatEntry;
