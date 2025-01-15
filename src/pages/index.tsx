import React from 'react';
import Head from 'next/head';
import NewsList from '../app/components/NewsList';
import { fetchArticles } from '../lib/api';
import { Article } from '../types/article';

export const getServerSideProps = async () => {
  const data = await fetchArticles();
  return {
    props: {
      articles: data ? data.contents : [],
    },
  };
};

const Home = ({ articles }: { articles: Article[] }) => {
  return (
    <>
      <Head>
        <title>ホーム - ニュースアプリ</title>
        <meta property="og:title" content="ホーム - ニュースアプリ" />
        <meta property="og:description" content="最新のニュースをお届けします。" />
        <meta property="description" content="最新のニュースをお届けします。" />
        <meta property="og:image" content="/images/news1.png" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AIニュースアプリ"/>
        <meta property="og:url" content={`https://www.ai-news-summary.com/`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ホーム - ニュースアプリ" />
        <meta name="twitter:description" content="最新のニュースをお届けします。" />
        <meta property="twitter:image" content="https://images.microcms-assets.io/assets/bf2c67205e354cb9a03fae8f004c3ee9/812de2ed7f44441fac41c90d5539a22e/DALL%C2%B7E%202024-12-11%2023.04.16%20-%20A%20horizontal%20image%20designed%20for%20a%20news%20article%2C%20featuring%20a%20modern%20city%20skyline%20at%20sunset%20with%20vibrant%20orange%20and%20purple%20hues.%20The%20foreground%20showcase.webp"></meta>
      </Head>
      <div className="container mx-auto my-6 px-4 pt-16">
        <NewsList articles={articles} />
      </div>
    </>
  );
};

export default Home;
