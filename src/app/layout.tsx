import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LuckyMeal - 맛집 탐색',
  description: '주변 맛집을 찾아보세요',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-white">{children}</body>
    </html>
  );
}
