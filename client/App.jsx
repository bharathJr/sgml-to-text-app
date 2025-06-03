
import React, { useState } from 'react';

export default function App() {
  const [topics, setTopics] = useState(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setTopics(data.topics);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">SGML to Text Converter</h1>
      <input type="file" onChange={handleFileUpload} />
      {topics &&
        Object.entries(topics).map(([title, content]) => (
          <div key={title} className="mt-4 border p-2 rounded bg-gray-100">
            <h2 className="font-semibold text-lg">{title}</h2>
            <p>{content}</p>
          </div>
        ))}
    </div>
  );
}
