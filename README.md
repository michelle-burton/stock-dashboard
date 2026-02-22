# 🧠 Equity Intelligence Dashboard

A lightweight **market snapshot + delta + narrative** dashboard for long-term pattern tracking.

This is **not a trading bot** and **not a brokerage tool** — it’s a personal intelligence engine built to capture repeatable snapshots, compare changes over time, and translate deterministic deltas into clear, human-readable insight.

---

## ✨ What It Does (MVP)

- ✅ **Snapshot Viewer** — Latest vs Previous snapshot cards
- ✅ **Delta Comparison** — “What changed?” table across time windows + price
- ✅ **Snapshot History** — compact timeline view with quick red/green trend signal
- ✅ **AI Summary (Deterministic Narrative)** — generates a structured write-up from snapshot deltas
- ✅ **Capture Panel** — capture snapshots and persist them locally for ongoing tracking
- ✅ **Local Persistence** — captured snapshots saved to `localStorage` (zero infrastructure)

---

## 🧩 What Makes This Different

- ❌ Not a trading bot  
- ❌ Not a brokerage  
- ❌ Not institutional research redistribution  

This is a **personal intelligence engine** built on structured, repeatable captures.

It emphasizes:

- 🧠 **Memory**
- 🔄 **Deltas**
- 📊 **Pattern tracking**
- ✍️ **Narrative clarity**
- 🧱 **Systemization over impulse**

---

## 🧠 AI Summary Philosophy

The **AI Summary** is intentionally *not* a free-form chatbot response.

It is a controlled narrative layer that:

1. Computes deterministic deltas (math)
2. Detects alignment/conflict across timeframes
3. Produces a concise summary with watch-items

This reduces hallucination and keeps the system trustworthy.

---

## 🚀 Live Data Roadmap (Finnhub)

The next step is wiring live market data via **Finnhub**:

- **Quote** → current price  
- **Candles (daily)** → compute time-window returns (1W / 1M / 3M / 6M / 1Y)  
- **Profile + Metrics** → market cap, P/E, beta  

---
---

# 🔗 Live Site


👉 **https://equity-intelligence-dashboard.onrender.com/**

---

## 🔮 Future Iterations

- 📆 Multi-snapshot comparison (select any baseline date)
- 📉 Visual trend charts
- 🏷 Custom scoring engine
- 🔔 Watchlist alerts
- 🛠 Tool interface for AI agents (WebMCP integration)
- 📊 Portfolio-level aggregation
- ⏱ Snapshot scheduling automation
- 🗃 DB persistence (SQLite / Postgres)

---

## ⚠️ Disclaimer

This project uses publicly available market data.  
It does **not** provide investment advice or trade recommendations.

---

## 👩‍💻 Author


- Michelle Burton
- Senior Front-End Engineer
- Portfolio: https://www.michelle-burton.com
- GitHub: https://github.com/michelleburton
- YouTube: https://www.youtube.com/@QuantumAIDesign
