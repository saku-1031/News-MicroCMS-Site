# プロジェクト名

このプロジェクトは、ニュース記事を表示するウェブアプリケーションです。

## ディレクトリ構成

- **src/pages**: ページコンポーネントが含まれています。
  - `index.tsx`: ホームページのコンポーネント。
  - `contact.tsx`: お問い合わせページのコンポーネント。
  - `privacy-policy.tsx`: プライバシーポリシーページのコンポーネント。
  - `news/`: ニュース記事の詳細ページが含まれています。

- **src/app**: アプリケーション全体の設定やスタイルが含まれています。
  - `globals.css`: グローバルスタイルシート。
  - `components/`: ヘッダー、フッター、ニュースリストなどの再利用可能なコンポーネントが含まれています。
  - `fonts/`: フォントファイルが含まれています。

- **src/types**: TypeScriptの型定義が含まれています。
  - `article.d.ts`: 記事に関する型定義。
  - `heroicons.d.ts`: アイコンに関する型定義。

- **src/lib**: API呼び出しなどのライブラリ関数が含まれています。
  - `api.ts`: API呼び出しに関する関数。

- **src/data**: アプリケーションで使用するデータが含まれています。
  - `newsData.ts`: ニュースデータ。

## セットアップ

1. リポジトリをクローンします。
2. 必要な依存関係をインストールします。
3. 開発サーバーを起動します。

```bash
git clone https://github.com/saku-1031/News-MicroCMS-Site.git
cd <repository-directory>
npm install
npm run build
npm run start
```

## 使用技術

- React
- TypeScript
- Tailwind CSS

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 環境変数の設定

プロジェクトのルートディレクトリに`.env.local`ファイルを作成し、以下のようにAPIキーとベースURLを設定してください。

```
API_KEY=あなたのAPIキー
API_BASE_URL=あなたのBASEURL
```

このファイルは`.gitignore`に追加されているため、リポジトリにプッシュされることはありません。
