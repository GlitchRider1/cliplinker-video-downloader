import { useEffect } from 'react';

export default function Subscribe() {
  useEffect(() => {
    // Load PayPal script and render buttons here (client-side only)
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD&vault=true&intent=subscription";
    script.addEventListener('load', () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createSubscription: function(data, actions) {
            return actions.subscription.create({
              'plan_id': 'P-XXXXXXXXXX' // Replace with your PayPal plan ID
            });
          },
          onApprove: function(data, actions) {
            alert('Subscription completed!');
            // TODO: Update user status on backend
          }
        }).render('#paypal-button-container');
      }
    });
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{maxWidth: 600, margin: 'auto', padding: 20}}>
      <h1>Subscribe to Pro Plan</h1>
      <div id="paypal-button-container"></div>
    </div>
  );
}
