// pages/api/download.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { url } = req.body;
  if (!url) {
    res.status(400).json({ error: 'URL is required' });
    return;
  }

  // Placeholder: Return dummy data. Replace with real downloader logic later.
  res.status(200).json({
    downloadUrl: url,
    title: 'Sample Video Title',
  });
}
