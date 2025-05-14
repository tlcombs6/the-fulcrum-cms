import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    supabase
      .from('posts')
      .select('*')
      .then(({ data, error }) => {
        console.log('Supabase response:', { data, error }) // ✅ Debug log
        if (error) console.error('Fetch error:', error)
        else setPosts(data)
      })
  }, [])

  return (
    <section>
      <h2>What that Means?</h2>
      <p>
        What is a <strong>mechanical distillery</strong>? — Here at{' '}
        <strong>The Fulcrum</strong> we analyze pressures within existing systems in hopes of revealing what holds, what fails, and what truly matters.
      </p>

      <h3 style={{ marginTop: '2rem' }}>Live Posts</h3>
      {posts.length === 0 && <p>No posts found.</p>}

      {posts.map(post => (
        <article key={post.id} style={{ marginBottom: '2rem' }}>
          <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            {post.title}
          </strong>
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </article>
      ))}
    </section>
  )
}
