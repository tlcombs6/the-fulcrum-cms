import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import matter from 'gray-matter';

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/content/posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const { data, content } = matter(text);
        setPost({
          title: data.title,
          date: data.date,
          content: marked(content),
        });
      });
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <article>
      <h2>{post.title}</h2>
      <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}