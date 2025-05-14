import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    supabase
      .from('posts')
      .select('*')
      .then(({ data, error }) => {
        console.log('Supabase response (blog):', { data, error })
        if (error) console.error('Fetch error:', error)
        else setPosts(data)
      })
  }, [])

  return (
    <section>
      <h2 style={{ marginBottom: '2rem' }}>Blog</h2>

      {posts.length === 0 && <p>No posts found.</p>}

      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          <h3 style={{ marginBottom: '0.5rem' }}>
            <Link to={`/post/${post.slug || post.id}`} style={{ color: '#67c2ff' }}>
              {post.title}
            </Link>
          </h3>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.body }} />
        </article>
      ))}
    </section>
  )
}