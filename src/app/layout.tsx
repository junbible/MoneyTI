import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TDSProvider from "./providers";
import QueryProvider from "./query-provider";
import { ClientLayout } from "./components/client-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'MoneyTI - 내 손안의 금융 성격 테스트',
  description: 'AI가 분석해주는 나만의 투자 성향과 ETF 추천',
  icons: {
    icon: '/icon.png', // Next.js App Router automatically uses src/app/icon.png, but explicit ref is safe
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TDSProvider>
          <QueryProvider>
            <ClientLayout>
              {children}
            </ClientLayout>
          </QueryProvider>
        </TDSProvider>
      </body>
    </html>
  );
}
