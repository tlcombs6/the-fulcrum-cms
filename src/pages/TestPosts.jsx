import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function TestPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from('posts').select('*')
      if (error) console.error('Error fetching posts:', error)
      else setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <div>
      <h1>Test: Supabase Posts</h1>
      {posts.length === 0 && <p>No posts found.</p>}
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '1rem' }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}
