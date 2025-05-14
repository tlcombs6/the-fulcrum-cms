import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'

// Slugify helper
const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

export default function Editor() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState(null)
  const navigate = useNavigate()

  const handleSave = async () => {
    const slug = slugify(title)

    const { error } = await supabase.from('posts').insert([
      {
        title,
        slug,
        body: content,
      },
    ])

    if (error) {
      console.error('Failed to save post:', error)
      setStatus('error')
    } else {
      setTitle('')
      setContent('')
      setStatus('success')
      setTimeout(() => navigate('/blog'), 1000)
    }
  }

  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Write a Post</h2>

      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem',
          fontSize: '1.2rem',
          marginBottom: '1rem',
          borderRadius: '6px',
          border: '1px solid #444',
          backgroundColor: '#1c1c1c',
          color: '#eee',
        }}
      />

      <ReactQuill
        value={content}
        onChange={setContent}
        style={{
          height: '300px',
          marginBottom: '1rem',
          borderRadius: '6px',
        }}
      />

      <button
        onClick={handleSave}
        style={{
          width: '100%',
          padding: '0.75rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          backgroundColor: '#646cff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          textAlign: 'center',
        }}
      >
        Save
      </button>

      {status === 'success' && <p style={{ color: 'green' }}>Post saved!</p>}
      {status === 'error' && <p style={{ color: 'red' }}>Error saving post.</p>}
    </div>
  )
}