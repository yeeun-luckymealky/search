'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { Place } from '@/data/mock';

interface PlaceCardProps {
  place: Place;
  className?: string;
}

export default function PlaceCard({ place, className }: PlaceCardProps) {
  const [isLiked, setIsLiked] = useState(place.isLiked);

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR');
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <article className={cn('cursor-pointer group', className)}>
      {/* 이미지 그리드 - 2x2 */}
      <div className="grid grid-cols-2 gap-0.5 rounded-xl overflow-hidden aspect-square">
        {place.images.slice(0, 4).map((image, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={image}
              alt={`${place.name} ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* 정보 */}
      <div className="mt-2 flex items-start justify-between">
        <div className="flex-1">
          {/* 가게명 */}
          <h3 className="font-bold text-base">{place.name}</h3>

          {/* 지역 + 가격 */}
          <div className="flex items-center gap-1 mt-0.5 text-sm">
            <LocationIcon />
            <span className="text-gray-500">{place.region}</span>
            <span className="text-gray-300 mx-0.5">·</span>
            <span className="text-gray-400 line-through">
              {formatPrice(place.originalPrice)}원
            </span>
            {place.discountRate > 0 && (
              <span className="text-red-500 font-bold">{place.discountRate}%</span>
            )}
            <span className="font-bold">{formatPrice(place.discountPrice)}원</span>
          </div>

          {/* 리뷰 수 */}
          {place.reviewCount && (
            <p className="text-xs text-gray-400 mt-0.5">리뷰 {place.reviewCount}개</p>
          )}
        </div>

        {/* 하트 아이콘 */}
        <button
          onClick={handleLikeClick}
          className="p-1 -mr-1"
        >
          <HeartIcon filled={isLiked} />
        </button>
      </div>
    </article>
  );
}

function LocationIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={filled ? '#FF6B6B' : 'none'}
      stroke={filled ? '#FF6B6B' : '#D1D5DB'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
