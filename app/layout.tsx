import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://teamrobertmorris.com'),
  title: 'Team Robert Morris | Middle Tennessee Real Estate Experts',
  description:
    'Trusted real estate experts helping families and first-time home buyers move smarter across Middle Tennessee — Franklin, Brentwood, Nolensville, Spring Hill, Murfreesboro, and beyond.',
  openGraph: {
    title: 'Team Robert Morris | Middle Tennessee Real Estate',
    description:
      'Helping families move smarter across Middle Tennessee since day one.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
