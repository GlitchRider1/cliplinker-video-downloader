import { useState } from 'react';

export default function Dashboard() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);

  const handleDownload = async () => {
    const res = await fetch('/api/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    const json = await res.json();
    setData(json);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <input onChange={(e) => setUrl(e.target.value)} placeholder="Video URL" />
      <button onClick={handleDownload}>Download</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
