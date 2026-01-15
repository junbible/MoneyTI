# API Integration Specification

## 1. External API: Financial Commission Securities Info (Public Data Portal)

- **Base URL**: `http://apis.data.go.kr/1160100/service/GetSecuritiesProductInfoService`
- **Operation**: `getETFPriceInfo` (ETF Price Info)

### Request Parameters
| Param | Description | Example |
|-------|-------------|---------|
| `serviceKey` | Auth Key | (Env Variable) |
| `numOfRows` | Page Size | `10` |
| `pageNo` | Page Number | `1` |
| `resultType` | Format | `json` |
| `itmsNm` | Search Query | `TIGER 200` |

### Response Example
```json
{
  "response": {
    "body": {
      "items": {
        "item": [
          {
            "itmsNm": "TIGER 200",
            "clpr": "34000",
            "fltRt": "0.5"
          }
        ]
      }
    }
  }
}
```

## 2. Internal API (Next.js API Routes)

To hide the Service Key and handle CORS, we will proxy requests through Next.js.

### `GET /api/etf/price`
- **Query**: `?calc=true&ticker=CODE`
- **Behavior**:
  1. Receives ticker/name from frontend.
  2. Calls Public Data Portal API.
  3. Returns simplified JSON to frontend.

```typescript
// Response to Frontend
{
  name: "Kodex 200",
  price: 34500,
  changeRate: 0.5,
  date: "20240115"
}
```
