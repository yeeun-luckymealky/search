'use client';

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { Category } from '@/data/mock';

interface CategoryTabsProps {
  categories: Category[];
  selectedId: string | null;
  onSelect: (category: Category) => void;
  className?: string;
}

export default function CategoryTabs({
  categories,
  selectedId,
  onSelect,
  className,
}: CategoryTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  // 선택된 탭으로 스크롤
  useEffect(() => {
    if (selectedRef.current && containerRef.current) {
      const container = containerRef.current;
      const selected = selectedRef.current;

      const scrollLeft =
        selected.offsetLeft -
        container.offsetWidth / 2 +
        selected.offsetWidth / 2;

      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: 'smooth',
      });
    }
  }, [selectedId]);

  return (
    <div className={cn('relative bg-white', className)}>
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-3"
      >
        {categories.map((category) => {
          const isSelected = selectedId === category.id;

          return (
            <button
              key={category.id}
              ref={isSelected ? selectedRef : null}
              onClick={() => onSelect(category)}
              className={cn(
                'flex flex-col items-center gap-1.5 min-w-[60px]',
                'transition-all duration-200',
                'active:scale-95',
              )}
            >
              {/* 카테고리 이미지 */}
              <div
                className={cn(
                  'w-14 h-14 rounded-full overflow-hidden border-2 transition-colors',
                  isSelected ? 'border-black' : 'border-transparent',
                )}
              >
                <img
                  src={category.imageUrl}
                  alt={category.label}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 라벨 */}
              <span
                className={cn(
                  'text-xs whitespace-nowrap transition-colors',
                  isSelected ? 'text-black font-bold' : 'text-gray-500',
                )}
              >
                {category.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* 하단 구분선 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
    </div>
  );
}
