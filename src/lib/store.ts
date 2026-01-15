import { create } from 'zustand';
import { MBTI } from './mbti';

interface MBTIState {
    mbti: MBTI | null;
    setMBTI: (mbti: MBTI) => void;
}

export const useMBTIStore = create<MBTIState>((set) => ({
    mbti: null,
    setMBTI: (mbti) => set({ mbti }),
}));
