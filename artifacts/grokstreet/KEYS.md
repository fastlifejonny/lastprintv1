# Keys you actually need

NIGHT tape already works **without** a Pump.fun key.  
`GET https://frontend-api-v3.pump.fun/coins?sort=created_timestamp` answered unauthenticated when we tested it.

There is no official “Pump API key” product. Protected routes want a **JWT from a wallet login** (sign a message on pump.fun). That JWT is a session on a wallet that can trade. Do not paste it into `index.html`. Do not paste a seed phrase anywhere in this project.

## Inventory

| Slot | Required for GROKSTREET floor? | How to get it | Goes in the page? |
|---|---|---|---|
| None | Floor + paper fills | — | — |
| Pump.fun JWT | No (list endpoint is public) | Sign-in on pump.fun in *your* browser only | **No** |
| Solana private key | No | Never for this desk | **No** |
| Hyperliquid agent key | Only if you later write a *testnet* signer outside this HTML | app.hyperliquid-testnet.xyz → Settings → API | env var, not the page |
| Binance testnet key | Only if you later hit testnet REST | testnet.binance.vision | KEYS drawer, withdraw **off** |
| xAI API key | Only if Grok Bots / grokbot-pumpfun talk to the API | console.x.ai | Bot env / Grok Bot disk, not the page |
| DexScreener | No | Public, 60 req/min | — |
| Yahoo / HL info | No | Public | — |

## Get an xAI key (agents, not the HTML floor)

1. Open https://console.x.ai
2. Sign in.
3. API keys → Create.
4. Store as `XAI_API_KEY` on the Grok Bot computer or in a local `.env` you never commit.
5. That key calls Grok. It does not send a trade.

## Get a Hyperliquid *testnet* agent (optional, later)

1. https://app.hyperliquid-testnet.xyz
2. Connect a **throwaway** wallet that holds no real funds.
3. Settings → API → Generate agent wallet.
4. Agent keys can still **place orders**. They are not harmless.
5. Faucet: https://app.hyperliquid-testnet.xyz/drip (docs say a prior mainnet deposit on the same address may be required).
6. Keep `network: testnet`. Do not point GROKSTREET at mainnet.

## Get a Binance *testnet* key (optional, later)

1. https://testnet.binance.vision
2. Log in → API Management → Create.
3. Enable **read** + spot trade on testnet only.
4. Confirm withdraw is **disabled**. If withdraw is on, GROKSTREET KEYS drawer rejects the save.

## Pump.fun — what “getting the key” really is

Official flow is:

1. Request a login message from pump.fun
2. Sign it with the wallet
3. POST `/auth/login` → JWT
4. Use `Authorization: Bearer …`

That is a **logged-in trading identity**, not a read-only key.  
GROKSTREET will not collect that JWT. If a future tool needs a private coin endpoint, run it on a machine you control, never in this dashboard.

## File on disk

Copy `keys.example.json` → `keys.local.json` (already gitignored by convention). Fill only testnet / xAI fields. Leave pump blank.
