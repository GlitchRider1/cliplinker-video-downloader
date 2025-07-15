import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto mt-16 p-6 bg-white rounded shadow">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About ClipLinker</h2>
        <p className="text-gray-700 mb-4">
          ClipLinker is a fast and privacy-friendly video downloader that helps you save videos from the web in just a few clicks.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you're saving tutorials or backing up social content, our goal is to make it simple and secure.
        </p>
        <p className="text-gray-700">
          No logins. No ads. Just paste, click, and download.
        </p>
      </div>
    </Layout>
  );
}
