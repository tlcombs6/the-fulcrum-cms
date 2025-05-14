import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Editor from './pages/Editor';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import TestPosts from './pages/TestPosts';

export default function App() {
  return (
    <main style={{ maxWidth: '768px', margin: '0 auto', padding: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            The Fulcrum
          </Link>
        </h1>
        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#888' }}>
          Mechanical distillery.
        </p>
        <nav style={{ marginTop: '1rem' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/editor" style={{ marginLeft: '1rem' }}>New Post</Link>
          <Link to="/test" style={{ marginLeft: '1rem' }}>Test DB</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/test" element={<TestPosts />} />
      </Routes>
    </main>
  );
}