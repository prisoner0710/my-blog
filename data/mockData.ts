/**
 * 블로그 애플리케이션 목업 데이터
 * 타입 정의, 샘플 데이터, 유틸리티 함수 제공
 */

import type { Comment, CommentFormData, CommentStats } from '@/types/comment';

/**
 * 작성자 정보 인터페이스
 */
export interface Author {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  socialLinks?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

/**
 * 카테고리 인터페이스
 */
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

/**
 * 블로그 포스트 인터페이스
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: Author;
  category: Category;
  tags: string[];
  coverImage?: string;
  publishedAt: Date;
  updatedAt: Date;
  readingTime: number;
  viewCount: number;
  likeCount: number;
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
}

// 댓글 관련 타입들을 re-export
export type { Comment, CommentFormData, CommentStats };

// ================================
// 샘플 데이터
// ================================

/**
 * 샘플 작성자 데이터
 */
export const mockAuthors: Author[] = [
  {
    id: 'author-1',
    name: '김천문',
    email: 'astro@betelgeuse.com',
    bio: '천체물리학자이자 과학 저술가. 우주의 신비로움을 많은 사람들과 나누고 싶습니다.',
    socialLinks: {
      github: 'https://github.com/astrokim',
      twitter: 'https://twitter.com/astrokim'
    }
  },
  {
    id: 'author-2',
    name: '이별빛',
    email: 'starlight@betelgeuse.com',
    bio: '아마추어 천문가, 천체 사진 작가. 밤하늘의 아름다움을 카메라에 담습니다.',
    socialLinks: {
      github: 'https://github.com/starphoto'
    }
  }
];

/**
 * 샘플 카테고리 데이터
 */
export const mockCategories: Category[] = [
  {
    id: 'cat-1',
    name: '태양계',
    slug: 'solar-system',
    description: '태양계의 행성들과 위성, 소행성, 혜성 등에 대한 이야기',
    color: '#FF6B6B'  // 붉은색 계열 (태양 이미지)
  },
  {
    id: 'cat-2',
    name: '별과 성운',
    slug: 'stars-and-nebulae',
    description: '항성의 일생과 다양한 성운, 성단에 대한 탐구',
    color: '#4DABF7'  // 푸른색 계열 (젊은 별 이미지)
  },
  {
    id: 'cat-3',
    name: '우주물리학',
    slug: 'space-physics',
    description: '우주의 기원과 진화, 천체의 물리적 특성과 현상에 대한 연구',
    color: '#9775FA'  // 보라색 계열 (신비로운 우주 이미지)
  },
  {
    id: 'cat-4',
    name: '천체관측',
    slug: 'astronomy-observation',
    description: '천체 관측 방법과 장비, 관측 팁',
    color: '#15AABF'  // 청록색 계열 (밤하늘 이미지)
  },
  {
    id: 'cat-5',
    name: '우주 탐사',
    slug: 'space-exploration',
    description: '인류의 우주 탐사 역사와 미래',
    color: '#40C057'  // 초록색 계열 (희망찬 탐사 이미지)
  }
];

/**
 * 샘플 블로그 포스트 데이터
 */
export const mockPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: '목성의 유로파: 생명체가 존재할 수 있는 얼음 위성',
    slug: 'europa-jupiter-moon-life',
    content: '# 목성의 유로파: 생명체가 존재할 수 있는 얼음 위성\n\n태양계에서 생명체가 존재할 가능성이 있는 천체 중 하나인 유로파에 대해 알아봅니다...',
    excerpt: '목성의 위성 유로파의 특징과 지하 바다에 생명체가 존재할 수 있는 가능성을 탐구합니다.',
    author: mockAuthors[0],
    category: mockCategories[0], // 태양계
    tags: ['목성', '위성', '유로파', '외계생명', '태양계 탐사'],
    publishedAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    readingTime: 8,
    viewCount: 1250,
    likeCount: 89,
    featured: true,
    status: 'published'
  },
  {
    id: 'post-2',
    title: '베텔게우스의 신비: 초신성이 될 거대 별의 이야기',
    slug: 'betelgeuse-mystery-supernova',
    content: '# 베텔게우스의 신비: 초신성이 될 거대 별의 이야기\n\n오리온자리의 붉은 초거성 베텔게우스는 언제 폭발할까요? 이 거대한 별의 생애와 미래에 대해 알아봅니다...',
    excerpt: '오리온자리의 붉은 초거성 베텔게우스의 특징과 미래의 초신성 폭발 가능성을 분석합니다.',
    author: mockAuthors[1],
    category: mockCategories[1], // 별과 성운
    tags: ['베텔게우스', '초거성', '초신성', '항성진화', '오리온자리'],
    publishedAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-12'),
    readingTime: 12,
    viewCount: 890,
    likeCount: 67,
    featured: true,
    status: 'published'
  },
  {
    id: 'post-3',
    title: '암흑 물질과 암흑 에너지: 보이지 않는 우주의 비밀',
    slug: 'dark-matter-energy-universe',
    content: '# 암흑 물질과 암흑 에너지: 보이지 않는 우주의 비밀\n\n우주의 대부분을 차지하는 암흑 물질과 암흑 에너지의 특성과 그 존재를 증명하는 관측 증거들을 살펴봅니다...',
    excerpt: '우주를 구성하는 신비로운 암흑 물질과 암흑 에너지의 본질과 그 발견 과정을 소개합니다.',
    author: mockAuthors[0],
    category: mockCategories[2], // 우주론
    tags: ['암흑물질', '암흑에너지', '우주론', '은하', '중력'],
    publishedAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08'),
    readingTime: 10,
    viewCount: 756,
    likeCount: 54,
    featured: false,
    status: 'published'
  },
  {
    id: 'post-4',
    title: '천체 사진 촬영의 기초: 장비 선택부터 후보정까지',
    slug: 'astrophotography-basics-guide',
    content: '# 천체 사진 촬영의 기초: 장비 선택부터 후보정까지\n\n천체 사진을 시작하는 분들을 위한 완벽 가이드. 필요한 장비, 카메라 설정, 그리고 이미지 처리 방법을 상세히 설명합니다...',
    excerpt: '천체 사진 촬영을 시작하는 방법부터 전문적인 이미지 처리 기법까지 자세히 알아봅니다.',
    author: mockAuthors[1],
    category: mockCategories[3], // 천체관측
    tags: ['천체사진', '천체관측', '카메라', '망원경', '사진촬영'],
    publishedAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    readingTime: 15,
    viewCount: 642,
    likeCount: 43,
    featured: false,
    status: 'published'
  },
  {
    id: 'post-5',
    title: '블랙홀의 물리학: 사건의 지평선부터 특이점까지',
    slug: 'black-hole-physics-guide',
    content: '# 블랙홀의 물리학: 사건의 지평선부터 특이점까지\n\n블랙홀의 형성 과정과 물리적 특성, 그리고 최근의 관측 결과들을 통해 이 신비로운 천체의 본질에 다가갑니다...',
    excerpt: '블랙홀의 물리학적 특성과 최근 관측된 놀라운 발견들을 심도있게 다룹니다.',
    author: mockAuthors[0],
    category: mockCategories[2], // 우주물리학
    tags: ['블랙홀', '중력', '상대성이론', '천체물리', '사건의지평선'],
    publishedAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03'),
    readingTime: 15,
    viewCount: 523,
    likeCount: 38,
    featured: false,
    status: 'published'
  },
  {
    id: 'post-6',
    title: 'NASA의 아르테미스 프로그램: 달 탐사의 새로운 시대',
    slug: 'nasa-artemis-program-moon',
    content: '# NASA의 아르테미스 프로그램: 달 탐사의 새로운 시대\n\nNASA의 야심찬 달 탐사 프로그램인 아르테미스의 목표와 계획, 그리고 인류의 달 귀환이 가져올 변화를 살펴봅니다...',
    excerpt: 'NASA의 아르테미스 프로그램을 통해 인류의 달 탐사가 어떻게 새로운 시대를 열어갈지 전망합니다.',
    author: mockAuthors[1],
    category: mockCategories[4], // 우주 탐사
    tags: ['NASA', '아르테미스', '달탐사', '우주선', '우주기지'],
    publishedAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    readingTime: 9,
    viewCount: 445,
    likeCount: 29,
    featured: false,
    status: 'published'
  }
];

