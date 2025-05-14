import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Post() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single()
      .then(({ data, error }) => {
        if (error) {
          console.error('Post fetch error:', error)
        } else {
          setPost(data)
        }
      })
  }, [slug])

  if (!post) return <p>Loading...</p>

  return (
    <article>
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </article>
  )
}