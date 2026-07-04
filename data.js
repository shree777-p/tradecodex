/* Trader's Codex — structural topic map.
   This is the skeleton: titles, slugs, difficulty and grouping only.
   Full article bodies are written category-by-category in later passes. */

const CODEX = [
  {
    id: "foundations",
    folio: "I",
    title: "Foundations",
    desc: "How markets came to exist, and the vocabulary you need before anything else.",
    topics: [
      { t: "Introduction to Financial Markets", s: "introduction-to-financial-markets", d: "beginner", m: 8 },
      { t: "History of Markets", s: "history-of-markets", d: "beginner", m: 10 },
      { t: "What Is Trading", s: "what-is-trading", d: "beginner", m: 6 },
      { t: "Investment vs Trading", s: "investment-vs-trading", d: "beginner", m: 7 },
      { t: "Stock Market Basics", s: "stock-market-basics", d: "beginner", m: 9 },
    ]
  },
  {
    id: "market-structure",
    folio: "II",
    title: "Market Structure",
    desc: "The instruments, venues and regulators that make up the market itself.",
    topics: [
      { t: "Equity", s: "equity", d: "beginner", m: 6 },
      { t: "Indices", s: "indices", d: "beginner", m: 7 },
      { t: "IPO", s: "ipo", d: "beginner", m: 8 },
      { t: "FPO", s: "fpo", d: "intermediate", m: 6 },
      { t: "Market Participants", s: "market-participants", d: "beginner", m: 7 },
      { t: "Stock Exchanges", s: "stock-exchanges", d: "beginner", m: 6 },
      { t: "NSE", s: "nse", d: "beginner", m: 5 },
      { t: "BSE", s: "bse", d: "beginner", m: 5 },
      { t: "Global Exchanges", s: "global-exchanges", d: "intermediate", m: 8 },
      { t: "SEBI", s: "sebi", d: "beginner", m: 7 },
    ]
  },
  {
    id: "getting-started",
    folio: "III",
    title: "Getting Started",
    desc: "Opening the accounts and understanding the order types you'll actually use.",
    topics: [
      { t: "Brokers", s: "brokers", d: "beginner", m: 8 },
      { t: "Demat Account", s: "demat-account", d: "beginner", m: 6 },
      { t: "Trading Account", s: "trading-account", d: "beginner", m: 5 },
      { t: "KYC", s: "kyc", d: "beginner", m: 4 },
      { t: "Order Types", s: "order-types", d: "beginner", m: 9 },
      { t: "Market Orders", s: "market-orders", d: "beginner", m: 5 },
      { t: "Limit Orders", s: "limit-orders", d: "beginner", m: 5 },
      { t: "Stop Loss", s: "stop-loss", d: "beginner", m: 6 },
      { t: "Stop Limit", s: "stop-limit", d: "intermediate", m: 6 },
      { t: "GTT Orders", s: "gtt-orders", d: "intermediate", m: 5 },
      { t: "MIS", s: "mis", d: "beginner", m: 4 },
      { t: "CNC", s: "cnc", d: "beginner", m: 4 },
    ]
  },
  {
    id: "trading-styles",
    folio: "IV",
    title: "Trading Styles",
    desc: "Matching a holding period and temperament to a way of participating in markets.",
    topics: [
      { t: "Intraday Trading", s: "intraday-trading", d: "beginner", m: 8 },
      { t: "Swing Trading", s: "swing-trading", d: "beginner", m: 8 },
      { t: "Scalping", s: "scalping", d: "intermediate", m: 7 },
      { t: "Positional Trading", s: "positional-trading", d: "intermediate", m: 6 },
      { t: "Long-Term Investing", s: "long-term-investing", d: "beginner", m: 7 },
    ]
  },
  {
    id: "technical-analysis",
    folio: "V",
    title: "Technical Analysis",
    desc: "Reading price, volume and indicators to structure a view of the market.",
    topics: [
      { t: "Technical Analysis", s: "technical-analysis", d: "beginner", m: 9 },
      { t: "Fundamental Analysis", s: "fundamental-analysis", d: "beginner", m: 9 },
      { t: "Candlestick Charts", s: "candlestick-charts", d: "beginner", m: 8 },
      { t: "OHLC", s: "ohlc", d: "beginner", m: 4 },
      { t: "Chart Types", s: "chart-types", d: "beginner", m: 5 },
      { t: "Timeframes", s: "timeframes", d: "beginner", m: 5 },
      { t: "Support", s: "support", d: "beginner", m: 6 },
      { t: "Resistance", s: "resistance", d: "beginner", m: 6 },
      { t: "Trendlines", s: "trendlines", d: "beginner", m: 5 },
      { t: "Channels", s: "channels", d: "intermediate", m: 5 },
      { t: "Moving Averages", s: "moving-averages", d: "beginner", m: 7 },
      { t: "EMA", s: "ema", d: "intermediate", m: 5 },
      { t: "SMA", s: "sma", d: "beginner", m: 4 },
      { t: "VWAP", s: "vwap", d: "intermediate", m: 6 },
      { t: "RSI", s: "rsi", d: "intermediate", m: 6 },
      { t: "MACD", s: "macd", d: "intermediate", m: 7 },
      { t: "Bollinger Bands", s: "bollinger-bands", d: "intermediate", m: 6 },
      { t: "ATR", s: "atr", d: "intermediate", m: 5 },
      { t: "ADX", s: "adx", d: "intermediate", m: 5 },
      { t: "Volume", s: "volume", d: "beginner", m: 5 },
      { t: "Open Interest", s: "open-interest", d: "intermediate", m: 7 },
      { t: "Fibonacci", s: "fibonacci", d: "intermediate", m: 7 },
      { t: "Dow Theory", s: "dow-theory", d: "intermediate", m: 8 },
      { t: "Elliott Wave", s: "elliott-wave", d: "advanced", m: 10 },
      { t: "Wyckoff Method", s: "wyckoff-method", d: "advanced", m: 10 },
    ]
  },
  {
    id: "smart-money",
    folio: "VI",
    title: "Smart Money Concepts",
    desc: "Institutional order-flow frameworks: structure, liquidity and how price is engineered.",
    topics: [
      { t: "Market Structure", s: "market-structure", d: "intermediate", m: 8 },
      { t: "Liquidity", s: "liquidity", d: "intermediate", m: 7 },
      { t: "Smart Money Concepts", s: "smart-money-concepts", d: "advanced", m: 9 },
      { t: "ICT Concepts", s: "ict-concepts", d: "advanced", m: 9 },
      { t: "Break of Structure", s: "break-of-structure", d: "advanced", m: 6 },
      { t: "Change of Character", s: "change-of-character", d: "advanced", m: 6 },
      { t: "Supply & Demand", s: "supply-and-demand", d: "intermediate", m: 7 },
      { t: "Order Blocks", s: "order-blocks", d: "advanced", m: 7 },
      { t: "Fair Value Gap", s: "fair-value-gap", d: "advanced", m: 6 },
      { t: "Liquidity Sweeps", s: "liquidity-sweeps", d: "advanced", m: 6 },
      { t: "Institutional Trading Concepts", s: "institutional-trading-concepts", d: "advanced", m: 9 },
    ]
  },
  {
    id: "price-action",
    folio: "VII",
    title: "Price Action & Strategy",
    desc: "Patterns and setups traders act on, from a single candle to a full campaign.",
    topics: [
      { t: "Price Action", s: "price-action", d: "intermediate", m: 8 },
      { t: "Candlestick Patterns", s: "candlestick-patterns", d: "beginner", m: 9 },
      { t: "Chart Patterns", s: "chart-patterns", d: "intermediate", m: 9 },
      { t: "Continuation Patterns", s: "continuation-patterns", d: "intermediate", m: 6 },
      { t: "Reversal Patterns", s: "reversal-patterns", d: "intermediate", m: 6 },
      { t: "Breakout Trading", s: "breakout-trading", d: "intermediate", m: 7 },
      { t: "Pullback Trading", s: "pullback-trading", d: "intermediate", m: 6 },
      { t: "Momentum Trading", s: "momentum-trading", d: "intermediate", m: 6 },
      { t: "Gap Trading", s: "gap-trading", d: "intermediate", m: 6 },
      { t: "Trend Following", s: "trend-following", d: "intermediate", m: 6 },
      { t: "Mean Reversion", s: "mean-reversion", d: "advanced", m: 7 },
    ]
  },
  {
    id: "risk-psychology",
    folio: "VIII",
    title: "Risk & Psychology",
    desc: "The part of trading that decides whether the rest of this book even matters.",
    topics: [
      { t: "Risk Management", s: "risk-management", d: "beginner", m: 9 },
      { t: "Position Sizing", s: "position-sizing", d: "intermediate", m: 7 },
      { t: "Risk-Reward Ratio", s: "risk-reward-ratio", d: "beginner", m: 6 },
      { t: "Compounding", s: "compounding", d: "beginner", m: 6 },
      { t: "Trading Journal", s: "trading-journal", d: "beginner", m: 5 },
      { t: "Trading Psychology", s: "trading-psychology", d: "beginner", m: 9 },
      { t: "Emotional Control", s: "emotional-control", d: "intermediate", m: 6 },
      { t: "Discipline", s: "discipline", d: "beginner", m: 5 },
      { t: "Fear", s: "fear", d: "beginner", m: 5 },
      { t: "Greed", s: "greed", d: "beginner", m: 5 },
      { t: "Overtrading", s: "overtrading", d: "intermediate", m: 5 },
      { t: "Revenge Trading", s: "revenge-trading", d: "intermediate", m: 5 },
      { t: "Money Management", s: "money-management", d: "intermediate", m: 7 },
      { t: "Portfolio Management", s: "portfolio-management", d: "intermediate", m: 8 },
    ]
  },
  {
    id: "derivatives-markets",
    folio: "IX",
    title: "Derivatives & Other Markets",
    desc: "Beyond cash equity: options, futures, currencies, crypto and pooled products.",
    topics: [
      { t: "Options Trading", s: "options-trading", d: "advanced", m: 10 },
      { t: "Futures Trading", s: "futures-trading", d: "advanced", m: 9 },
      { t: "Commodities", s: "commodities", d: "intermediate", m: 8 },
      { t: "Currency Markets", s: "currency-markets", d: "intermediate", m: 7 },
      { t: "Forex Basics", s: "forex-basics", d: "beginner", m: 8 },
      { t: "Crypto Markets", s: "crypto-markets", d: "beginner", m: 8 },
      { t: "ETFs", s: "etfs", d: "beginner", m: 6 },
      { t: "Mutual Funds", s: "mutual-funds", d: "beginner", m: 7 },
    ]
  },
  {
    id: "macro-corporate",
    folio: "X",
    title: "Macro & Corporate Events",
    desc: "The economy-wide and company-level events that move prices independent of charts.",
    topics: [
      { t: "Economic Indicators", s: "economic-indicators", d: "intermediate", m: 8 },
      { t: "Inflation", s: "inflation", d: "beginner", m: 6 },
      { t: "Interest Rates", s: "interest-rates", d: "intermediate", m: 7 },
      { t: "GDP", s: "gdp", d: "beginner", m: 5 },
      { t: "CPI", s: "cpi", d: "beginner", m: 5 },
      { t: "Corporate Actions", s: "corporate-actions", d: "beginner", m: 7 },
      { t: "Dividends", s: "dividends", d: "beginner", m: 5 },
      { t: "Bonus Shares", s: "bonus-shares", d: "beginner", m: 5 },
      { t: "Stock Splits", s: "stock-splits", d: "beginner", m: 5 },
      { t: "Rights Issues", s: "rights-issues", d: "intermediate", m: 6 },
      { t: "Quarterly Results", s: "quarterly-results", d: "beginner", m: 6 },
      { t: "Earnings Reports", s: "earnings-reports", d: "intermediate", m: 7 },
    ]
  },
  {
    id: "markets-in-practice",
    folio: "XI",
    title: "Markets in Practice",
    desc: "Practical logistics — when markets open, and what it costs to participate.",
    topics: [
      { t: "Trading Sessions", s: "trading-sessions", d: "beginner", m: 5 },
      { t: "Market Timings", s: "market-timings", d: "beginner", m: 4 },
      { t: "World Market Time Zones", s: "world-market-time-zones", d: "beginner", m: 6 },
      { t: "Taxation Basics", s: "taxation-basics", d: "intermediate", m: 8 },
    ]
  },
  {
    id: "reference",
    folio: "XII",
    title: "Reference & Tools",
    desc: "The glossary, checklists and calculators you'll come back to again and again.",
    topics: [
      { t: "Trading Terminology", s: "trading-terminology", d: "beginner", m: 5 },
      { t: "Glossary", s: "glossary", d: "beginner", m: 3 },
      { t: "Frequently Asked Questions", s: "faq", d: "beginner", m: 6 },
      { t: "Common Beginner Mistakes", s: "common-beginner-mistakes", d: "beginner", m: 7 },
      { t: "Professional Trading Checklist", s: "professional-trading-checklist", d: "intermediate", m: 5 },
      { t: "Trading Plan Template", s: "trading-plan-template", d: "beginner", m: 6 },
      { t: "Daily Routine", s: "daily-routine", d: "beginner", m: 4 },
      { t: "Weekly Routine", s: "weekly-routine", d: "beginner", m: 4 },
      { t: "Monthly Review", s: "monthly-review", d: "beginner", m: 4 },
      { t: "Books & Documentaries", s: "books-and-documentaries", d: "beginner", m: 5 },
      { t: "Podcasts & Learning Resources", s: "learning-resources", d: "beginner", m: 4 },
      { t: "Useful Tools & Websites", s: "tools-and-websites", d: "beginner", m: 4 },
      { t: "Economic Calendar", s: "economic-calendar", d: "beginner", m: 4 },
      { t: "Position Size Calculator", s: "position-size-calculator", d: "intermediate", m: 3 },
    ]
  },
];

// Flat index for search
const CODEX_INDEX = CODEX.flatMap(group =>
  group.topics.map(topic => ({
    ...topic,
    group: group.title,
    groupId: group.id,
  }))
);
