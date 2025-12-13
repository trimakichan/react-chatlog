import { useEffect, useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  const [countLike, setCountLike] = useState(0);

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
      </header>
      <main>
        <section>
          <h1>{countLike} ❤️s</h1>
        </section>
        <ChatLog entries={messages} updateCount={setCountLike}/>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
