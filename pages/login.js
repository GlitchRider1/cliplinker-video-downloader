import Layout from '../components/Layout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded shadow">
          <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Log in to ClipLinker</h1>
          {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-6 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            onClick={handleLogin}
          >
            Log In
          </button>
          <p className="text-center text-sm mt-4">
            Don’t have an account?{' '}
            <Link href="/signup">
              <a className="text-blue-500 hover:underline">Sign up</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
