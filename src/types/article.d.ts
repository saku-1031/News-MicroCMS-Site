export interface Article {
  id: string;
  title: string;
  publishedAt: string;
  eyecatch?: {
    url: string;
  };
}
