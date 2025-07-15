import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [downloads, setDownloads] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.push('/login');
      else setUser(data.session.user);
    });
  }, []);

  const handleDownload = async (e) => {
    e.preventDefault();
    setMessage('Processing download...');
    // Call API to get download link
    const res = await fetch('/api/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: videoUrl }),
    });
    const data = await res.json();
    if (data.error) setMessage(`Error: ${data.error}`);
    else {
      setMessage('');
      setDownloads([data, ...downloads]);
      setVideoUrl('');
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{maxWidth: 600, margin: 'auto', padding: 20}}>
      <h1>Dashboard</h1>
      <p>Welcome, {user.email}</p>
      <form onSubmit={handleDownload}>
        <input
          type="url"
          placeholder="Enter video URL (YouTube, TikTok, Facebook)"
          value={videoUrl}
          onChange={e => setVideoUrl(e.target.value)}
          required
          style={{width: '100%', padding: 8, marginBottom: 10}}
        />
        <button type="submit" style={{padding: 10, width: '100%'}}>Download Video</button>
      </form>
      {message && <p>{message}</p>}
      <h3>Download History</h3>
      <ul>
        {downloads.map((d, i) => (
          <li key={i}><a href={d.downloadUrl} target="_blank" rel="noopener noreferrer">{d.title || d.downloadUrl}</a></li>
        ))}
      </ul>
    </div>
  );
}
