export const csvTopRatesUrls: { [key: string]: string } = {
  bluecapital: "https://w.bankon.click/asset/data/reportu/bluecapital.csv",
  itraderz: "https://w.bankon.click/asset/data/reportu/itraderz.csv",
  wingold: "https://w.bankon.click/asset/data/reportu/wingold.csv",
  royal_kmn: "https://w.bankon.click/asset/data/reportu/royal_kmn.csv",
  visioncapitalpro:
    "https://w.bankon.click/asset/data/reportu/visioncapitalpro.csv",
  vt_financial: "https://w.bankon.click/asset/data/reportu/vt_financial.csv",
};

export const strategyChartCsv =
  "https://w.bankon.click/asset/data/report/display_strategy.csv";
export const strategyScriptCsv =
  "https://w.bankon.click/asset/data/report/buy_sell_history.csv";
export const realTimeScriptCsv =
  "https://w.bankon.click/asset/data/report/report_realtime_status.csv";
export const realTimeChartCsv =
  "https://w.bankon.click/asset/data/report/data_info.csv";

export const sidebarItems = [
  {
    title: "Home",
    href: "/",
    icon: "/assets/icons/sidebar/alcx_med.svg",
  },
  {
    title: "Account",
    href: "/account",
    icon: "/assets/icons/sidebar/alcx_med.svg",
  },
  {
    title: "Wallet",
    href: "/wallet",
    icon: "/assets/icons/sidebar/farm_med.svg",
  },
  // {
  //   title: "Monitoring",
  //   href: "/monitoring",
  //   icon: "/assets/icons/sidebar/alcx_med.svg",
  // },
  {
    title: "Loan",
    href: "/loan",
    icon: "/assets/icons/sidebar/vaults_med.svg",
  },
  {
    title: "Pools",
    href: "/pools",
    icon: "/assets/icons/sidebar/vaults_med.svg",
  },
  {
    title: "Banks",
    href: "/banks",
    icon: "/assets/icons/sidebar/vaults_med.svg",
  },
];

export const userSidebarItems = [
  {
    title: "Account",
    href: "/user/account",
    icon: "/assets/icons/sidebar/alcx_med.svg",
  },
  {
    title: "Wallet",
    href: "/wallet",
    icon: "/assets/icons/sidebar/farm_med.svg",
  },
  {
    title: "Monitoring",
    href: "/monitoring",
    icon: "/assets/icons/sidebar/vaults_med.svg",
  },

  {
    title: "Profile",
    href: "/user/profile",
    icon: "/assets/icons/sidebar/utilities_med.svg",
  },
];

export const poolItems = [
  {
    title: "Zephyr Finance",
    header: "Reward: +7% monthly",
    logo: "/assets/icons/pools/logo03.png",
    desc: "Beginner-friendly platform for users looking to start with basic liquidity pool investments and minimal risk.",
    level: "Basic",

    services: [
      { key: "Profitability", value: "7% average for liquidity pools" },
      { key: "Lending & Borrowing", value: "No" },
      { key: "Staking & Yield Farming", value: "Available" },
      { key: "Liquidity Pools", value: "Level 1 only" },
      { key: "Asset Tokenization:", value: "No" },
    ],
  },
  {
    title: "GoldPool Pro",
    header: "Reward: +10% monthly",
    logo: "/assets/icons/pools/logo04.png",
    desc: "For users who want higher returns through advanced staking options and diversified yield strategies.",
    level: "Intermediate",

    services: [
      {
        key: "Profitability",
        value: "10% average across staking and yield farming",
      },
      { key: "Lending & Borrowing", value: "Yes (limited)" },
      { key: "Staking & Yield Farming", value: "Available" },
      { key: "Liquidity Pools", value: "Levels 1–2" },
      { key: "Asset Tokenization:", value: "No" },
    ],
  },

  {
    title: "RealEstate Pool",
    header: "Reward: +13% monthly",
    logo: "/assets/icons/pools/logo05.png",
    desc: "A real estate-backed liquidity pool offering steady returns and long-term investment growth.",
    level: "Intermediate",

    services: [
      {
        key: "Profitability",
        value: "13% monthly returns",
      },
      { key: "Lending & Borrowing", value: "Yes" },
      { key: "Staking & Yield Farming", value: "Available" },
      { key: "Liquidity Pools", value: "Levels 1–2" },
      { key: "Asset Tokenization:", value: "Coming Soon" },
    ],
  },

  {
    title: "Trade A-class Pool",
    header: "Reward: +17% monthly",
    logo: "/assets/icons/pools/logo06.png",
    desc: "High-performance trading pool designed for experienced investors seeking aggressive returns.",
    level: "Advanced",

    services: [
      {
        key: "Profitability",
        value: "17% monthly returns",
      },
      { key: "Lending & Borrowing", value: "Yes" },
      { key: "Staking & Yield Farming", value: "Available" },
      { key: "Liquidity Pools", value: "All levels" },
      { key: "Asset Tokenization:", value: "Available" },
    ],
  },

  {
    title: "CrowdFunding Pool",
    header: "Reward: +25% monthly",
    logo: "/assets/icons/pools/logo07.png",
    desc: "Support early-stage projects and earn high returns by participating in crowd-funded liquidity pools.",
    level: "Advanced",

    services: [
      {
        key: "Profitability",
        value: "25% monthly returns",
      },
      { key: "Lending & Borrowing", value: "Yes" },
      { key: "Staking & Yield Farming", value: "Available" },
      { key: "Liquidity Pools", value: "All levels" },
      { key: "Asset Tokenization:", value: "Available" },
    ],
  },
  {
    title: "Trade B-class Pool",
    header: "Reward: +32% monthly",
    logo: "/assets/icons/pools/logo08.png",
    desc: "Ultra-high-yield pool for expert traders with a high-risk tolerance and deep liquidity commitment.",
    level: "Expert",
    services: [
      {
        key: "Profitability",
        value: "32% monthly returns",
      },
      { key: "Lending & Borrowing", value: "Yes" },
      { key: "Staking & Yield Farming", value: "Available" },
      { key: "Liquidity Pools", value: "All levels" },
      { key: "Asset Tokenization:", value: "Available" },
    ],
  },
];
