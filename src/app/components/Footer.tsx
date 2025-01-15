import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      このニュースは全てAIが生成しました、不正確な可能性もあるためあらかじめご了承ください<br/>© 2024 AIニュースまとめ
      <Link href="/privacy-policy" className="text-blue-400 hover:underline"><br/>利用規約 プライバシーポリシー</Link>
    </footer>
  );
};

export default Footer;
