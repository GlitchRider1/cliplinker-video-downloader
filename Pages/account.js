import { supabase } from '../lib/supabaseClient';
import { useEffect, useState } from 'react';

export default function Account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setUser(data.session.user);
    });
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{maxWidth: 600, margin: 'auto', padding: 20}}>
      <h1>My Account</h1>
      <p>Email: {user.email}</p>
      <p>Subscription management will be handled via PayPal dashboard.</p>
    </div>
  );
}
