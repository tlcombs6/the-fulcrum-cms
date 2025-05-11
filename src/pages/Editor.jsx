import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    const post = {
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    console.log('Post saved:', post);
    // Placeholder: replace with save-to-file or CMS logic later
  };

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
    </div>
  );
}