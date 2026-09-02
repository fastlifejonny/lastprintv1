# Paper venue — honest fills

The floor no longer prints random +$0.12. v0.3 runs a **local paper broker**.

## What is wired

| Piece | Behavior |
|---|---|
| Tape | Live Binance last for BTC/ETH/SOL/DOGE when the browser can reach the public API. Hyperliquid `allMids` used as a second print when it answers. |
| Ticket | SEARCH/CHIEF open a ticket. RISK stamps CLEAR or KILL. SNIPER is dark until **APPROVE**. |
| Fill | Buy pays `mid * (1 + slip_bps/1e4)` plus taker fee. Sell receives `mid * (1 - slip_bps/1e4)` minus fee. |
| Book | `equity = cash + mark-to-market`. No invented win rate. |
| Journal | Every fill and close is appended. Export JSON from the DISK panel. |
| Keys | Settings accept a **trade-only** key. The app **does not sign live orders**. Keys sit in `localStorage` so you can paste them into Grok Bot takeover later. Withdraw-capable keys are rejected by naming rules in the form. |

## What is still not live routing

Sending a signed order to Binance or Hyperliquid mainnet from this HTML file would put a secret in a browser tab. That is the wrong security boundary.

Live send path (when you want it):

1. Create an exchange **subaccount / API wallet that cannot withdraw**.
2. Store the secret only on the Grok Bot shared computer via **Take over**, never in chat and never in this HTML file.
3. SNIPER Bot sends **one** order after you type `approve GS-…` in the Grok group chat.
4. ARCHIVE pastes the venue order id back into the journal.

This dashboard stays the blotter and the mark.

## Default risk

- Start cash $50
- Risk per ticket 0.5% of equity
- Max open risk 1.5%
- Taker 4 bps
- Slippage model 3–8 bps
- Daily halt −2%

Edit in Settings.
