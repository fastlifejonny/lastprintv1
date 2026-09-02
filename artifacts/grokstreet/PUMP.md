# Pump-only desk (Bober SEARCH route)

ALPHA + NIGHT now consume **only** pump.fun public coins.

Path:

`PF list → SEARCH packet (ticker, mint stub, mc, socials, github if present) → cheap veto or RISK → human APPROVE → paper fill`

There is no swap, no wallet, no JWT.

Paper mark is `usd_market_cap` (or SOL mcap × SOL last). That is a research number, not a bonding-curve quote. Do not treat P&L as a live pump book.

GitHub: SEARCH only flags a repo if the coin object already linked one. It does not scrape GitHub firehose.

## How to “test on pump.fun”

Pump.fun has **no testnet**. A wallet buy is mainnet SOL.

What this repo tests:

1. Real names from pump / DexScreener pumpfun pairs  
2. SEARCH packet quality  
3. RISK / CHECKER veto rate  
4. Paper fills after APPROVE  

What this repo will not do:

- Phantom / seed / JWT  
- `buy` on the bonding curve  
- Auto-snipe when SEARCH speaks  

If you later want a live send, that is a separate signer on a machine you control, tiny size, human confirm. Not this HTML file.
