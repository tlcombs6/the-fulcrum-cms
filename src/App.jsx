import React from 'react';
import PostList from './components/PostList';

function App() {
  return (
    <main>
      <header style={{ marginBottom: '3rem' }}>
        <h1>The Fulcrum</h1>
        <p><em>Critical analysis of game design, mechanics, and meaning.</em></p>
      </header>
      <PostList />
    </main>
  );
}

export default App;