import Link from 'next/link';

export default function Pricing() {
  return (
    <div style={{maxWidth: 600, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif'}}>
      <h1>Pricing</h1>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={{border: '1px solid #ddd', padding: 8}}></th>
            <th style={{border: '1px solid #ddd', padding: 8}}>Free</th>
            <th style={{border: '1px solid #ddd', padding: 8}}>Pro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{border: '1px solid #ddd', padding: 8}}>Downloads per day</td>
            <td style={{border: '1px solid #ddd', padding: 8}}>3</td>
            <td style={{border: '1px solid #ddd', padding: 8}}>Unlimited</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: 8}}>HD / 4K downloads</td>
            <td style={{border: '1px solid #ddd', padding: 8}}>No</td>
            <td style={{border: '1px solid #ddd', padding: 8}}>Yes</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: 8}}>Ad-free experience</td>
            <td style={{border: '1px solid #ddd', padding: 8}}>No</td>
            <td style={{border: '1px solid #ddd', padding: 8}}>Yes</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: 8}}>Batch downloads</td>
            <td style={{border: '1px solid #ddd', padding: 8}}>No</td>
            <td style={{border: '1px solid #ddd', padding: 8}}>Yes</td>
          </tr>
        </tbody>
      </table>
      <div style={{marginTop: 20}}>
        <a href="/subscribe" style={{padding: '10px 20px', backgroundColor: 'blue', color: 'white', textDecoration: 'none', borderRadius: 5}}>Subscribe with PayPal</a>
      </div>
    </div>
  );
}
