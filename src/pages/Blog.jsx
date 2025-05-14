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
      <h2>Blog</h2>
      {posts.length === 0 && <p>No posts found.</p>}
      {posts.map((post) => (
        <article key={post.id} style={{ marginBottom: '2rem' }}>
          <h3>
            <Link to={`/post/${post.slug || post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
  )
}