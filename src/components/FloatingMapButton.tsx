'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FloatingMapButtonProps {
  className?: string;
}

export default function FloatingMapButton({ className }: FloatingMapButtonProps) {
  return (
    <Link
      href="/map"
      className={cn(
        'fixed bottom-24 left-1/2 -translate-x-1/2 z-50',
        'flex items-center gap-2 px-4 py-2.5',
        'bg-white text-gray-800 rounded-full shadow-lg border border-gray-200',
        'hover:bg-gray-50 active:scale-95 transition-all',
        className,
      )}
    >
      <MapIcon />
      <span className="font-medium text-sm">지도에서 보기</span>
    </Link>
  );
}

function MapIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  );
}
