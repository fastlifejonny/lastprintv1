# Notes from @zostaff (26 Aug 2026)

Thread: five Grok Bots on a night shift. The score that mattered was **340 refusals, 0 buys, $0 lost**.

## Seats

| Seat | Job |
|---|---|
| MONITOR | Stream. Kill if no metadata, no pulse, too new, empty curve. |
| AUDITOR | Wallets. Same funder behind many “buyers” is a kill. |
| NARRATIVE | Will the meme spread. Score is not a buy. |
| TIMING | Is this a night to buy *any* memecoin. |
| CHECKER | Runs after the other four said yes. Job is to find the no. Expensive model. |

Default outcome is skip. Checker approve:false is normal.

## Public code (not ours)

- https://github.com/zostaff/grokbot-pumpfun — pipeline, dry-run default, **live executor is a stub on purpose**
- https://github.com/zostaff/grok-agents — research desk that **does not trade**

His research README is the adult version: pump.fun graduation ~0.63%. A good filter still mostly confirms junk. Narrow the universe; do not add more yes-bots.

## What GROKSTREET took

NIGHT view + five charters under `agents/night/`.  
The board counts **REFUSED / BOUGHT / SPENT**. Bought stays 0 unless a human later forces a paper ticket on the ALPHA desk.

No pump.fun websocket and no mint sniper in this repo.
