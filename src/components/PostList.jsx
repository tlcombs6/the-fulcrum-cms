import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import matter from 'gray-matter';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/content/posts/welcome.md')
      .then((res) => res.text())
      .then((text) => {
        const { data, content } = matter(text);
        setPosts([{ title: data.title, content: marked(content) }]);
      });
  }, []);

  return (
    <div>
      {posts.map((post, idx) => (
        <article key={idx}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      ))}
    </div>
  );
}
