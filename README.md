# 📊 Trading Suite

Suite completă de tools pentru trading — Nasdaq + Crypto, rulează 100% în browser.

## 🛠️ Tools incluse

| Tool | Fișier | Descriere |
|---|---|---|
| 🏠 Hub Dashboard | `index.html` | Dashboard central — agregă semnale din ambii scanneri |
| 📊 Nasdaq Scanner | `nasdaq-scanner.html` | 418 stocks, scoring, heatmap, AI analysis |
| ₿ Crypto Scanner | `crypto-scanner.html` | Binance live, Fear&Greed, heatmap categorii |
| ⚙️ Grid Calculator | `grid-calculator.html` | Configurator grid bot Pionex |
| 🔔 Price Alerter | `price-alerter.html` | Alerte preț crypto |
| 📰 Crypto News | `crypto-news.html` | Știri crypto live |

## 🚀 Deploy pe GitHub Pages

### Pasul 1 — Creează repository
```
1. github.com → New repository
2. Nume: trading-suite (sau orice)
3. Public ✓
4. Create repository
```

### Pasul 2 — Upload fișiere
```
1. Click "uploading an existing file"
2. Drag & drop TOATE fișierele din acest folder
3. Commit changes
```

### Pasul 3 — Activează GitHub Pages
```
1. Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: main / root
4. Save
```

### Pasul 4 — Accesează
```
https://[username].github.io/[repository]/
```

## 📱 Instalare ca aplicație (PWA)

Pe Android/Chrome:
1. Deschide `https://[username].github.io/[repository]/` în Chrome
2. Apare automat bannerul "Adaugă pe ecran principal"
3. SAU: meniu Chrome → "Instalează aplicația"

Pe iOS/Safari:
1. Deschide pagina în Safari
2. Share → "Adaugă pe ecran principal"

## 🔑 API Keys necesare

| Scanner | API Key | Unde |
|---|---|---|
| Nasdaq Scanner | **Finnhub** (gratuit) | [finnhub.io/register](https://finnhub.io/register) |
| Crypto Scanner | ❌ Nu necesită | Folosește Binance public API |

## 📁 Structura fișierelor

```
trading-suite/
├── index.html              ← Hub principal
├── nasdaq-scanner.html     ← Scanner Nasdaq
├── crypto-scanner.html     ← Scanner Crypto
├── grid-calculator.html    ← Grid Bot Calculator
├── price-alerter.html      ← Price Alerts Crypto
├── crypto-news.html        ← News Crypto
├── manifest.json           ← PWA config
├── sw.js                   ← Service Worker (cache offline)
├── icon-hub.svg            ← Iconiță Hub
├── icon-nasdaq.svg         ← Iconiță Nasdaq
├── icon-crypto.svg         ← Iconiță Crypto
├── icon-grid.svg           ← Iconiță Grid Calc
├── icon-alerts.svg         ← Iconiță Alerts
├── icon-news.svg           ← Iconiță News
└── README.md               ← Acest fișier
```

## ⚡ Features principale

**Nasdaq Scanner**
- 418 stocks cu rotație automată
- Scoring buy/sell multi-factor (RSI, momentum, trend 7z, earnings)
- Tab Oportunități cu Entry/Target/Stop
- Heatmap sectoare (Tech, Biotech, Semis, etc.)
- Macro Context: VIX, SPY, QQQ, DXY, 10Y Yield
- Price Alerts cu notificări browser
- Export semnale în clipboard
- AI Analysis → Claude.ai

**Crypto Scanner**
- Binance API live (fără cheie necesară)
- 8 tipuri de semnale cu descrieri rich
- Fear & Greed Index live
- Scoring oportunități adaptat pentru crypto
- Heatmap categorii (Layer1, DeFi, Meme, AI, etc.)
- Sparklines 24h

**Hub Dashboard**
- Citește automat din localStorage după fiecare scan
- Actualizare automată la 30 secunde
- Alerts active + Watchlist

---
*Built with ❤️ — single-file HTML apps, zero dependencies, zero backend*
