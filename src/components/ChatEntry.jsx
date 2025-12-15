import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import { messageDataProtoTypes, messageColorsProtoTypes } from './sharedPropTypes';

const ChatEntry = ({
  id,
  sender,
  body,
  timeStamp,
  liked,
  onToggleLike,
  messageColors,
}) => {

  const senderType = sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <section className={`chat-entry ${senderType}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={messageColors?.[senderType] ?? ''}>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like" onClick={() => onToggleLike(id)}>{liked ? '❤️' : '🤍'}
        </button>
      </section>
    </section>
  );
};

ChatEntry.propTypes = {
  ...messageDataProtoTypes,
  onToggleLike: PropTypes.func,
  messageColors: PropTypes.shape(
    messageColorsProtoTypes
  ),
};

export default ChatEntry;