/**
 * 샘플 댓글 데이터
 */
export const mockComments: Comment[] = [
  {
    id: 'comment-1',
    postId: 'post-1',
    authorName: '김우주',
    authorEmail: 'space@example.com',
    authorWebsite: 'https://blog.example.com',
    content: '유로파의 지하 바다에 대한 설명이 정말 흥미롭네요! 특히 열수분출공이 존재할 가능성에 대한 부분이 인상적이었습니다.',
    createdAt: new Date('2024-01-16T10:30:00Z'),
    status: 'approved',
    likeCount: 12,
    dislikeCount: 0,
    reportCount: 0,
    isEdited: false,
    isPinned: false,
    isAuthor: false
  },
  {
    id: 'comment-2',
    postId: 'post-1',
    authorName: '이탐사',
    authorEmail: 'explorer@example.com',
    content: '@김우주 저도 같은 생각입니다. NASA의 유로파 클리퍼 미션이 성공하면 더 많은 정보를 얻을 수 있을 것 같아요.',
    createdAt: new Date('2024-01-16T14:45:00Z'),
    status: 'approved',
    parentId: 'comment-1',
    likeCount: 8,
    dislikeCount: 0,
    reportCount: 0,
    isEdited: false,
    isPinned: false,
    isAuthor: false
  },
  {
    id: 'comment-3',
    postId: 'post-1',
    authorName: '김천문',
    authorEmail: 'astro@galaxy.com',
    authorImageUrl: '/images/avatars/default.png',
    content: '좋은 피드백 감사합니다! 다음 포스트에서는 유로파 클리퍼 미션과 탐사 계획에 대해 더 자세히 다뤄보겠습니다.',
    createdAt: new Date('2024-01-16T16:20:00Z'),
    status: 'approved',
    parentId: 'comment-1',
    likeCount: 15,
    dislikeCount: 0,
    reportCount: 0,
    isEdited: false,
    isPinned: true,
    isAuthor: true
  },
  {
    id: 'comment-4',
    postId: 'post-2',
    authorName: '오리온',
    authorEmail: 'orion@example.com',
    content: '베텔게우스의 밝기 변화에 대한 최근 관측 자료도 함께 보면 좋을 것 같아요. 2019년 급격한 어두워짐 현상이 초신성의 전조일까요?',
    createdAt: new Date('2024-01-12T09:15:00Z'),
    status: 'approved',
    likeCount: 7,
    dislikeCount: 0,
    reportCount: 0,
    isEdited: false,
    isPinned: false,
    isAuthor: false
  },
  {
    id: 'comment-5',
    postId: 'post-3',
    authorName: '은하연구자',
    authorEmail: 'galaxy@example.com',
    content: '암흑 물질의 존재를 증명하는 은하 회전 곡선에 대한 설명이 매우 명확했습니다. 이 주제에 관심이 많아져 더 찾아보게 됐어요!',
    createdAt: new Date('2024-01-09T15:20:00Z'),
    status: 'approved',
    likeCount: 11,
    dislikeCount: 0,
    reportCount: 0,
    isEdited: false,
    isPinned: false,
    isAuthor: false
  }
];

