import Link from 'next/link';

export default function Home() {
  return (
    <div style={{maxWidth: 600, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif'}}>
      <h1>Welcome to ClipLinker</h1>
      <p>Shorten URLs and Download Videos from YouTube, TikTok, and more!</p>
      <Link href="/login"><a style={{color: 'blue', textDecoration: 'underline'}}>Login to Get Started</a></Link>
      <p style={{marginTop: 40}}>
        <Link href="/pricing"><a style={{color: 'green', textDecoration: 'underline'}}>See Pricing & Features</a></Link>
      </p>
    </div>
  );
}
