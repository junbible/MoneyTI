'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { QUESTIONS, Question } from '@/lib/questions';
import { Button, Text, Spacing } from '@/app/components/tds-custom';
import { useMBTIStore } from '@/lib/store';
import { MBTI } from '@/lib/mbti';

export default function TestPage() {
    const router = useRouter();
    const setStoreMBTI = useMBTIStore((state) => state.setMBTI);

    const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
    const [currentStep, setCurrentStep] = useState(0);
    // Using Record to count frequencies for each dimension value (E, I, S, N, etc.)
    const [scores, setScores] = useState<Record<string, number>>({
        E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    });

    // Shuffle questions on mount
    useEffect(() => {
        // Basic Fisher-Yates shuffle
        const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
        setShuffledQuestions(shuffled);
    }, []);

    const handleAnswer = (value: string) => {
        // 1. Update Score
        setScores(prev => ({
            ...prev,
            [value]: prev[value] + 1
        }));

        // 2. Next Step or Finish
        if (currentStep < shuffledQuestions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            finishTest(value); // Pass current value to include in final calculation
        }
    };

    const finishTest = (lastValue: string) => {
        // Need to include the very last answer in the logic
        const finalScores = { ...scores, [lastValue]: scores[lastValue] + 1 };

        // Calculate MBTI based on higher score
        const mbti = [
            finalScores.E >= finalScores.I ? 'E' : 'I',
            finalScores.S >= finalScores.N ? 'S' : 'N',
            finalScores.T >= finalScores.F ? 'T' : 'F',
            finalScores.J >= finalScores.P ? 'J' : 'P'
        ].join('') as MBTI;

        setStoreMBTI(mbti);
        router.push(`/result/${mbti}`);
    };

    if (shuffledQuestions.length === 0) return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <Text>로딩중...</Text>
        </div>
    );

    const question = shuffledQuestions[currentStep];
    const progress = ((currentStep + 1) / shuffledQuestions.length) * 100;

    return (
        <div className="flex flex-col min-h-screen bg-white px-6 pt-12">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-100 rounded-full mb-8">
                <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <Text typography="t6" color="gray500">
                Q{currentStep + 1}.
            </Text>
            <Spacing size={8} />

            <Text typography="h3" fontWeight={700} color="gray900">
                {question.text}
            </Text>

            <div className="flex-1" />

            <div className="flex flex-col gap-3 pb-12">
                {question.options.map((option, index) => (
                    <Button
                        key={index}
                        variant="secondary"
                        style={{
                            width: '100%',
                            justifyContent: 'flex-start',
                            padding: '20px',
                            textAlign: 'left',
                            height: 'auto'
                        }}
                        onClick={() => handleAnswer(option.value)}
                    >
                        <Text typography="t5" fontWeight={500} color="gray800">
                            {option.text}
                        </Text>
                    </Button>
                ))}
            </div>
        </div>
    );
}
