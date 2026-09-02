# Live feeds (v0.5)

The browser talks to public endpoints. No API key required for tape. Live **send** stays off.

| Feed | Endpoint | Used for |
|---|---|---|
| Hyperliquid mids | `POST https://api.hyperliquid.xyz/info` `{"type":"allMids"}` | BTC ETH SOL last |
| Hyperliquid ctx | `{"type":"metaAndAssetCtxs"}` | funding, OI, mark |
| Binance.US | `https://api.binance.us/api/v3/ticker/price` | fallback last if .com is blocked |
| Binance.com | `https://api.binance.com/api/v3/ticker/price` | tried first |
| Yahoo chart | `https://query1.finance.yahoo.com/v8/finance/chart/{TSLA,NVDA,%5EGSPC}` | INDEX floor |
| Pump.fun coins | `https://frontend-api-v3.pump.fun/coins?sort=created_timestamp&order=DESC` | NIGHT names + cheap filters |
| DexScreener | `https://api.dexscreener.com/token-boosts/top/v1` | paid-boost flag |

NIGHT does not buy. MONITOR/AUDITOR-style filters run in the page on the public coin object (empty description, no image, no socials, banned, tiny cap). That is a **research filter**, not a sniper.
