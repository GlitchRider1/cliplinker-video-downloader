import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>ClipLinker - Video Downloader</h1>
      <p style={{ marginBottom: '30px' }}>
        Download videos easily by signing in or creating an account.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link href="/login">
          <a style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>Login</a>
        </Link>
        <Link href="/signup">
          <a style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>Sign Up</a>
        </Link>
      </div>
    </div>
  );
}