// ================================
// 유틸리티 함수
// ================================

/**
 * 포스트 ID로 포스트 조회
 */
export function getPostById(id: string): BlogPost | undefined {
  return mockPosts.find(post => post.id === id);
}

/**
 * 슬러그로 포스트 조회
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return mockPosts.find(post => post.slug === slug);
}

/**
 * 카테고리별 포스트 조회
 */
export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return mockPosts.filter(post => post.category.slug === categorySlug);
}

/**
 * 태그별 포스트 조회
 */
export function getPostsByTag(tag: string): BlogPost[] {
  return mockPosts.filter(post => post.tags.includes(tag));
}

/**
 * 추천 포스트 조회
 */
export function getFeaturedPosts(): BlogPost[] {
  return mockPosts.filter(post => post.featured && post.status === 'published');
}

/**
 * 최근 포스트 조회
 */
export function getRecentPosts(limit: number = 5): BlogPost[] {
  return mockPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, limit);
}

/**
 * 포스트 검색
 */
export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return mockPosts.filter(post =>
    post.status === 'published' && (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  );
}

/**
 * 인기 태그 조회
 */
export function getPopularTags(limit: number = 10): string[] {
  const tagCounts = new Map<string, number>();
  
  mockPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });
  
  return Array.from(tagCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag);
}

/**
 * 포스트별 댓글 조회
 */
export function getCommentsByPostId(postId: string): Comment[] {
  return mockComments.filter(comment => 
    comment.postId === postId && comment.status === 'approved'
  );
}

/**
 * 댓글을 트리 구조로 변환
 */
export function buildCommentTree(postId: string): Comment[] {
  const comments = getCommentsByPostId(postId);
  const commentMap = new Map<string, Comment>();
  const rootComments: Comment[] = [];

  // 모든 댓글을 Map에 저장하고 replies 배열 초기화
  comments.forEach(comment => {
    commentMap.set(comment.id, { ...comment, replies: [] });
  });

  // 댓글을 트리 구조로 구성
  commentMap.forEach(comment => {
    if (comment.parentId) {
      const parent = commentMap.get(comment.parentId);
      if (parent) {
        parent.replies = parent.replies || [];
        parent.replies.push(comment);
      }
    } else {
      rootComments.push(comment);
    }
  });

  // 날짜순으로 정렬
  rootComments.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  
  rootComments.forEach(comment => {
    if (comment.replies && comment.replies.length > 0) {
      comment.replies.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    }
  });

  return rootComments;
}

/**
 * 댓글 통계 조회
 */
