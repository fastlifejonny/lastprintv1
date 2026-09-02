# Install GROKSTREET on Grok Bot

Source notes folded in from xAI docs + @Bober_smart’s setup thread (Aug 2026).

## Architecture that actually matters

All Bots on **one account share one persistent cloud computer**.  
Each Bot gets its own screen. Files, browser sessions, and logins are shared.

xAI: **do not use separate Bots as a security boundary.**

Deleting a Bot removes profile, chat, and routines. Files and logins on the shared machine can remain. Revoke those in the external apps yourself.

## Access

Eligible plans commonly cited: SuperGrok Plus / Heavy, or Cursor Pro+ / Ultra / Teams.  
App: https://x.ai/bot — Sign in with Cursor.

## Create a Bot

1. New → Create new agent
2. Edit Profile: name, title, description (the charter), avatar
3. Cap: about 50 Bots + group chats per account

Put durable rules in the **description**. Put this week’s task in the message.

A strong task always has: desired outcome, sources, constraints, deliverable format, when to stop for approval.

## Shared computer and takeover

Open **Agent Computer** to watch the screen.

When the Bot hits a password, 2FA, CAPTCHA, or payment:

1. Take over
2. Finish the sensitive step yourself
3. Return control with I’m done

Never paste passwords or OTP codes into chat.

## Approvals

Settings → Auto-review: require approval for external actions.  
Local computer access: start at **Never allowed**.  
Payments and production keys stay out of the pilot.

## Two desks

### Desk A — research floor

CHIEF, TAPE, VERIFY, QUANT, MACRO, RISK, FLOW, FILINGS, COACH, ARCHIVE + floor bosses.

`idea → TAPE/FLOW → VERIFY → QUANT → RISK → CHIEF ticket → human approve`

### Desk B — Solana attention desk

HEAD, SEARCH, RISK, SNIPER, WHALE, RUG, EXIT, SHILL

`SEARCH packet → RISK CLEAR/KILL → HEAD ticket → human APPROVE → SNIPER one send → EXIT/RUG watch`

**SNIPER does not fire on CLEAR.** CLEAR means RISK finished a checklist. You still type `approve GS-…`.

## Safe pilot

1. Create 1–3 Bots, not 12.
2. Reversible work only.
3. No live keys in week one.
4. Require approval for every external action.
5. Weekly: inspect the shared computer and revoke leftovers.
