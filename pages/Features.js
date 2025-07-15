import Layout from '../components/Layout';

export default function Features() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-16 p-6 bg-white rounded shadow">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Free vs Premium Features</h2>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Free</h3>
            <ul className="text-gray-600 space-y-2">
              <li>✔️ Unlimited downloads</li>
              <li>✔️ Standard video quality</li>
              <li>✔️ No login required</li>
              <li>⚠️ Slower processing speed</li>
              <li>⚠️ No HD or 4K support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-yellow-600">Premium</h3>
            <ul className="text-gray-600 space-y-2">
              <li>🚀 Faster downloads</li>
              <li>📽️ HD/4K support</li>
              <li>🛡️ Priority access</li>
              <li>❌ No ads or waiting</li>
              <li>✅ One-time payment</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
