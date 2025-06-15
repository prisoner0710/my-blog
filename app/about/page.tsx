import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개 | 오리온의 손',
  description: '별과 천문학적 지식, 우주론에 관한 내용을 공유하는 블로그입니다.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">오리온의 손</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl mb-6">
            안녕하세요, '오리온의 손'에 오신 것을 환영합니다.
          </p>
          
          <p className="mb-6">
            이곳은 별과 천문학적 지식, 우주론에 관한 내용을 공유하는 블로그입니다. 
            천체 관측부터 우주 탐사까지, 우주의 신비로운 세계를 함께 탐구합니다.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">주요 콘텐츠</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>천체 관측 가이드와 팁</li>
            <li>별자리와 천문학 이야기</li>
            <li>우주 탐사와 천문학 뉴스</li>
            <li>천문학 이론과 우주론</li>
            <li>천문 사진과 관측 후기</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">블로그의 목표</h2>
          <p className="mb-6">
            '오리온의 손'은 복잡한 천문학적 개념을 쉽게 설명하고, 
            우주의 신비로움을 더 많은 사람들과 공유하는 것을 목표로 합니다. 
            천문학에 관심 있는 분들이 함께 성장하고 배울 수 있는 공간이 되고자 합니다.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">함께하기</h2>
          <p className="mb-6">
            천문학과 우주에 대한 여러분의 생각과 경험을 공유해주세요. 
            함께 우주의 신비를 탐구하며, 더 넓은 우주에 대한 이해를 넓혀가요.
          </p>
        </div>
      </div>
    </div>
  );
} 