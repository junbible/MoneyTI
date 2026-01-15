'use client';

import { useQueries } from '@tanstack/react-query';
import { MBTI, MBTI_MAPPING } from '@/lib/mbti';
import { Text, Spacing, Button } from '@/app/components/tds-custom';
import { useParams, useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

export default function ResultPage() {
    const params = useParams();
    const router = useRouter();

    // Safe MBTI parsing
    const mbti = (typeof params.mbti === 'string' && MBTI_MAPPING[params.mbti as MBTI])
        ? (params.mbti as MBTI)
        : 'INTJ';

    const persona = MBTI_MAPPING[mbti];
    const recommendations = persona.recommendations;

    // Type for API Response (Partial)
    interface ETFData {
        itmsNm: string;
        clpr: string;
        fltRt: string;
        response?: {
            body?: {
                items?: {
                    item?: ETFData[];
                }
            }
        };
        error?: string;
    }

    // Fetch Multiple ETF Prices
    const queries = useQueries({
        queries: recommendations.map(rec => ({
            queryKey: ['etfPrice', rec.ticker],
            queryFn: async (): Promise<ETFData> => {
                const res = await fetch(`/api/etf/price?ticker=${rec.ticker}`);
                return res.json();
            },
            staleTime: 1000 * 60, // 1 min cache
        }))
    });

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="flex flex-col items-center p-6 text-center">
                <Spacing size={40} />

                <Text typography="t5" color="gray500">
                    당신의 투자 성향은...
                </Text>
                <Spacing size={8} />
                <Text typography="h2" color="gray900" fontWeight={700}>
                    {persona.name}
                </Text>

                <Spacing size={24} />

                <div className="bg-gray-100 p-6 rounded-2xl w-full">
                    <Text typography="t5" color="gray700" style={{ wordBreak: 'keep-all' }}>
                        {persona.desc}
                    </Text>
                </div>

                <Spacing size={40} />

                <Text typography="h4" color="gray900" fontWeight={700} style={{ alignSelf: 'flex-start' }}>
                    추천 ETF Best 3
                </Text>

                <Spacing size={16} />

                {/* ETF Card List */}
                <div className="flex flex-col gap-4 w-full">
                    {recommendations.map((rec, index) => {
                        const { data, isLoading } = queries[index];
                        // Narrowing the type safely
                        const responseBody = data?.response?.body?.items?.item;
                        const etfItem = Array.isArray(responseBody) ? responseBody[0] : (responseBody as unknown as ETFData);

                        // Use either the item from XML structure or the flat JSON mock structure
                        const displayInfo = etfItem || data;

                        // Simplified check for validity
                        const isValid = displayInfo && !displayInfo.error && displayInfo.itmsNm;

                        return (
                            <div key={rec.ticker} className="w-full bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="text-left">
                                        <Text typography="t5" fontWeight={700} color="gray900">
                                            {isValid ? displayInfo.itmsNm : `ETF (${rec.ticker})`}
                                        </Text>
                                        <Text typography="t6" color="gray500">
                                            {rec.ticker}
                                        </Text>
                                    </div>
                                    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-bold">
                                        TOP {index + 1}
                                    </span>
                                </div>

                                <Spacing size={8} />

                                <div className="flex items-end gap-2 justify-end">
                                    {isLoading ? (
                                        <div className="animate-pulse h-8 w-24 bg-gray-100 rounded" />
                                    ) : (
                                        <>
                                            <Text typography="h3" fontWeight={700} color="gray900">
                                                {isValid ? Number(displayInfo.clpr).toLocaleString() : '-'}원
                                            </Text>
                                            {isValid && (
                                                <Text
                                                    typography="t5"
                                                    color={Number(displayInfo.fltRt) > 0 ? 'red500' : 'blue500'}
                                                    fontWeight={600}
                                                >
                                                    {Number(displayInfo.fltRt) > 0 ? '+' : ''}{displayInfo.fltRt}%
                                                </Text>
                                            )}
                                        </>
                                    )}
                                </div>
                                <Spacing size={12} />
                                <div className="w-full h-px bg-gray-100" />
                                <Spacing size={12} />
                                <Text typography="t6" color="gray600" style={{ textAlign: 'left', wordBreak: 'keep-all' }}>
                                    {rec.reason}
                                </Text>
                            </div>
                        );
                    })}
                </div>

                <Spacing size={60} />

                <div className="w-full">
                    <Button style={{ width: '100%' }} onClick={() => router.push('/')}>
                        다시 테스트하기
                    </Button>
                </div>
            </div>
        </div>
    );
}
