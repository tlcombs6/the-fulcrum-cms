import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    supabase
      .from('posts')
      .select('*')
      .then(({ data, error }) => {
        if (error) console.error('Fetch error:', error)
        else setPosts(data)
      })
  }, [])

  return (
    <section>
      <h2>What that Means?</h2>
      <p>
        What is a <strong>mechanical distillery</strong>? — Here at <strong>The Fulcrum</strong> we analyze pressures within existing systems in hopes of revealing what holds, what fails, and what truly matters.
      </p>

      <h3>Live Posts</h3>
      {posts.length === 0 && <p>No posts found.</p>}
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '1rem' }}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </div>
      ))}
    </section>
  )
}