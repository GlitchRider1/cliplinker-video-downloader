export default function Success() {
  return (
    <div style={{maxWidth: 600, margin: 'auto', padding: 20}}>
      <h1>Thank you for subscribing!</h1>
      <p>Your payment was successful. You now have access to Pro features.</p>
      <a href="/dashboard" style={{color: 'blue'}}>Go to Dashboard</a>
    </div>
  );
}
