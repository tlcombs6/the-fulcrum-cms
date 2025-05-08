import React from 'react';
import PostList from './components/PostList';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>The Fulcrum</h1>
      <p>Critical analysis of game design, mechanics, and meaning.</p>
      <PostList />
    </div>
  );
}

export default App;