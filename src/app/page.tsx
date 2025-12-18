'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import CategoryTabs from '@/components/CategoryTabs';
import FilterBar, { type SortOption } from '@/components/FilterBar';
import PromoBanner from '@/components/PromoBanner';
import PlaceGrid from '@/components/PlaceGrid';
import FloatingMapButton from '@/components/FloatingMapButton';
import BottomNav from '@/components/BottomNav';
import RegionModal from '@/components/RegionModal';
import PriceFilterModal from '@/components/PriceFilterModal';
import { categories, banners, places, type Category } from '@/data/mock';

export default function HomePage() {
  // 필터 상태
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [isReservableOnly, setIsReservableOnly] = useState(false);

  // 모달 상태
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);

  // 카테고리 선택
  const handleCategorySelect = (category: Category) => {
    setSelectedCategoryId(
      selectedCategoryId === category.id ? null : category.id,
    );
  };

  // 예약 가능 토글
  const handleReservableToggle = () => {
    setIsReservableOnly(!isReservableOnly);
  };

  // 지역 필터 적용
  const handleRegionApply = (sido: string, sigungu: string[]) => {
    setSelectedRegion(sigungu.length > 0 ? sigungu[0] : null);
    setIsRegionModalOpen(false);
  };

  // 가격/정렬 필터 적용
  const handlePriceFilterApply = (
    newPriceRange: [number, number],
    newSortBy: SortOption,
  ) => {
    setPriceRange(newPriceRange);
    setSortBy(newSortBy);
  };

  return (
    <main className="min-h-screen bg-white max-w-lg mx-auto relative pb-20">
      {/* 헤더 */}
      <Header title="우리동네 매장" />

      {/* Sticky 영역: 카테고리 탭 + 필터 바 */}
      <div className="sticky top-12 z-20 bg-white">
        {/* 카테고리 탭 */}
        <CategoryTabs
          categories={categories}
          selectedId={selectedCategoryId}
          onSelect={handleCategorySelect}
        />

        {/* 필터 바 */}
        <FilterBar
          selectedRegion={selectedRegion}
          onRegionClick={() => setIsRegionModalOpen(true)}
          isReservableOnly={isReservableOnly}
          onReservableToggle={handleReservableToggle}
          priceRange={
            priceRange[0] === 0 && priceRange[1] === 200000 ? null : priceRange
          }
          onPriceClick={() => setIsPriceModalOpen(true)}
          sortBy={sortBy}
          onSortClick={() => setIsPriceModalOpen(true)}
        />
      </div>

      {/* 스크롤 영역 */}
      <div className="px-4 pb-24">
        {/* 프로모션 배너 */}
        <PromoBanner banners={banners} className="mt-3 mb-4" />

        {/* 가게 리스트 */}
        <PlaceGrid places={places} />
      </div>

      {/* 플로팅 지도 버튼 */}
      <FloatingMapButton />

      {/* 하단 네비게이션 */}
      <BottomNav />

      {/* 지역 선택 모달 */}
      <RegionModal
        isOpen={isRegionModalOpen}
        onClose={() => setIsRegionModalOpen(false)}
        selectedSido="서울"
        selectedSigungu={selectedRegion ? [selectedRegion] : []}
        onApply={handleRegionApply}
      />

      {/* 가격/정렬 필터 모달 */}
      <PriceFilterModal
        isOpen={isPriceModalOpen}
        onClose={() => setIsPriceModalOpen(false)}
        priceRange={priceRange}
        sortBy={sortBy}
        onApply={handlePriceFilterApply}
      />
    </main>
  );
}
