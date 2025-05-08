import React, { useEffect, useState } from 'react';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/content/posts/welcome.md')
      .then((res) => res.text())
      .then((text) => {
        setPosts([{ title: 'Welcome to The Fulcrum', content: text }]);
      });
  }, []);

  return (
    <div>
      {posts.map((post, idx) => (
        <article key={idx} style={{ marginBottom: '2rem' }}>
          <h2>{post.title}</h2>
          <pre>{post.content}</pre>
        </article>
      ))}
    </div>
  );
}