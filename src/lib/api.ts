import axios from 'axios';

export interface Article { // Article型をエクスポート
  id: string;
  title: string;
  content: string;
  eyecatch?: { url: string }; // eyecatchフィールドをオブジェクトとして定義
  publishedAt: string;
}

// 環境変数からAPIキーを取得
const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL, // 環境変数からbaseURLを取得
  headers: {
    'X-API-KEY': process.env.API_KEY, // 環境変数を使用
  },
});

export const fetchArticle = async (id: string): Promise<{ contents: Article[] } | null> => {
  try {
    const response = await apiClient.get('/blogs', {
      params: {
        limit: 100, // 取得件数を100件に制限
      },
    });
    const articles = (response.data as { contents: Article[] }).contents;
    const article = articles.find((item: Article) => item.id === id);
    return article ? { contents: [article] } : null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
};

export const fetchArticles = async (): Promise<{ contents: Article[] } | null> => {
  try {
    const response = await apiClient.get('/blogs', {
      params: {
        limit: 100, // 取得件数を100件に制限
      },
    });
    return response.data as { contents: Article[] };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return null;
  }
};
