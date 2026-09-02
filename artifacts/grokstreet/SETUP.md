# Set up GROKSTREET on your machine

Two layers. Do them in this order.

1. **The floor** — `index.html` in a browser. This is the desk you already have.
2. **The bots** — optional. Paste charters into Grok Bot if your plan includes Agent Computer.

Live send stays off. That is not a missing install step.

---

## 1. Get the files

Download `grokstreet.zip` from this chat and unpack it.

```bash
mkdir -p ~/GROKSTREET
cd ~/GROKSTREET
unzip ~/Downloads/grokstreet.zip
cd grokstreet
ls
# index.html  DATA.md  PAPER.md  agents/  keys.example.json
```

On Windows: right-click the zip → Extract All → pick a folder you will keep.

Do not open the zip itself. Open the folder that contains `index.html`.

---

## 2. Serve it (do not double-click)

Some feeds (Yahoo, DexScreener, Pump.fun) refuse a `file://` page. Serve it over localhost.

**macOS / Linux**

```bash
cd ~/GROKSTREET/grokstreet
python3 -m http.server 8765
```

Then open [http://127.0.0.1:8765/](http://127.0.0.1:8765/)

**Windows (PowerShell)**

```powershell
cd $HOME\GROKSTREET\grokstreet
python -m http.server 8765
```

Then open the same URL.

Leave that terminal running. Stop with Ctrl+C.

Chrome / Edge / Firefox all work. Safari can be picky with mixed APIs — use Chrome if a feed stays DOWN.

---

## 3. First 60 seconds on the floor

You should see:

- header: GROKSTREET · PAPER · OFFICE FARM ALPHA NIGHT
- REFUSED / BOUGHT / CASH / EQ
- walking sprites
- FEEDS line: `HL · BN · YH · PF · DX`

Wait ~5 seconds. Those tags should flip to **LIVE**.

| Tag | Meaning |
|---|---|
| HL LIVE | Hyperliquid mids + funding |
| BN LIVE com or us | Binance last (`.us` if `.com` is blocked) |
| YH LIVE | TSLA / NVDA / SPX |
| PF LIVE n names | Pump.fun newest coins |
| DX LIVE | DexScreener boost list |
| DOWN | that API blocked or timed out — others still work |

Click **NIGHT**. Refusals should print real `$TICKER` plus a mint stub, not only ELONSDOG.

Click **ALPHA**. SEARCH will draft a paper ticket. Nothing fills until you hit **APPROVE**.

**KEYS** → leave venue on `GROKSTREET paper`, Can withdraw = **NO**. Do not paste a live key.

**DISK** is the local twin of Grok Bot files (`tickets.json`, `journal.json`, `book.json`). It lives in this browser’s localStorage.

Reset: DISK → RESET BOOK $50.

---

## 4. Optional: Grok Bot (cloud computer)

Only if you have Agent Computer (often SuperGrok Plus / Heavy, or a Cursor plan that includes Grok Bot). App: https://x.ai/bot

**Week one: three bots, not twelve.**

| Bot name | Paste this file into Profile → Description |
|---|---|
| CHECKER | `agents/night/04-CHECKER.md` |
| AUDITOR | `agents/night/01-AUDITOR.md` |
| RISK | `agents/alpha/02-RISK.md` |

Then add HEAD or CHIEF if those three behave.

Also:

1. Settings → Auto-review: **require approval** for external actions.
2. Local computer access: **Never allowed** until you trust the desk.
3. Put shared files on the Agent Computer with the same names as DISK: `tickets.json`, `journal.json`, `book.json`.
4. One group chat. CHECKER and RISK may veto. Nobody sends.

xAI: every bot on one account shares **one** cloud PC. Do not treat extra bots as isolation. Never paste OTP or a withdraw-enabled key into chat.

Full notes: `agents/SETUP-GROK-BOT.md`.

---

## 5. What you should not install

- No Node project.
- No Python packages.
- No wallet.
- No pump.fun or Hyperliquid trading key.
- No “sniper” script.

If someone tells you to paste a private key into the page, stop.

---

## 6. If something looks broken

| Symptom | Fix |
|---|---|
| Blank page | You opened the zip or a nested folder. URL should end at `/` with `index.html` in that folder. |
| FEEDS all DOWN | Serve via `python3 -m http.server`, not file://. Try Chrome. Disable aggressive tracker blockers on 127.0.0.1. |
| BN DOWN, HL LIVE | Fine. HL is the primary tape. |
| PF DOWN | Pump.fun frontend flaps. NIGHT will say the feed is warming. Reload in a minute. |
| Prices frozen | Network tab: look for 429. Wait; DexScreener is 60 req/min. |
| Old P&L after update | DISK → RESET BOOK $50, or clear site data for 127.0.0.1. |
| Approve does nothing | Ticket must be WAIT_APPROVE (RISK CLEAR first). |

---

## 7. Daily use

1. Start the local server.
2. Open the floor.
3. Confirm FEEDS.
4. NIGHT = refuse log. ALPHA = paper tickets. OFFICE = walking floor.
5. If you also run Grok Bots, the human still types approve. The HTML APPROVE button is the paper twin of that message.

Read `DATA.md` for endpoints and `PAPER.md` for fill math.
