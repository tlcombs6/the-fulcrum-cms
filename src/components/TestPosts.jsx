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
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}