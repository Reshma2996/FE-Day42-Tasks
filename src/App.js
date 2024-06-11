// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');

  const handleShorten = async () => {
    try {
      const response = await axios.post('/api/shorten', { originalUrl });
      setShortenedUrl(response.data.shortUrl);
      setError('');
    } catch (error) {
      setError('Error shortening URL');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <input
        type="text"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="Enter URL to shorten"
      />
      <button onClick={handleShorten}>Shorten</button>
      {error && <p>{error}</p>}
      {shortenedUrl && (
        <div>
          <p>Shortened URL: <a href={shortenedUrl}>{shortenedUrl}</a></p>
        </div>
      )}
    </div>
  );
}

export default App;