export function getCommentStats(postId: string): CommentStats {
  const postComments = mockComments.filter(comment => comment.postId === postId);
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const weekStart = new Date(todayStart.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  const totalComments = postComments.length;
  const approvedComments = postComments.filter(c => c.status === 'approved').length;
  const pendingComments = postComments.filter(c => c.status === 'pending').length;
  const spamComments = postComments.filter(c => c.status === 'spam').length;
  const todayComments = postComments.filter(c => c.createdAt >= todayStart).length;
  const weekComments = postComments.filter(c => c.createdAt >= weekStart).length;
  
  const avgCommentLength = totalComments > 0 
    ? Math.round(postComments.reduce((sum, c) => sum + c.content.length, 0) / totalComments)
    : 0;
  
  const replyCount = postComments.filter(c => c.parentId).length;
  const replyRatio = totalComments > 0 ? Math.round((replyCount / totalComments) * 100) : 0;
  
  return {
    postId,
    totalComments,
    approvedComments,
    pendingComments,
    spamComments,
    todayComments,
    weekComments,
    avgCommentLength,
    replyRatio,
  };
}

// 삭제: getLatestPosts는 아래에서 더 개선된 버전으로 재구현됨

/**
 * 상대적 시간 표시 함수
 */
export function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return '방금 전';
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays}일 전`;
  }
  
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks}주 전`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths}개월 전`;
  }
  
  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears}년 전`;
}

/**
 * 카테고리별 포스트 개수와 함께 카테고리 조회
 */
export function getCategoriesWithCount(): Array<Category & { postCount: number }> {
  return mockCategories.map(category => ({
    ...category,
    postCount: mockPosts.filter(post => 
      post.category.id === category.id && post.status === 'published'
    ).length
  }));
}

/**
 * 페이지네이션된 포스트 조회
 */
export function getPaginatedPosts(
  page: number = 1,
  limit: number = 10,
  categorySlug?: string,
  sortBy: 'latest' | 'popular' | 'views' = 'latest'
): {
  data: BlogPost[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
} {
  let filteredPosts = mockPosts.filter(post => post.status === 'published');
  
  // 카테고리 필터링
  if (categorySlug && categorySlug !== 'all') {
    filteredPosts = filteredPosts.filter(post => post.category.slug === categorySlug);
  }
  
  // 정렬
  switch (sortBy) {
    case 'popular':
      filteredPosts.sort((a, b) => b.likeCount - a.likeCount);
      break;
    case 'views':
      filteredPosts.sort((a, b) => b.viewCount - a.viewCount);
      break;
    case 'latest':
    default:
      filteredPosts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
      break;
  }
  
  const totalItems = filteredPosts.length;
  const totalPages = Math.ceil(totalItems / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const data = filteredPosts.slice(startIndex, endIndex);
  
  return {
    data,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  };
}

/**
 * 페이지네이션 번호 생성 함수
 */
export function getPageNumbers(currentPage: number, totalPages: number): number[] {
  const pages: number[] = [];
  const maxVisiblePages = 5;
  
  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    const halfVisible = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
  }
  
  return pages;
}

/**
 * 관련 포스트 가져오기
 * @param currentPost 현재 포스트
 * @param limit 가져올 포스트 개수
 * @returns 관련도 순으로 정렬된 포스트 배열
 */
export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  // 현재 포스트를 제외한 발행된 포스트만 필터링
  const otherPosts = mockPosts.filter(post => 
    post.id !== currentPost.id && 
    post.status === 'published'
  );

  // 각 포스트의 관련도 점수 계산
  const scoredPosts = otherPosts.map(post => {
    let score = 0;

    // 1. 같은 카테고리 (+10점)
    if (post.category.id === currentPost.category.id) {
      score += 10;
    }

    // 2. 공통 태그 (태그당 +2점)
    const commonTags = post.tags.filter(tag => 
      currentPost.tags.includes(tag)
    );
    score += commonTags.length * 2;

    // 3. 최신 포스트 가산점 (최대 5점)
    const daysDiff = Math.floor(
      (new Date().getTime() - post.publishedAt.getTime()) / (1000 * 60 * 60 * 24)
    );
    score += Math.max(0, 5 - Math.floor(daysDiff / 30)); // 한 달당 1점 감소

    return { post, score };
  });

  // 점수 기준 내림차순 정렬 후 상위 N개 반환
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

/**
 * 최신 포스트 가져오기
 * @param limit 가져올 포스트 개수
 * @param excludeIds 제외할 포스트 ID 목록
 * @returns 최신 순으로 정렬된 포스트 배열
 */
export function getLatestPosts(limit: number = 3, excludeIds: string[] = []): BlogPost[] {
  return mockPosts
    .filter(post => 
      post.status === 'published' && 
      !excludeIds.includes(post.id)
    )
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, limit);
}