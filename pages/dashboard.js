import Layout from '../components/Layout';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDownload = async () => {
    if (!url) return;
    setLoading(true);
    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error('Error:', err);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-6 font-sans">
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-600">Dashboard</h2>
            <button onClick={handleLogout} className="text-sm text-red-500 hover:underline">
              Log out
            </button>
          </div>

          <input
            className="w-full px-4 py-2 border rounded mb-4"
            placeholder="Paste a video URL here..."
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            onClick={handleDownload}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? 'Processing...' : 'Download'}
          </button>

          {data && (
            <div className="mt-6 p-4 bg-gray-50 border rounded">
              <h3 className="font-bold text-lg text-gray-700 mb-2">Download Result:</h3>
              <p className="text-sm mb-1">
                <strong>Title:</strong> {data.title}
              </p>
              <a
                href={data.downloadUrl}
                className="text-blue-500 hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Link
              </a>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
