import React from 'react';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/react"

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <Analytics />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            twq('event', 'tw-ouxr9-ouxsn', {});
          `,
        }}
      />
      <Link className="container mx-auto flex flex-col md:flex-row justify-between items-center cursor-pointer" href="/" legacyBehavior>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">AIニュースまとめ</h1>
      </Link>
    </header>
  );
};

export default Header;
