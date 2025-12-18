// 카테고리 데이터
export interface Category {
  id: string;
  label: string;
  slug: string;
  imageUrl: string;
}

export const categories: Category[] = [
  { id: '1', label: '연말 케이크', slug: 'cake', imageUrl: 'https://picsum.photos/seed/cat1/80/80' },
  { id: '2', label: '오늘의 빵', slug: 'bread', imageUrl: 'https://picsum.photos/seed/cat2/80/80' },
  { id: '3', label: '연남 맛집', slug: 'yeonnam', imageUrl: 'https://picsum.photos/seed/cat3/80/80' },
  { id: '4', label: '원데이 클래스', slug: 'class', imageUrl: 'https://picsum.photos/seed/cat4/80/80' },
  { id: '5', label: '네일샵', slug: 'nail', imageUrl: 'https://picsum.photos/seed/cat5/80/80' },
  { id: '6', label: '카페', slug: 'cafe', imageUrl: 'https://picsum.photos/seed/cat6/80/80' },
  { id: '7', label: '디저트', slug: 'dessert', imageUrl: 'https://picsum.photos/seed/cat7/80/80' },
  { id: '8', label: '한식', slug: 'korean', imageUrl: 'https://picsum.photos/seed/cat8/80/80' },
];

// 배너 데이터
export interface Banner {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  link: string;
}

export const banners: Banner[] = [
  {
    id: '1',
    imageUrl: 'https://picsum.photos/seed/banner1/800/400',
    title: '에이블리 X 롯데월드',
    subtitle: '종합이용권 33,000원',
    link: '/event/1',
  },
  {
    id: '2',
    imageUrl: 'https://picsum.photos/seed/banner2/800/400',
    title: '신규 가입 혜택',
    subtitle: '첫 주문 50% 할인',
    link: '/event/2',
  },
];

// 가게 데이터
export interface Place {
  id: string;
  name: string;
  region: string;
  originalPrice: number;
  discountPrice: number;
  discountRate: number;
  images: string[];
  reviewCount?: number;
  isLiked: boolean;
}

export const places: Place[] = [
  {
    id: '1',
    name: '레이지오븐',
    region: '화성시',
    originalPrice: 12000,
    discountPrice: 8400,
    discountRate: 30,
    images: [
      'https://picsum.photos/seed/place1a/400/300',
      'https://picsum.photos/seed/place1b/400/300',
      'https://picsum.photos/seed/place1c/400/300',
      'https://picsum.photos/seed/place1d/400/300',
    ],
    isLiked: false,
  },
  {
    id: '2',
    name: '지니당',
    region: '수원시',
    originalPrice: 13000,
    discountPrice: 12970,
    discountRate: 0,
    images: [
      'https://picsum.photos/seed/place2a/400/300',
      'https://picsum.photos/seed/place2b/400/300',
      'https://picsum.photos/seed/place2c/400/300',
      'https://picsum.photos/seed/place2d/400/300',
    ],
    isLiked: false,
  },
  {
    id: '3',
    name: '잠실슈크림슈아',
    region: '송파구',
    originalPrice: 11700,
    discountPrice: 8190,
    discountRate: 30,
    images: [
      'https://picsum.photos/seed/place3a/400/300',
      'https://picsum.photos/seed/place3b/400/300',
      'https://picsum.photos/seed/place3c/400/300',
      'https://picsum.photos/seed/place3d/400/300',
    ],
    reviewCount: 1,
    isLiked: false,
  },
  {
    id: '4',
    name: '달콤베이커리',
    region: '강남구',
    originalPrice: 15000,
    discountPrice: 10500,
    discountRate: 30,
    images: [
      'https://picsum.photos/seed/place4a/400/300',
      'https://picsum.photos/seed/place4b/400/300',
      'https://picsum.photos/seed/place4c/400/300',
      'https://picsum.photos/seed/place4d/400/300',
    ],
    isLiked: true,
  },
  {
    id: '5',
    name: '빵굼터',
    region: '마포구',
    originalPrice: 9000,
    discountPrice: 6300,
    discountRate: 30,
    images: [
      'https://picsum.photos/seed/place5a/400/300',
      'https://picsum.photos/seed/place5b/400/300',
      'https://picsum.photos/seed/place5c/400/300',
      'https://picsum.photos/seed/place5d/400/300',
    ],
    isLiked: false,
  },
];

// 지역 데이터
export const regions = {
  서울: ['강남구', '서초구', '송파구', '마포구', '용산구', '종로구'],
  경기: ['성남시', '수원시', '용인시', '고양시', '화성시'],
  인천: ['중구', '남구', '연수구', '부평구'],
};
