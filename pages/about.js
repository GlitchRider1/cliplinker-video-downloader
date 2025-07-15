import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto mt-16 p-6 bg-white rounded shadow">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About ClipLinker</h2>
        <p className="text-gray-700 mb-4">
          ClipLinker is a modern, easy-to-use video downloader that lets anyone grab videos from the internet with just a link.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you're saving a tutorial for later, grabbing a video for offline use, or archiving your favorite content — ClipLinker helps you do it with one click.
        </p>
        <p className="text-gray-700">
          We believe in privacy, simplicity, and speed. No annoying popups, no complex interfaces, and no account needed to get started.
        </p>
      </div>
    </Layout>
  );
}
