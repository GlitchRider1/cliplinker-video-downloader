import '../styles/globals.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=AUV9kiTLZ5IdcKHTKhd9s_JPha7d9ZUj9miMdlpHh3DOKml1rsXwVll02T4brHQaszczEPZ-lqCYClC4&currency=USD`}
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
