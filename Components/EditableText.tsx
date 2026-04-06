'use client';

import { useState, useEffect } from 'react';

interface EditableTextProps {
  path: string;
  initialValue: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export default function EditableText({ path, initialValue, className = '', tag = 'div' }: EditableTextProps) {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminStatus();
  }, []);

  const checkAdminStatus = async () => {
    try {
      const res = await fetch('/api/auth/check');
      const data = await res.json();
      setIsAdmin(data.isAdmin);
    } catch (error) {
      setIsAdmin(false);
    }
  };

  const handleSave = async () => {
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path, value }),
      });
      if (res.ok) {
        setIsEditing(false);
      } else {
        alert('Failed to save');
      }
    } catch (error) {
      alert('Error saving');
    }
  };

  const handleCancel = () => {
    setValue(initialValue);
    setIsEditing(false);
  };

  const Tag = tag;

  if (isEditing) {
    return (
      <div className="inline-block">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`border border-gray-300 p-2 rounded ${className}`}
          rows={tag === 'p' ? 3 : 1}
        />
        <div className="mt-2 space-x-2">
          <button onClick={handleSave} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Save</button>
          <button onClick={handleCancel} className="bg-gray-500 text-white px-3 py-1 rounded text-sm">Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <Tag className={`${className} ${isAdmin ? 'relative group' : ''}`}>
      {value}
      {isAdmin && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Edit
        </button>
      )}
    </Tag>
  );
}