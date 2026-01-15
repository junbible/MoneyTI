# MVP Features (Minimum Viable Product)

## 1. User Interface (Frontend)

### Landing Page
- Catchy Hero section with "Find your Investment Personality" CTA.
- Brief explanation of the service.
- "Start Test" button.

### MBTI Input / Assessment
- **Option A (Short)**: User selects their already known MBTI type (Drop-down).
- **Option B (Long)**: A simplified 12-question quiz to determine logic type if unknown (optional for MVP, sticking to Option A is faster).
    - *Decision*: For MVP, we will provide **Option A** (Select existing) and a **Mini-Quiz** (4 simple questions, one for each dimension).

### Loading / Analysis Screen
- Animation to build anticipation while "calculating" the portfolio.
- Display fun facts about the user's selected type.

### Result Page
- **The "Character"**: A fun name for their investor type (e.g., "The Steady Gardener" for ISFJ).
- **Recommended ETFs**: 
    - Primary Recommendation (Ticker, Name, Description).
    - Secondary/Alternative Recommendation.
- **Investment Strategy Description**: Why this fits them.
- **Share Button**: Generate a link or image to share on social media.

## 2. Backend / Logic

### Recommendation Engine
- A static mapping file (JSON) or simple database connecting 16 MBTI types to specific ETF tickers.
- Logic to handle the "Mini-Quiz" inputs if implemented.

### Data Source
- Hardcoded list of ~20-30 popular ETFs (SPY, QQQ, SCHD, ARKK, etc.) with metadata (Risk level, Sector, Description).
- *No real-time stock price API required for MVP (static data is sufficient).*

## 3. tech Requirements

### Frontend
- **Next.js**: For SSR/SSG and easy routing.
- **TailwindCSS**: For rapid UI development.

### Deployment
- **Vercel**: Zero-config deployment.
