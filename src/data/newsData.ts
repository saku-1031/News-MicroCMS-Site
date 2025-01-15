export type NewsItem = {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
};

export const newsData: NewsItem[] = [
  { 
    id: '1', 
    title: 'ニュースタイトル1', 
    content: '# ニュースの詳細\n\nこれはニュースの詳細内容です。ここにはニュースの詳細な情報が含まれます。\n\n## 詳細情報\n\n- 情報1\n- 情報2\n- 情報3\n\nさらに多くの情報を追加して、ニュースの内容を充実させます。', 
    date: '2023-10-01', 
    image: '/images/news1.png' 
  },
  { 
    id: '2', 
    title: 'ニュースタイトル2', 
    content: '## 別のニュースの詳細\n\nこちらは別のニュースの詳細内容です。ニュースの背景や関連情報を詳しく説明します。\n\n### 関連情報\n\n1. 関連情報1\n2. 関連情報2\n3. 関連情報3\n\n読者が理解しやすいように、情報を整理して提供します。', 
    date: '2023-10-02' 
  },
  // 他のニュースデータを追加
];
