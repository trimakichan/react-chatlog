import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onToggleMessageLike, messageColors}) => {

  return (
    <div className='chat-log'>
      {entries.map(message =>
        <ChatEntry
          key={message.id}
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked = {message.liked}
          onLikeToggle={onToggleMessageLike}
          messageColors={messageColors}
        />)}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired
  })).isRequired,
  onToggleMessageLike: PropTypes.func.isRequired,
  messageColors: PropTypes.shape({
    local: PropTypes.string.isRequired,
    remote: PropTypes.string.isRequired
  }).isRequired,
};

export default ChatLog;