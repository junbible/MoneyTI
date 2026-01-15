# Architectural Decisions

## ADR 001: Next.js App Router
- **Status**: Accepted
- **Context**: Need a modern framework with easy API proxy capabilities.
- **Decision**: Use Next.js 14 App Router.
- **Consequences**: Learning curve for Server Components, but better performance and easy API hiding.

## ADR 002: Public Data Portal for Market Data
- **Status**: Accepted
- **Context**: Need specific ETF data (price) for free.
- **Decision**: Use Financial Commission's `GetSecuritiesProductInfoService`.
- **Consequences**: Data is D+1 (not strictly real-time) and API uptime can be spotty. Need robust error handling/fallback UI.

## ADR 003: Zustand for State
- **Status**: Accepted
- **Context**: Need to store MBTI test answers and result across pages.
- **Decision**: Use Zustand.
- **Consequences**: Boilerplate is minimal compared to Redux.
