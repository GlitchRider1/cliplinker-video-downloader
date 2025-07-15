import Layout from '../components/Layout';
import { useEffect } from 'react';

export default function Premium() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.paypal) {
      window.paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'pill',
          label: 'paypal'
        },
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '5.00' // your price
              }
            }]
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            alert('Payment completed by ' + details.payer.name.given_name);
            window.location.href = '/thank-you';
          });
        }
      }).render('#paypal-button-container');
    }
  }, []);

  return (
    <Layout>
      <div className="max-w-lg mx-auto mt-16 text-center p-6 bg-white rounded shadow">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Go Premium</h2>
        <p className="text-gray-700 mb-6">Unlock HD downloads and faster speeds for just $5!</p>
        <div id="paypal-button-container"></div>
      </div>
    </Layout>
  );
}
