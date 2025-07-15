import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-md mx-auto mt-20 p-6 text-center font-sans">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">ClipLinker - Video Downloader</h1>
        <p className="mb-8 text-gray-700">
          Download videos easily by signing in or creating an account.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/login">
            <a className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Login</a>
          </Link>
          <Link href="/signup">
            <a className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">Sign Up</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
