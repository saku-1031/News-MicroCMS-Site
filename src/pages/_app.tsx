import React from 'react';
import { AppProps } from 'next/app';
import '../app/globals.css';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
