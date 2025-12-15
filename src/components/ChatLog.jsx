import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import { messageDataProtoTypes, messageColorsProtoTypes } from './sharedPropTypes';

const ChatLog = ({
  entries,
  onToggleMessageLike,
  messageColors
}) => {

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
          onToggleLike={onToggleMessageLike}
          messageColors={messageColors}
        />)}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    ...messageDataProtoTypes
  })).isRequired,
  onToggleMessageLike: PropTypes.func,
  messageColors: PropTypes.shape(
    messageColorsProtoTypes
  ),
};

export default ChatLog;