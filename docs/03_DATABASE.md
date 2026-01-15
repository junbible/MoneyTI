# Data Structure & Mapping

Since this is a frontend-heavy application using Open APIs, we don't need a traditional relational database (SQL). Instead, we will use **Static JSON Mapping** and **Client-side State**.

## 1. Static Data (JSON)

### `mbti_mapping.json`
Maps 16 MBTI types to investment personas and recommended ticker symbols.

```json
{
  "INTJ": {
    "persona": "The Strategic Mastermind",
    "description": "Calculated, long-term planner. Prefers logic and efficiency.",
    "recommendations": [
      { "ticker": "QQQ", "reason": "Tech growth aligns with forward-thinking." },
      { "ticker": "SOXX", "reason": "Semiconductors for structural logic." }
    ]
  },
  "ESFP": {
    "persona": "The Spontaneous Improviser",
    "description": "Bold, practical, and risk-tolerant. Loves trends.",
    "recommendations": [
      { "ticker": "ARKK", "reason": "High volatility and innovation." },
      { "ticker": "TQQQ", "reason": "Leveraged returns for excitement." }
    ]
  }
}
```

## 2. Dynamic Data (API Store)

Data fetched from the Financial Commission API will be normalized into this structure in our Global Store (Zustand).

```typescript
interface ETFData {
  basDt: string;       // Base Date (YYYYMMDD)
  srtnCd: string;      // Short Code (Ticker)
  itmsNm: string;      // Item Name
  clpr: string;        // Close Price
  fltRt: string;       // Fluctuation Rate
  trqu: string;        // Trading Volume
}
```
