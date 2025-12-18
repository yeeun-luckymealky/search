'use client';

import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';

export default function MapPage() {
  return (
    <main className="min-h-screen bg-gray-100 max-w-lg mx-auto relative pb-20">
      {/* 헤더 */}
      <Header title="동네 지도" />

      {/* 지도 영역 */}
      <div className="h-[calc(100vh-8rem)] flex items-center justify-center bg-gray-200">
        <div className="text-center">
          <MapIcon />
          <p className="mt-4 text-gray-600 font-medium">지도 기능</p>
          <p className="mt-1 text-sm text-gray-400">
            카카오맵 또는 네이버맵 API를<br />연동하여 사용할 수 있습니다
          </p>
        </div>
      </div>

      {/* 하단 네비게이션 */}
      <BottomNav />
    </main>
  );
}

function MapIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
