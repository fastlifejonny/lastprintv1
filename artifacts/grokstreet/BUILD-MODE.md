# GROKSTREET → Grok Build Mode

SuperGrok Heavy → grok.com → mode **Build** → paste the prompt in `PROMPT.txt`.

## Wallet rule (do not loosen)

- Allowed: **public Solana address** (watch-only label).
- Forbidden: private key, seed, JSON secret array, Phantom “export private key”, JWT.
- APPROVE stays paper. Live send stays off even if a public address is saved.

If Build Mode offers “connect wallet”, tell it: `remove wallet connect; public address field only; reject secrets.`

## After first preview

1. `PF fallback: DexScreener search q=pumpfun if pump.fun errors.`
2. `DESK CHAT + LEARN counters in localStorage.`
3. `Reject any input that looks like a secret key.`
4. Publish `*.grok.me` as a demo, not a funded bot.
