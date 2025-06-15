import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Providers } from "./providers";

// 폰트 설정 - Inter와 Noto Sans KR 조합
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

// SEO 메타데이터 설정
export const metadata: Metadata = {
  title: {
    default: "Betelgeuse - 천문학과 우주론 블로그",
    template: "%s | Betelgeuse",
  },
  description: "별과 천문학적 지식, 우주론에 관한 내용을 공유하는 블로그입니다. 천체 관측부터 우주 탐사까지, 우주의 신비로운 세계를 함께 탐구합니다.",
  keywords: ["천문학", "우주론", "별자리", "천체 관측", "우주 탐사", "천문학 블로그", "베텔게우스", "별", "우주"],
  authors: [{ name: "Betelgeuse" }],
  creator: "Betelgeuse",
  publisher: "Betelgeuse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  
  // Open Graph 설정
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    title: "Betelgeuse - 천문학과 우주론 블로그",
    description: "별과 천문학적 지식, 우주론에 관한 내용을 공유하는 블로그입니다. 천체 관측부터 우주 탐사까지, 우주의 신비로운 세계를 함께 탐구합니다.",
    siteName: "Betelgeuse",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Betelgeuse",
      },
    ],
  },
  
  // Twitter Card 설정
  twitter: {
    card: "summary_large_image",
    title: "Betelgeuse - 천문학과 우주론 블로그",
    description: "별과 천문학적 지식, 우주론에 관한 내용을 공유하는 블로그입니다. 천체 관측부터 우주 탐사까지, 우주의 신비로운 세계를 함께 탐구합니다.",
    images: ["/images/og-image.jpg"],
    creator: "@betelgeuse",
  },
  
  // 기타 메타데이터
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Favicon 설정
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  
  // Manifest 설정
  manifest: "/site.webmanifest",
};

// 뷰포트 설정
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

/**
 * 루트 레이아웃 컴포넌트
 * 전역 레이아웃 및 설정 제공
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKR.variable}`}>
      <head>
        {/* 구조화된 데이터 - 웹사이트 정보 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Betelgeuse",
              "description": "별과 천문학적 지식, 우주론에 관한 내용을 공유하는 블로그",
              "url": process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              "author": {
                "@type": "Organization",
                "name": "Betelgeuse"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Betelgeuse",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/images/logo.png`
                }
              },
              "inLanguage": "ko-KR"
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          {/* 전체 레이아웃 구조 */}
          <div className="relative flex min-h-screen flex-col">
            {/* 헤더 */}
            <Header />
            
            {/* 메인 콘텐츠 영역 */}
            <main className="flex-1">
              <div className="container mx-auto max-w-7xl px-4">
                {children}
              </div>
            </main>
            
            {/* 푸터 */}
            <Footer />
          </div>
          
          {/* 접근성을 위한 스킵 링크 */}
          <div className="sr-only">
            <a 
              href="#main-content" 
              className="absolute left-0 top-0 z-50 -translate-y-full transform bg-primary px-4 py-2 text-primary-foreground transition-transform focus:translate-y-0"
            >
              메인 콘텐츠로 건너뛰기
            </a>
          </div>
        </Providers>
      </body>
    </html>
  );
}
