import Layout from '../components/Layout';

export default function Features() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-16 p-6 bg-white rounded shadow">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Free vs Premium Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          <div className="bg-gray-50 p-4 rounded border">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Free</h3>
            <ul className="text-gray-600 space-y-2">
              <li>✔️ Unlimited downloads</li>
              <li>✔️ Standard quality</li>
              <li>✔️ No login needed</li>
              <li>⚠️ Slower speeds</li>
              <li>⚠️ Limited formats</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded border">
            <h3 className="text-xl font-bold text-yellow-700 mb-2">Premium</h3>
            <ul className="text-gray-600 space-y-2">
              <li>🚀 Faster downloads</li>
              <li>📽️ HD/4K support</li>
              <li>🎵 MP3 extraction</li>
              <li>❌ No ads</li>
              <li>✅ Priority support</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
