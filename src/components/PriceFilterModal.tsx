'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { SortOption } from './FilterBar';

interface PriceFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  priceRange: [number, number];
  sortBy: SortOption;
  onApply: (priceRange: [number, number], sortBy: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'popular', label: '인기순' },
  { value: 'distance', label: '거리순' },
  { value: 'discount', label: '할인율순' },
  { value: 'rating', label: '평점순' },
];

const priceOptions = [
  { label: '1만원 이하', value: [0, 10000] as [number, number] },
  { label: '1~2만원', value: [10000, 20000] as [number, number] },
  { label: '2~3만원', value: [20000, 30000] as [number, number] },
  { label: '3~5만원', value: [30000, 50000] as [number, number] },
  { label: '5만원 이상', value: [50000, 200000] as [number, number] },
];

export default function PriceFilterModal({
  isOpen,
  onClose,
  priceRange: initialPriceRange,
  sortBy: initialSortBy,
  onApply,
}: PriceFilterModalProps) {
  const [priceRange, setPriceRange] =
    useState<[number, number]>(initialPriceRange);
  const [sortBy, setSortBy] = useState<SortOption>(initialSortBy);

  if (!isOpen) return null;

  const handleApply = () => {
    onApply(priceRange, sortBy);
    onClose();
  };

  const handleReset = () => {
    setPriceRange([0, 200000]);
    setSortBy('popular');
  };

  const isPriceSelected = (option: [number, number]) => {
    return priceRange[0] === option[0] && priceRange[1] === option[1];
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* 모달 */}
      <div className="relative w-full max-w-lg bg-white rounded-t-2xl max-h-[80vh] overflow-hidden">
        {/* 헤더 */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-lg">필터</h2>
          <button onClick={onClose} className="p-1">
            <CloseIcon />
          </button>
        </div>

        <div className="p-4 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* 정렬 */}
          <div>
            <h3 className="font-bold mb-3">정렬</h3>
            <div className="flex flex-wrap gap-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm border transition-colors',
                    sortBy === option.value
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-gray-200',
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* 가격대 */}
          <div>
            <h3 className="font-bold mb-3">가격대</h3>
            <div className="flex flex-wrap gap-2">
              {priceOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => setPriceRange(option.value)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm border transition-colors',
                    isPriceSelected(option.value)
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-gray-200',
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="flex gap-2 p-4 border-t">
          <button
            onClick={handleReset}
            className="flex-1 py-3 rounded-lg border border-gray-200 font-medium"
          >
            초기화
          </button>
          <button
            onClick={handleApply}
            className="flex-1 py-3 rounded-lg bg-black text-white font-medium"
          >
            적용하기
          </button>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
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
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
