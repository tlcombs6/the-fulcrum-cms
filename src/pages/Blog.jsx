import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Manually define which files to load
    const files = ['welcome.md', 'example.md']; // Add more as you go

    Promise.all(
      files.map((filename) =>
        fetch(`/content/posts/${filename}`)
          .then((res) => res.text())
          .then((text) => {
            const { data } = matter(text);
            return {
              title: data.title,
              date: data.date,
              summary: data.summary,
              slug: filename.replace('.md', ''),
            };
          })
      )
    ).then(setPosts);
  }, []);

  return (
    <section>
      <h2>Blog</h2>
      {posts.map((post) => (
        <article key={post.slug} style={{ marginBottom: '2rem' }}>
          <h3>
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
          </h3>
          <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{post.date}</p>
          <p>{post.summary}</p>
        </article>
      ))}
    </section>
  );
}
