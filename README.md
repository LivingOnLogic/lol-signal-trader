# 📈 lol-signal-trader

**Autonomous signal-based trading agent** for the Living On Logic protocol.

This agent reacts to market signals — like RSI, sentiment, or moving averages — fetched from MCP modules and executes swaps automatically via connected DEX modules.

---

## ⚡ Overview

`lol-signal-trader` enables fully automated crypto trading based on:

- 🧠 Technical signals (RSI, SMA, Bollinger Bands)
- 💬 Social sentiment (Twitter, Telegram, Nansen)
- 🛠 Modular execution (Uniswap, SushiSwap, etc.)

It is powered by **MCP signal sources** and **DEX execution endpoints**, all coordinated by an agent logic loop.

---

## 🧠 Features

- Configurable signal source and thresholds
- Simple or compound strategy triggers
- MCP-based execution with full trace logging
- Optional dry-run mode for simulation
- Lightweight and extensible

---

## 💼 Example Strategy

```ts
{
  token: "ARB",
  sentimentThreshold: 0.6,
  tradeAmount: 100
}
```

> → If sentiment for ARB exceeds 0.6, swap 100 USDC for ARB.

---

## 📂 Project Structure

```
/src
  /lib               → Agent core logic and mock modules
  index.ts           → Agent runner and CLI entry point
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/LivingOnLogic/lol-signal-trader.git
cd lol-signal-trader
npm install
npm run dev
```

---

## 📡 MCP Modules Used

- `signal.mcp` — Sentiment or TA signal provider
- `dex.mcp` — Swap execution engine (mocked or real)

---

## 📜 Signal Schema Example

```json
{
  "token": "ARB",
  "sentiment": 0.72,
  "source": "twitsignal.mcp"
}
```

---

## 🧪 Testing & Simulation

- All executions are logged to console
- You can replace mock MCPs with live ones via config
- Extend strategies via `SignalTraderAgent.ts`

---

## 🔄 Future Plans

- LLM-driven market summaries
- Wallet-based position sizing
- Multi-signal orchestration
