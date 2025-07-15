import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <section className="bg-blue-50 min-h-screen flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">Welcome to ClipLinker</h1>
        <p className="text-lg text-gray-700 max-w-xl mb-6">
          Download videos instantly from your favorite platforms — fast, secure, and with no account needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/dashboard">
            <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Start Downloading</a>
          </Link>
          <Link href="/premium">
            <a className="bg-gray-200 text-blue-700 px-6 py-3 rounded hover:bg-gray-300 transition">Go Premium</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
