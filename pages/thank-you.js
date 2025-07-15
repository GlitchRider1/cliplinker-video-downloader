import Layout from '../components/Layout';

export default function ThankYou() {
  return (
    <Layout>
      <div className="max-w-xl mx-auto text-center mt-24 p-6 bg-white rounded shadow">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-gray-700">Your payment was successful. You now have access to premium features.</p>
      </div>
    </Layout>
  );
}
