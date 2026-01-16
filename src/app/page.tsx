'use client';

import { Button, Text, Spacing } from '@/app/components/tds-custom';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-white">
      <div className="relative w-48 h-48 mb-6 animate-fade-in-up">
        <Image
          src="/main-hero.png"
          alt="MoneyTI Hero"
          fill
          className="object-contain"
          priority
        />
      </div>
      <Text typography="t1" fontWeight={700} color="gray900">
        MoneyTI
      </Text>
      <Spacing size={12} />
      <Text typography="t5" color="gray600">
        성격으로 찾는 나만의 투자 파트너
      </Text>

      <Spacing size={60} />

      <div className="w-full max-w-sm">
        <Button
          size="large"
          style={{ width: '100%' }}
          onClick={() => window.location.href = '/test'}
        >
          내 성격분석 시작하기
        </Button>
      </div>
    </div>
  );
}
