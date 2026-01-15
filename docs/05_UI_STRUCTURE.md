# UI Structure

## Sitemap

1.  **Home (`/`)**
    *   Hero Section: Title & "Start" Button
    *   Service Intro: 3 Card Features

2.  **Assessment (`/test`)**
    *   Progress Bar
    *   Question Card (Swipeable or Clickable)
    *   Navigation (Prev/Next) (hidden if auto-advance)

3.  **Loading (`/result/loading`)**
    *   Analyzing Animation
    *   Fun financial/personality facts carousel

4.  **Result (`/result/[mbti]`)**
    *   **Header**: Persona Name & Image
    *   **Analysis**: Investment Style Description
    *   **The Recommendation (Main)**:
        *   ETF Name & Ticker
        *   **Real-time Price** (Fetched via API)
        *   Chart (Mini sparkline if possible)
    *   **Actions**: "Share", "Retest", "Link to Broker(optional)"

## Component Hierarchy

```
App
├── Layout
│   ├── Header (Logo)
│   └── Footer (Copyright)
├── Page
│   ├── Hero
│   ├── QuestionContainer
│   │   └── AnswerButton
│   └── ResultCard
│       └── ETFPriceBadge (Async Component)
```
