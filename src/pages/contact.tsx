import React from 'react';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>お問い合わせ - ニュースアプリ</title>
        <meta property="og:title" content="お問い合わせ - ニュースアプリ" />
        <meta property="og:description" content="お問い合わせはこちらからどうぞ。" />
        <meta property="description" content="お問い合わせはこちらからどうぞ。" />
      </Head>
      <div className="container mx-auto my-6 px-4 pt-16">
        <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe8BPtJapLt5Cd_3PQ7wCjdFRxp26rLqz8GbPX8VAP5-JHoKw/viewform?embedded=true"
          width={640}
          height={554}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          読み込んでいます…
        </iframe>
      </div>
    </>
  );
};

export default Contact;
