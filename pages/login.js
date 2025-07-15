import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) router.push('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
