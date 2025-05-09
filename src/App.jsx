import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, SignOutButton, useUser } from '@clerk/clerk-react';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';

export default function App() {
  const { user } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress || null;

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
        <nav style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>

          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </nav>

        {userEmail && (
          <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#666' }}>
            Signed in as <strong>{userEmail}</strong>
          </p>
        )}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </main>
  );
}