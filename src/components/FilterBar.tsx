'use client';

import { cn } from '@/lib/utils';

export type SortOption = 'popular' | 'distance' | 'discount' | 'rating';

interface FilterBarProps {
  selectedRegion: string | null;
  onRegionClick: () => void;
  isReservableOnly: boolean;
  onReservableToggle: () => void;
  priceRange: [number, number] | null;
  onPriceClick: () => void;
  sortBy: SortOption;
  onSortClick: () => void;
  className?: string;
}

const sortLabels: Record<SortOption, string> = {
  popular: '인기순',
  distance: '거리순',
  discount: '할인율순',
  rating: '평점순',
};

export default function FilterBar({
  selectedRegion,
  onRegionClick,
  isReservableOnly,
  onReservableToggle,
  priceRange,
  onPriceClick,
  sortBy,
  onSortClick,
  className,
}: FilterBarProps) {
  const hasPriceFilter = priceRange !== null;

  return (
    <div
      className={cn(
        'flex items-center gap-2 px-4 py-2.5 overflow-x-auto scrollbar-hide bg-white border-b border-gray-100',
        className,
      )}
    >
      {/* 지역 필터 */}
      <button
        onClick={onRegionClick}
        className={cn(
          'flex items-center gap-1 px-3 py-1.5 rounded-full text-sm whitespace-nowrap border transition-colors',
          selectedRegion
            ? 'bg-gray-900 text-white border-gray-900'
            : 'bg-white text-gray-700 border-gray-200',
        )}
      >
        <LocationPinIcon />
        <span>{selectedRegion || '전체 지역'}</span>
        <ChevronDownIcon />
      </button>

      {/* 예약가능 토글 */}
      <button
        onClick={onReservableToggle}
        className={cn(
          'px-3 py-1.5 rounded-full text-sm whitespace-nowrap border transition-colors',
          isReservableOnly
            ? 'bg-gray-900 text-white border-gray-900'
            : 'bg-white text-gray-700 border-gray-200',
        )}
      >
        예약 가능
      </button>

      {/* 가격 필터 */}
      <button
        onClick={onPriceClick}
        className={cn(
          'flex items-center gap-1 px-3 py-1.5 rounded-full text-sm whitespace-nowrap border transition-colors',
          hasPriceFilter
            ? 'bg-gray-900 text-white border-gray-900'
            : 'bg-white text-gray-700 border-gray-200',
        )}
      >
        <span>가격</span>
        <ChevronDownIcon />
      </button>

      {/* 정렬 */}
      <button
        onClick={onSortClick}
        className={cn(
          'flex items-center gap-1 px-3 py-1.5 rounded-full text-sm whitespace-nowrap border transition-colors',
          'bg-white text-gray-700 border-gray-200',
        )}
      >
        <span>{sortLabels[sortBy]}</span>
        <ChevronDownIcon />
      </button>
    </div>
  );
}

function LocationPinIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
