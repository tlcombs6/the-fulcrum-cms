import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { supabase } from '../lib/supabase'

export default function Editor() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState(null)

  const handleSave = async () => {
    const { error } = await supabase.from('posts').insert([
      {
        title,
        body: content, // assuming your column is called `body`
      },
    ])

    if (error) {
      console.error('Failed to save post:', error)
      setStatus('error')
    } else {
      setTitle('')
      setContent('')
      setStatus('success')
    }
  }

  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Write a Post</h2>

      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: '100%',
          padding: '0.5rem',
          fontSize: '1.2rem',
          marginBottom: '1rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

      <ReactQuill
        value={content}
        onChange={setContent}
        style={{ height: '300px', marginBottom: '1rem' }}
      />

      <button
        onClick={handleSave}
        style={{
          padding: '0.75rem 1.25rem',
          fontSize: '1rem',
          backgroundColor: '#646cff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Save
      </button>

      {status === 'success' && <p style={{ color: 'green' }}>Post saved!</p>}
      {status === 'error' && <p style={{ color: 'red' }}>Error saving post.</p>}
    </div>
  )
}