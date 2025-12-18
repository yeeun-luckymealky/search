'use client';

import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  showBack?: boolean;
}

export default function Header({ title, showBack = true }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100">
      <div className="flex items-center justify-center h-12 px-4 relative">
        {showBack && (
          <button
            onClick={() => router.back()}
            className="absolute left-4 p-1"
          >
            <ChevronLeftIcon />
          </button>
        )}
        <h1 className="font-medium text-base">{title}</h1>
      </div>
    </header>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
