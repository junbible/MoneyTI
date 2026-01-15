
export type MBTI = 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP' | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP' | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ' | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export interface Persona {
    mbti: MBTI;
    name: string;
    desc: string;
    recommendations: {
        ticker: string;
        reason: string;
    }[];
}

export const MBTI_MAPPING: Record<MBTI, Persona> = {
    // 1. 분석가형 (NT) - 미래 지향, 성장, 기술, 전략
    'INTJ': {
        mbti: 'INTJ',
        name: "전략적인 설계자",
        desc: "철저한 분석과 장기적인 안목으로 미래의 가치에 투자합니다.",
        recommendations: [
            { ticker: '379800', reason: "KODEX 미국테크TOP10: 최고의 기술 기업에 집중 투자" },
            { ticker: '133690', reason: "TIGER 미국나스닥100: 글로벌 혁신 기업의 성장성" },
            { ticker: '091160', reason: "KODEX 반도체: 4차 산업혁명의 핵심 소재" }
        ]
    },
    'INTP': {
        mbti: 'INTP',
        name: "논리적인 사색가",
        desc: "객관적인 데이터와 혁신적인 아이디어를 가진 기업을 선호합니다.",
        recommendations: [
            { ticker: '379800', reason: "KODEX 미국테크TOP10: 논리적으로 검증된 빅테크" },
            { ticker: '102110', reason: "TIGER 200: 시장 수익률을 추종하는 합리적 선택" },
            { ticker: '360750', reason: "TIGER 미국S&P500: 전 세계 1등 시장에 투자" }
        ]
    },
    'ENTJ': {
        mbti: 'ENTJ',
        name: "대담한 통솔자",
        desc: "효율적이고 공격적인 자산 배분으로 시장을 주도합니다.",
        recommendations: [
            { ticker: '122630', reason: "KODEX 레버리지: 상승장에서 극대화된 수익 추구" },
            { ticker: '379800', reason: "KODEX 미국테크TOP10: 시장을 이끄는 리더 기업" },
            { ticker: '233740', reason: "KODEX 코스닥150레버리지: 성장주의 폭발력" }
        ]
    },
    'ENTP': {
        mbti: 'ENTP',
        name: "변론가형",
        desc: "새로운 기회와 높은 변동성에서 수익을 창출하는 모험가입니다.",
        recommendations: [
            { ticker: '233740', reason: "KODEX 코스닥150레버리지: 높은 변동성은 곧 기회" },
            { ticker: '229200', reason: "KODEX 코스닥150: 한국의 혁신 성장 기업들" },
            { ticker: '133690', reason: "TIGER 미국나스닥100: 멈추지 않는 혁신" }
        ]
    },

    // 2. 외교관형 (NF) - 가치, 의미, 사람, 이상
    'INFJ': {
        mbti: 'INFJ',
        name: "선의의 옹호자",
        desc: "기업의 가치와 사회적 책임을 중요하게 생각하는 신중한 투자자입니다.",
        recommendations: [
            { ticker: '305540', reason: "TIGER 2차전지테마: 친환경 에너지의 미래" },
            { ticker: '069500', reason: "KODEX 200: 한국 경제를 지탱하는 대표 기업" },
            { ticker: '360750', reason: "TIGER 미국S&P500: 다양성과 안정성의 조화" }
        ]
    },
    'INFP': {
        mbti: 'INFP',
        name: "열정적인 중재자",
        desc: "자신의 신념과 일치하는 기업에 장기적으로 투자합니다.",
        recommendations: [
            { ticker: '102780', reason: "KODEX 삼성그룹: 한국의 대표 브랜드 가치" },
            { ticker: '305540', reason: "TIGER 2차전지테마: 지속 가능한 미래를 위한 투자" },
            { ticker: '379800', reason: "KODEX 미국테크TOP10: 세상을 바꾸는 혁신" }
        ]
    },
    'ENFJ': {
        mbti: 'ENFJ',
        name: "정의로운 사회운동가",
        desc: "사회의 성장과 구성원의 행복을 모두 고려하는 투자를 지향합니다.",
        recommendations: [
            { ticker: '069500', reason: "KODEX 200: 모두가 함께 성장하는 시장" },
            { ticker: '360750', reason: "TIGER 미국S&P500: 글로벌 스탠다드" },
            { ticker: '139260', reason: "KODEX 고배당: 이익을 주주와 나누는 기쁨" }
        ]
    },
    'ENFP': {
        mbti: 'ENFP',
        name: "재기발랄한 활동가",
        desc: "다양한 분야에 호기심이 많고 포트폴리오를 다채롭게 구성합니다.",
        recommendations: [
            { ticker: '233740', reason: "KODEX 코스닥150레버리지: 지루할 틈 없는 시장" },
            { ticker: '379800', reason: "KODEX 미국테크TOP10: 흥미진진한 기술의 발전" },
            { ticker: '251340', reason: "KODEX 코스닥150선물인버스: 하락장에서도 기회를" }
        ]
    },

    // 3. 관리자형 (SJ) - 규범, 질서, 안정, 현실
    'ISTJ': {
        mbti: 'ISTJ',
        name: "청렴결백한 논리주의자",
        desc: "검증된 데이터와 안정적인 우량주 위주의 보수적인 투자.",
        recommendations: [
            { ticker: '069500', reason: "KODEX 200: 가장 신뢰할 수 있는 시장 지표" },
            { ticker: '360750', reason: "TIGER 미국S&P500: 역사적으로 검증된 우상향" },
            { ticker: '278530', reason: "KODEX 200TR: 배당 재투자로 복리 효과" }
        ]
    },
    'ISFJ': {
        mbti: 'ISFJ',
        name: "용감한 수호자",
        desc: "자산을 안전하게 보호하고 꾸준한 수익을 추구합니다.",
        recommendations: [
            { ticker: '153130', reason: "KODEX 단기채권: 절대 잃지 않는 안전함" },
            { ticker: '069500', reason: "KODEX 200: 마음 편한 인덱스 투자" },
            { ticker: '139260', reason: "KODEX 고배당: 따박따박 들어오는 현금 흐름" }
        ]
    },
    'ESTJ': {
        mbti: 'ESTJ',
        name: "엄격한 관리자",
        desc: "규칙과 원칙을 준수하며 체계적으로 자산을 불립니다.",
        recommendations: [
            { ticker: '069500', reason: "KODEX 200: 시장의 표준" },
            { ticker: '102110', reason: "TIGER 200: 효율적인 수수료와 관리" },
            { ticker: '278530', reason: "KODEX 200TR: 세금과 비용까지 고려한 선택" }
        ]
    },
    'ESFJ': {
        mbti: 'ESFJ',
        name: "사교적인 외교관",
        desc: "안정적인 흐름과 배당 수익을 통해 주변을 챙기는 여유.",
        recommendations: [
            { ticker: '139260', reason: "KODEX 고배당: 가족과 함께 누리는 배당금" },
            { ticker: '069500', reason: "KODEX 200: 누구나 아는 대표 기업" },
            { ticker: '360750', reason: "TIGER 미국S&P500: 은퇴 자금을 위한 정석" }
        ]
    },

    // 4. 탐험가형 (SP) - 감각, 적응, 체험, 순발력
    'ISTP': {
        mbti: 'ISTP',
        name: "만능 재주꾼",
        desc: "기술적 분석과 타이밍 포착에 능하며 효율을 중시합니다.",
        recommendations: [
            { ticker: '233740', reason: "KODEX 코스닥150레버리지: 타이밍의 예술" },
            { ticker: '122630', reason: "KODEX 레버리지: 단기 변동성 활용" },
            { ticker: '091160', reason: "KODEX 반도체: 산업 사이클을 읽는 눈" }
        ]
    },
    'ISFP': {
        mbti: 'ISFP',
        name: "호기심 많은 예술가",
        desc: "트렌디하고 심미적인 가치가 있는 브랜드에 투자합니다.",
        recommendations: [
            { ticker: '379800', reason: "KODEX 미국테크TOP10: 세련된 글로벌 브랜드" },
            { ticker: '133690', reason: "TIGER 미국나스닥100: 힙한 기술 기업들" },
            { ticker: '102780', reason: "KODEX 삼성그룹: 한국 최고의 네임밸류" }
        ]
    },
    'ESTP': {
        mbti: 'ESTP',
        name: "모험을 즐기는 사업가",
        desc: "빠른 판단력과 과감한 행동력으로 기회를 놓치지 않습니다.",
        recommendations: [
            { ticker: '233740', reason: "KODEX 코스닥150레버리지: 승부사의 선택" },
            { ticker: '122630', reason: "KODEX 레버리지: 확실한 구간에서 베팅" },
            { ticker: '252670', reason: "KODEX 200선물인버스2X: 하락장도 수익 기회로" }
        ]
    },
    'ESFP': {
        mbti: 'ESFP',
        name: "자유로운 영혼의 연예인",
        desc: "즐겁고 유행에 민감하며, 대중적인 인기가 있는 곳에 투자합니다.",
        recommendations: [
            { ticker: '379800', reason: "KODEX 미국테크TOP10: 요즘 가장 핫한 주식" },
            { ticker: '229200', reason: "KODEX 코스닥150: 다이내믹한 한국 시장" },
            { ticker: '305540', reason: "TIGER 2차전지테마: 뉴스에 매일 나오는 그 종목" }
        ]
    }
};
