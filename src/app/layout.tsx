import type { Metadata, Viewport } from 'next';
import './globals.css';
import { UNIVERSE_NAME } from '@/config/site';

export const metadata: Metadata = {
  title: `${UNIVERSE_NAME} — An Original Maritime Fantasy Universe`,
  description:
    `Beyond the horizon lies a world unforgotten. Explore uncharted oceans, kingdoms, mysterious islands, ancient civilizations, legendary ships, and the narrative trilogy of ${UNIVERSE_NAME}.`,
  keywords: [
    UNIVERSE_NAME,
    'Maritime Fantasy',
    'Fantasy Worldbuilding',
    'Interactive World Atlas',
    'Lore Encyclopedia',
    'Fantasy Fiction',
    'Bioluminescent Oceans',
  ],
  authors: [{ name: `${UNIVERSE_NAME} World-Building Team` }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-sorvia-abyss text-sorvia-pearl antialiased selection:bg-sorvia-cyan selection:text-sorvia-deep font-sans">
        {children}
      </body>
    </html>
  );
}
