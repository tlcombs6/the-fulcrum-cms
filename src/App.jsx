import React from 'react';
import PostList from './components/PostList';

function App() {
  return (
    <main style={{ maxWidth: '768px', margin: '0 auto', padding: '2rem' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          The Fulcrum
        </h1>
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#555' }}>
          Mechanical distillery.
        </p>
      </header>
      <PostList />
    </main>
  );
}

export default App;