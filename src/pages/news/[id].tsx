import React from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { fetchArticle, Article } from '../../lib/api';

type NewsDetailProps = {
  news: Article | null;
};

const NewsDetail: React.FC<NewsDetailProps> = ({ news }) => {
  return (
    <>
      <Head>
        <title>{news ? news.title : 'ニュース詳細'}</title>
        {news && (
          <>
            <meta property="og:title" content={news.title} />
            <meta property="og:description" content={news.content.substring(0, 100)} />
            <meta property="og:image" content={news.eyecatch?.url || '/images/dummy.png'} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`https://www.ai-news-summary.com/news/${news.id}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={news.title} />
            <meta name="twitter:description" content={news.content.substring(0, 100)} />
          </>
        )}
      </Head>
      <main className="container mx-auto my-6 px-4 pt-16 pb-16">
        <div className="max-w-3xl mx-auto bg-gray-50 shadow-lg rounded-lg p-6">
          {news ? (
            <>
              <h1 className="text-2xl font-extrabold text-gray-800 mb-6">
                {news.title}
              </h1>
              <Image
                src={news.eyecatch?.url || '/images/dummy.png'}
                alt={news.title}
                width={800}
                height={450}
                className="w-full h-auto object-cover rounded-lg shadow-md mb-6"
              />
              <div>
                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-medium">日付:</span> {new Date(news.publishedAt).toLocaleDateString()}
                </p>
                <div
                  className="html-content"
                  dangerouslySetInnerHTML={{ __html: news.content }}
                />
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 text-lg">
              ニュースが見つかりません。
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const data = await fetchArticle(id as string);
  const news = data && data.contents ? data.contents[0] : null;

  return {
    props: {
      news,
    },
  };
};

export default NewsDetail;
