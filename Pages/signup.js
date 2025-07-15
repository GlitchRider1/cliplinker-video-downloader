import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else router.push('/dashboard');
  };

  return (
    <div style={{maxWidth: 400, margin: 'auto', padding: 20}}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          style={{width: '100%', padding: 8, marginBottom: 10}}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
          style={{width: '100%', padding: 8, marginBottom: 10}}
        />
        <button type="submit" style={{padding: 10, width: '100%'}}>Sign Up</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <p style={{marginTop: 10}}>Already have an account? <a href="/login" style={{color: 'blue'}}>Login</a></p>
    </div>
  );
}
