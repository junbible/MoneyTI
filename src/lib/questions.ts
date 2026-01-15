export interface Question {
    id: number;
    text: string;
    type: 'EI' | 'SN' | 'TF' | 'JP';
    options: [
        { text: string; value: string; },
        { text: string; value: string; }
    ];
}

export const QUESTIONS: Question[] = [
    // E vs I
    {
        id: 1,
        text: "투자 정보를 얻을 때 당신의 스타일은?",
        type: 'EI',
        options: [
            { text: "친구, 오픈채팅방 등 사람들과 이야기하며 얻는다.", value: 'E' },
            { text: "혼자 뉴스를 읽고 리포트를 파고든다.", value: 'I' }
        ]
    },
    {
        id: 2,
        text: "투자에 성공했을 때 나는?",
        type: 'EI',
        options: [
            { text: "주변에 자랑하고 한턱 쏘며 기쁨을 나눈다.", value: 'E' },
            { text: "혼자 조용히 계좌를 보며 뿌듯해한다.", value: 'I' }
        ]
    },
    {
        id: 3,
        text: "투자 공부를 할 때 선호하는 방식은?",
        type: 'EI',
        options: [
            { text: "투자 설명회나 스터디 모임에 나간다.", value: 'E' },
            { text: "집에서 책이나 온라인 강의로 혼자 공부한다.", value: 'I' }
        ]
    },

    // S vs N
    {
        id: 4,
        text: "투자할 기업을 고를 때 가장 중요한 것은?",
        type: 'SN',
        options: [
            { text: "재무제표, 실적, 배당 등 눈에 보이는 숫자.", value: 'S' },
            { text: "미래 성장성과 세상을 바꿀 비전.", value: 'N' }
        ]
    },
    {
        id: 5,
        text: "차트나 데이터를 볼 때 당신은?",
        type: 'SN',
        options: [
            { text: "과거의 기록과 현재의 위치를 꼼꼼히 확인한다.", value: 'S' },
            { text: "앞으로 그려질 큰 흐름과 트렌드를 상상한다.", value: 'N' }
        ]
    },
    {
        id: 6,
        text: "선호하는 투자 대상은?",
        type: 'SN',
        options: [
            { text: "검증된 우량주, 금, 부동산 같은 실물 자산.", value: 'S' },
            { text: "아직 빛을 못 봤지만 대박 가능성 있는 혁신 기술주.", value: 'N' }
        ]
    },

    // T vs F
    {
        id: 7,
        text: "손절매를 해야 하는 상황이 왔다. 당신은?",
        type: 'TF',
        options: [
            { text: "분석 결과 가망이 없으면 원칙대로 매도한다.", value: 'T' },
            { text: "좋아하는 기업이라 팔기 미안하고 마음이 아프다.", value: 'F' }
        ]
    },
    {
        id: 8,
        text: "친구가 투자 손실로 우울해한다. 당신의 반응은?",
        type: 'TF',
        options: [
            { text: "종목이 뭔데? 차트 봐줄게. (해결책 제시)", value: 'T' },
            { text: "저런.. 많이 속상했겠다. 술 한잔 할까? (공감)", value: 'F' }
        ]
    },
    {
        id: 9,
        text: "투자 철학에 있어 더 중요한 것은?",
        type: 'TF',
        options: [
            { text: "오직 수익률과 효율성.", value: 'T' },
            { text: "기업의 가치와 사회적 책임(ESG).", value: 'F' }
        ]
    },

    // J vs P
    {
        id: 10,
        text: "나의 자산 관리 스타일은?",
        type: 'JP',
        options: [
            { text: "정해진 날짜에 정해진 비중대로 리밸런싱.", value: 'J' },
            { text: "시장 상황을 보며 그때그때 유동적으로 대응.", value: 'P' }
        ]
    },
    {
        id: 11,
        text: "목표 수익률에 도달했을 때?",
        type: 'JP',
        options: [
            { text: "미리 정한 원칙대로 매도하여 수익을 확정한다.", value: 'J' },
            { text: "더 오를 것 같으면 목표가를 수정하거나 홀딩한다.", value: 'P' }
        ]
    },
    {
        id: 12,
        text: "해외여행을 갈 때 환전은?",
        type: 'JP',
        options: [
            { text: "여행 예산을 꼼꼼히 짜서 미리 환전해둔다.", value: 'J' },
            { text: "대충 챙겨가고 부족하면 현지에서 해결한다.", value: 'P' }
        ]
    }
];
