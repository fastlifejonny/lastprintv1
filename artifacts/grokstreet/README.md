# GROKSTREET v0.3

Three views in `index.html`: OFFICE, FARM, ALPHA.

v0.3 adds a **paper broker** (fees + slippage + mark-to-market), a DISK panel (local twin of Grok Bot shared files), trade-only key slots that refuse withdraw, and villager-style sprites.

Tape: Binance public last + Hyperliquid `allMids` when they answer.  
Fills: only after APPROVE. Live send stays off on purpose — secrets do not belong in a browser tab.

See `PAPER.md`.

## Open the floor

Open `index.html` in a browser. No server required.

```
open index.html
```

or just double-click the file.

## What is real vs simulated

| Piece | Status |
|---|---|
| Office UI, walking agents, feed, milestones | Real, client-side |
| BTC / ETH / SOL last prices | Live from Binance public API when available |
| TSLA / NVDA / SPX | Simulated drift around seeds (no free stock stream in the file) |
| Trades, P&L, “+$0.12 over their heads” | Simulated book so the floor is alive on day one |
| Grok Bot agents executing live orders | Not wired yet — use the charters + HyperGrok-style approval loop |

Do **not** fund a live account from this dashboard. Treat it as a research/ops theater until you add an approval gate and a trade-only API key.

## Build path

1. Watch the floor (`index.html`).
2. Create 12 Grok Bots from the files in `agents/`.
3. Put specialists in one group chat. CHIEF routes. RISK can veto. EXECUTION is the only seat that may ever send an order — and only after you type `approve TICKET-ID`.
4. Paper / testnet first.

## Layout

```
grokstreet/
  index.html          the office
  README.md
  agents/
    00-CHIEF.md
    01-TAPE.md
    02-VERIFY.md
    03-QUANT.md
    04-MACRO.md
    05-RISK.md
    06-FLOW.md
    07-FILINGS.md
    08-COACH.md
    09-ARCHIVE.md
    10-BOSS-CRYPTO.md
    11-BOSS-MEME.md
    12-BOSS-STOCKS.md
    SETUP-GROK-BOT.md
```
