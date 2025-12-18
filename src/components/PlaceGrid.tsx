'use client';

import PlaceCard from './PlaceCard';
import type { Place } from '@/data/mock';

interface PlaceGridProps {
  places: Place[];
  className?: string;
}

export default function PlaceGrid({ places, className }: PlaceGridProps) {
  if (places.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <p>검색 결과가 없습니다</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex flex-col gap-6">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}
