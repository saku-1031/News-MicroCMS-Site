import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '../../types/article';

const NewsList = ({ articles }: { articles: Article[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto my-6 px-4">
      <h1 className="text-3xl font-bold mb-6">ニュース一覧</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentArticles.map(article => (
          <li key={article.id} className="bg-white shadow-md rounded-lg p-4">
            <Link href={`/news/${article.id}`} legacyBehavior>
              <a className="text-xl font-semibold text-blue-600 hover:underline">
                {article.title}
              </a>
            </Link>
            <p className="text-gray-500">{new Date(article.publishedAt).toLocaleDateString('ja-JP')}</p>
            <Image
              src={article.eyecatch?.url || '/images/dummy.png'}
              alt={article.title}
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-md mt-4"
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          前のページ
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          次のページ
        </button>
      </div>
    </div>
  );
};

export default NewsList;
