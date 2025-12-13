import { useState } from 'react';
import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ sender, body, timeStamp, updateCount }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLikeStatus = () => {
    setIsLiked(prevIsLiked => !prevIsLiked);
  };

  const updateCountLike = () => {
    const operation = isLiked ? -1 : 1;
    updateCount(prevCount => Math.max(prevCount + operation, 0));
  };

  return (
    <section className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like" onClick={() => {
          toggleLikeStatus();
          updateCountLike();
        }}>{isLiked ? '❤️' : '🤍'}
        </button>
      </section>
    </section>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
  // add updateCount
};

export default ChatEntry;
