import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, updateCount }) => {

  return (
    <div className='chat-log'>
      {entries.map(message =>
        <ChatEntry
          key={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          updateCount={updateCount}
        />)}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired
  })).isRequired
};

export default ChatLog;