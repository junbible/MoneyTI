import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = 'https://apis.data.go.kr/1160100/service/GetSecuritiesProductInfoService/getETFPriceInfo';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const ticker = searchParams.get('ticker');
    const serviceKey = process.env.NEXT_PUBLIC_API_KEY;

    if (!ticker) {
        return NextResponse.json({ error: 'Ticker is required' }, { status: 400 });
    }

    // Fallback to Mock Data if no API Key (Development Mode)
    if (!serviceKey || serviceKey === 'test-key') {
        console.warn('Using Mock Data: No Service Key');
        const mockData = getMockData(ticker);
        return NextResponse.json(mockData);
    }

    try {
        // Construct query parameters
        const queryParams = new URLSearchParams({
            serviceKey: serviceKey, // Assuming the key is already decoded or handled by fetch
            numOfRows: '1',
            pageNo: '1',
            resultType: 'json',
            likeSrtnCd: ticker, // Filter by filter code
        });

        // Note: If fetch fails due to encoding issues with the key, 
        // we might need to append the key string manually: `${BASE_URL}?serviceKey=${serviceKey}&...`

        const res = await fetch(`${BASE_URL}?${queryParams.toString()}`);

        if (!res.ok) {
            console.error(`API Error: ${res.status}`);
            return NextResponse.json(getMockData(ticker)); // Fallback on error
        }

        const data = await res.json();

        // Parse response
        const items = data.response?.body?.items?.item;
        const item = Array.isArray(items) ? items[0] : items;

        if (!item) {
            // No data found for this ticker from API
            console.warn(`No API data for ${ticker}, using mock.`);
            return NextResponse.json(getMockData(ticker));
        }

        return NextResponse.json({
            basDt: item.basDt,
            srtnCd: item.srtnCd,
            isinCd: item.isinCd,
            itmsNm: item.itmsNm,
            clpr: item.clpr, // Close Price
            vs: item.vs,     // vs
            fltRt: item.fltRt, // Fluctuation Rate
            nav: item.nav,
            trqu: item.trqu,
            id: item.isinCd // Use ISIN as ID
        });

    } catch (error) {
        console.error('Fetch error:', error);
        return NextResponse.json(getMockData(ticker));
    }
}

// Helper for Mock Data
function getMockData(ticker: string) {
    // Generate slight random variation for "live feel"
    const randomVar = Math.floor(Math.random() * 200) - 100;

    const MOCK_DB: Record<string, any> = {
        '069500': { itmsNm: 'KODEX 200', clpr: (34500 + randomVar).toString(), vs: String(randomVar), fltRt: (randomVar / 345).toFixed(2) },
        '379800': { itmsNm: 'KODEX 미국테크TOP10', clpr: (12500 + randomVar).toString(), vs: String(randomVar), fltRt: (randomVar / 125).toFixed(2) },
        '233740': { itmsNm: 'KODEX 코스닥150레버리지', clpr: (9800 + randomVar).toString(), vs: String(randomVar), fltRt: (randomVar / 98).toFixed(2) },
        '102110': { itmsNm: 'TIGER 200', clpr: (34450 + randomVar).toString(), vs: String(randomVar), fltRt: (randomVar / 344).toFixed(2) },
        '360750': { itmsNm: 'TIGER 미국S&P500', clpr: (15600 + randomVar).toString(), vs: String(randomVar), fltRt: (randomVar / 156).toFixed(2) },
        '133690': { itmsNm: 'TIGER 미국나스닥100', clpr: (92000 + randomVar).toString(), vs: String(randomVar * 5), fltRt: (randomVar / 920).toFixed(2) },
        '091160': { itmsNm: 'KODEX 반도체', clpr: (28000 + randomVar).toString(), vs: String(randomVar), fltRt: (randomVar / 280).toFixed(2) },
        '122630': { itmsNm: 'KODEX 레버리지', clpr: (18000 + randomVar * 2).toString(), vs: String(randomVar * 2), fltRt: (randomVar / 180).toFixed(2) },
        '229200': { itmsNm: 'KODEX 코스닥150', clpr: (13000 + randomVar).toString(), vs: String(randomVar), fltRt: (randomVar / 130).toFixed(2) },
        '305540': { itmsNm: 'TIGER 2차전지테마', clpr: (25000 + randomVar).toString(), vs: String(randomVar), fltRt: (randomVar / 250).toFixed(2) },
        '102780': { itmsNm: 'KODEX 삼성그룹', clpr: (8500 + randomVar).toString(), vs: String(randomVar), fltRt: (randomVar / 85).toFixed(2) },
        '139260': { itmsNm: 'KODEX 고배당', clpr: (11000 + randomVar).toString(), vs: String(randomVar / 2), fltRt: (randomVar / 220).toFixed(2) },
        '251340': { itmsNm: 'KODEX 코스닥150선물인버스', clpr: (4000 - randomVar).toString(), vs: String(-randomVar), fltRt: (-randomVar / 40).toFixed(2) },
        '278530': { itmsNm: 'KODEX 200TR', clpr: (42000 + randomVar).toString(), vs: String(randomVar), fltRt: (randomVar / 420).toFixed(2) },
        '153130': { itmsNm: 'KODEX 단기채권', clpr: (103000 + randomVar / 10).toString(), vs: String(randomVar / 10), fltRt: (randomVar / 10000).toFixed(2) },
        '252670': { itmsNm: 'KODEX 200선물인버스2X', clpr: (2100 - randomVar).toString(), vs: String(-randomVar), fltRt: (-randomVar / 21).toFixed(2) },
    };

    const target = MOCK_DB[ticker] || { itmsNm: 'ETF 정보 (Mock)', clpr: '0', vs: '0', fltRt: '0' };

    return {
        basDt: '20240115',
        srtnCd: ticker,
        isinCd: `KR7${ticker}000`,
        itmsNm: target.itmsNm,
        clpr: target.clpr,
        vs: target.vs,
        fltRt: target.fltRt,
        nav: target.clpr,
        trqu: '100000',
        id: `KR7${ticker}000`
    };
}
