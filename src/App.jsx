import { useState } from 'react';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import './App.css';

const numOfLikes = (messageData) => {
  return messageData.reduce(
    (count, message) => {
      return message.liked ? count + 1 : count;
    },
    0
  );
};

const App = () => {
  const [messageData, setMessageData] = useState(messages);
  const [messageColors, setMessageColors] = useState({ local: 'green', remote: 'blue' });

  const localSender = messageData[0]?.sender;
  const remoteSender = messageData.find(message => message.sender !== localSender)?.sender;

  const handleLikeStatus = messageId => {
    setMessageData((prevMessages) => (
      prevMessages.map(message =>
        message.id === messageId
          ? { ...message, liked: !message.liked }
          : message
      )
    ));
  };

  const getSenderType = (senderName) => (
    senderName === localSender ? 'local' : 'remote'
  );

  const updateMessageColor = (sender, color) => {
    const senderType = getSenderType(sender);
    setMessageColors(prevColors => (
      { ...prevColors, [senderType]: color }
    ));
  };

  const totalLikes = numOfLikes(messageData);

  return (
    <div id="App">
      <header>
        <h1>
          Chat Between{' '}
          <span className={messageColors.local}>{localSender}</span>{' '}
          and{' '}
          <span className={messageColors.remote}>{remoteSender}</span>
        </h1>
        <section>
          <div>
            <p className={messageColors.local}>{localSender}'s color:</p>
            <ColorChoice sender={localSender} onUpdateColor={updateMessageColor} />
          </div>
          <h1>{totalLikes} ❤️s</h1>
          <div>
            <p className={messageColors.remote}>{remoteSender}'s color:</p>
            <ColorChoice sender={remoteSender} onUpdateColor={updateMessageColor} />
          </div>
        </section>
      </header>
      <main>
        <ChatLog
          entries={messageData}
          onToggleMessageLike={handleLikeStatus}
          messageColors={messageColors}
          getSenderType={getSenderType}
        />
      </main>
    </div>
  );
};

export default App;
