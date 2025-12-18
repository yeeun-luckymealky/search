'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { regions } from '@/data/mock';

interface RegionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSido: string;
  selectedSigungu: string[];
  onApply: (sido: string, sigungu: string[]) => void;
}

export default function RegionModal({
  isOpen,
  onClose,
  selectedSido: initialSido,
  selectedSigungu: initialSigungu,
  onApply,
}: RegionModalProps) {
  const [sido, setSido] = useState(initialSido || '서울');
  const [sigungu, setSigungu] = useState<string[]>(initialSigungu);

  if (!isOpen) return null;

  const handleSigunguToggle = (region: string) => {
    setSigungu((prev) =>
      prev.includes(region)
        ? prev.filter((r) => r !== region)
        : [...prev, region],
    );
  };

  const handleApply = () => {
    onApply(sido, sigungu);
  };

  const handleReset = () => {
    setSigungu([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* 모달 */}
      <div className="relative w-full max-w-lg bg-white rounded-t-2xl max-h-[80vh] overflow-hidden animate-slide-up">
        {/* 헤더 */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-lg">지역 선택</h2>
          <button onClick={onClose} className="p-1">
            <CloseIcon />
          </button>
        </div>

        {/* 시/도 탭 */}
        <div className="flex border-b overflow-x-auto scrollbar-hide">
          {Object.keys(regions).map((s) => (
            <button
              key={s}
              onClick={() => {
                setSido(s);
                setSigungu([]);
              }}
              className={cn(
                'px-4 py-3 whitespace-nowrap font-medium text-sm',
                sido === s
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-400',
              )}
            >
              {s}
            </button>
          ))}
        </div>

        {/* 시/군/구 목록 */}
        <div className="p-4 grid grid-cols-3 gap-2 max-h-[40vh] overflow-y-auto">
          {regions[sido as keyof typeof regions]?.map((region) => (
            <button
              key={region}
              onClick={() => handleSigunguToggle(region)}
              className={cn(
                'px-3 py-2 rounded-lg text-sm border transition-colors',
                sigungu.includes(region)
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-200',
              )}
            >
              {region}
            </button>
          ))}
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
