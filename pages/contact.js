import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-xl mx-auto mt-16 p-6 bg-white rounded shadow">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Have questions, feedback, or want to report an issue? We’d love to hear from you!
        </p>
        <form action="mailto:your@email.com" method="POST" encType="text/plain">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full mb-4 px-4 py-2 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full mb-4 px-4 py-2 border rounded h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
}
