import { Html, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Noto+Sans:wght@100;200;300;400;500&display=swap"
        rel="stylesheet"
      />
      <body>
        <NextScript />
      </body>
    </Html>
  );
}
