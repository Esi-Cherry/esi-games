export const NAV_LINKS = [
  { label: "Why TikTok", href: "#why-tiktok" },
  { label: "What We Do", href: "#process" },
  { label: "Why Esigame", href: "#why" },
  { label: "Games", href: "#games" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
]

export const HERO_STATS = [
  { value: 75, suffix: "+", label: "Published Games" },
  { value: 6, suffix: "+", label: "Years of Experience" },
  { value: null, display: "Millions", label: "of Players Reached" },
  { value: null, display: "Global", label: "Publishing Network" },
]

export const WHY_TIKTOK = [
  {
    title: "Massive User Reach",
    body: "Over a billion monthly users discover and play directly inside the TikTok ecosystem — no install friction, no funnel drop-off.",
    stat: "1B+",
    statLabel: "Monthly active users",
  },
  {
    title: "Viral Discovery",
    body: "Games surface through the For You feed, turning a single share into exponential, algorithm-driven distribution.",
    stat: "∞",
    statLabel: "Organic reach potential",
  },
  {
    title: "Creator-Driven Growth",
    body: "Creators turn gameplay into content, fueling authentic acquisition that traditional ad networks can't match.",
    stat: "10x",
    statLabel: "Creator-led conversion",
  },
  {
    title: "Social Gameplay",
    body: "Native social mechanics keep players competing, sharing, and returning inside the feed they already live in.",
    stat: "Native",
    statLabel: "In-feed engagement",
  },
  {
    title: "Fast Iteration Cycles",
    body: "Instant publishing and real-time signals let us test, learn, and optimize at the speed of the platform.",
    stat: "Days",
    statLabel: "Not months to iterate",
  },
]

export const WORKFLOW_STEPS = [
  { title: "Game Developer", desc: "You bring a great game and a great team." },
  { title: "Publishing Strategy", desc: "Market fit, positioning, and a launch roadmap." },
  { title: "Localization", desc: "Language, culture, and store optimization per region." },
  { title: "TikTok Integration", desc: "Native TikTok Mini Game SDK and platform setup." },
  { title: "Creator Marketing", desc: "Influencer campaigns built for viral reach." },
  { title: "User Acquisition", desc: "Data-driven paid growth with strict ROAS targets." },
  { title: "LiveOps", desc: "Always-on events, content, and economy tuning." },
  { title: "Revenue Growth", desc: "Compounding, optimized, long-term monetization." },
]

export const WHY_CARDS = [
  {
    title: "TikTok Expertise",
    body: "We focus exclusively on TikTok Mini Games and understand the ecosystem deeply — from SDK to the For You algorithm.",
    tag: "Platform Focus",
  },
  {
    title: "Creator Marketing",
    body: "Partnerships with creators and communities to accelerate growth through authentic, viral content.",
    tag: "Viral Growth",
  },
  {
    title: "Performance Marketing",
    body: "Data-driven user acquisition and continuous optimization tuned to maximize return on ad spend.",
    tag: "Paid Acquisition",
  },
  {
    title: "Long-Term Operations",
    body: "LiveOps, monetization tuning, and player retention that compound results across a game's full lifecycle.",
    tag: "Sustained Growth",
  },
  {
    title: "Global Team",
    body: "Experienced publishing professionals across multiple markets, working as an extension of your studio.",
    tag: "Worldwide",
  },
]

export const PARTNERS = [
  "AppQuantum",
  "NoPowerup",
  "Gameduo",
  "BoomBit",
  "Ketchapp",
  "MY.GAMES",
  "Supersonic",
]

export type Game = {
  slug: string
  title: string
  image: string
  category: string
  blurb: string
  tagline: string
  tiktokUrl: string
  screenshots: string[]
  overview: string[]
  features: string[]
}

export const GAMES: Game[] = [
  {
    slug: "idle-lumber-empire",
    title: "Idle Lumber Empire",
    image: "/games/idle-lumber-empire.png",
    category: "Idle Tycoon",
    blurb: "Build a booming timber business and watch your lumber empire grow.",
    tagline: "Chop, automate, and build a booming timber empire.",
    tiktokUrl: "https://www.tiktok.com/minis/bmvfS41stgj",
    screenshots: [
      "/games/screenshots/idle-lumber-empire-1.png",
      "/games/screenshots/idle-lumber-empire-2.png",
      "/games/screenshots/idle-lumber-empire-3.png",
      "/games/screenshots/idle-lumber-empire-4.png",
    ],
    overview: [
      "Welcome to Idle Lumber Empire, the ultimate idle tycoon game where you build and manage your very own timber business from the ground up. Start with a single sawmill and grow it into a massive lumber empire that runs around the clock.",
      "Chop trees, process logs, automate your sawmills, and hire workers to keep production flowing even while you are away. Reinvest your profits to unlock powerful upgrades, new machines, and bigger factories.",
      "With satisfying idle progression and endless upgrades, Idle Lumber Empire is the perfect game to play in quick sessions or for hours at a time.",
    ],
    features: [
      "Addictive idle gameplay with offline earnings",
      "Hundreds of upgrades and automation tiers",
      "Expand from a single sawmill to a global empire",
      "Satisfying production and management loops",
    ],
  },
  {
    slug: "idle-light-city",
    title: "Idle Light City",
    image: "/games/idle-light-city.png",
    category: "Idle Simulation",
    blurb: "Light up the city and power a glowing metropolis from the ground up.",
    tagline: "Power up the city and watch it come to life.",
    tiktokUrl: "https://www.tiktok.com/minis/ZJ02Wg2Bmej",
    screenshots: [
      "/games/screenshots/idle-light-city-1.png",
      "/games/screenshots/idle-light-city-2.png",
      "/games/screenshots/idle-light-city-3.png",
      "/games/screenshots/idle-light-city-4.png",
    ],
    overview: [
      "Idle Light City is a charming idle simulation game where you bring an entire city to life by powering up its buildings, streets, and landmarks one light at a time. Tap to generate energy and watch the metropolis glow.",
      "Invest in power plants, upgrade your infrastructure, and unlock new districts as your city expands. The more you grow, the brighter your city shines — even while you are offline.",
      "With its cozy art style and relaxing idle progression, Idle Light City is the perfect escape for fans of city-building and tycoon games.",
    ],
    features: [
      "Relaxing idle city-building gameplay",
      "Light up buildings and unlock new districts",
      "Offline energy generation and progression",
      "Cheerful, colorful art style",
    ],
  },
  {
    slug: "idle-aqua-park",
    title: "Idle Aqua Park",
    image: "/games/idle-aqua-park.png",
    category: "Idle Tycoon",
    blurb: "Design wild water slides and run the most popular aqua park in town.",
    tagline: "Build the wildest water park and ride to riches.",
    tiktokUrl: "https://www.tiktok.com/minis/hnIqSV2tafj",
    screenshots: [
      "/games/screenshots/idle-aqua-park-1.png",
      "/games/screenshots/idle-aqua-park-2.png",
      "/games/screenshots/idle-aqua-park-3.png",
      "/games/screenshots/idle-aqua-park-4.png",
    ],
    overview: [
      "Idle Aqua Park is a splashing idle tycoon game where you design, build, and manage your very own water park. Construct thrilling slides, attract crowds of visitors, and turn your park into the hottest summer destination.",
      "Upgrade your slides to make them faster and more exciting, add new attractions, and watch happy guests pour in. Earn money even while you are away and reinvest it to expand your aqua empire.",
      "Easy to pick up and endlessly fun, Idle Aqua Park delivers the perfect blend of building, management, and idle progression.",
    ],
    features: [
      "Build and upgrade thrilling water slides",
      "Attract and manage crowds of visitors",
      "Idle earnings that keep growing offline",
      "Bright, fun summer theme",
    ],
  },
  {
    slug: "divineko",
    title: "Divineko",
    image: "/games/divineko.png",
    category: "Idle Clicker",
    blurb: "Tap into magic with an adorable celestial cat clicker adventure.",
    tagline: "Summon magic with your divine little cat.",
    tiktokUrl: "https://www.tiktok.com/minis/R19IBGk02dj",
    screenshots: [
      "/games/screenshots/divineko-1.png",
      "/games/screenshots/divineko-2.png",
      "/games/screenshots/divineko-3.png",
      "/games/screenshots/divineko-4.png",
    ],
    overview: [
      "Divineko is a magical idle clicker game starring an adorable celestial cat with mystical powers. Tap to channel divine energy, cast spells, and unlock a universe of cosmic wonders.",
      "Collect enchanting upgrades, summon magical companions, and grow your power across a dreamy, star-filled world. With every tap, your divine kitty grows stronger and your magical journey expands.",
      "Soothing visuals, satisfying progression, and charming characters make Divineko the perfect relaxing clicker experience.",
    ],
    features: [
      "Magical tap-to-progress clicker gameplay",
      "Adorable celestial cat and companions",
      "Dreamy, star-filled art style",
      "Endless upgrades and cosmic rewards",
    ],
  },
  {
    slug: "patrol-officer",
    title: "Patrol Officer",
    image: "/games/patrol-officer.png",
    category: "Simulation",
    blurb: "Enforce the law, run checkpoints, and keep the streets safe.",
    tagline: "Uphold the law one checkpoint at a time.",
    tiktokUrl: "https://www.tiktok.com/minis/cX3hdZtmNfj",
    screenshots: [
      "/games/screenshots/patrol-officer-1.png",
      "/games/screenshots/patrol-officer-2.png",
      "/games/screenshots/patrol-officer-3.png",
      "/games/screenshots/patrol-officer-4.png",
    ],
    overview: [
      "Patrol Officer puts you in the shoes of a dedicated law enforcement officer tasked with keeping the streets safe. Run checkpoints, inspect drivers, conduct breathalyzer tests, and catch rule-breakers in the act.",
      "Make quick decisions, follow procedure, and rise through the ranks as you handle increasingly challenging situations. Every shift brings new cases, suspects, and surprises.",
      "With engaging simulation gameplay and a touch of humor, Patrol Officer offers a fresh and entertaining take on the life of a patrol cop.",
    ],
    features: [
      "Immersive law-enforcement simulation",
      "Run checkpoints and inspect drivers",
      "Make fast decisions and rise in rank",
      "Varied cases and challenging scenarios",
    ],
  },
  {
    slug: "pawn-to-do",
    title: "Pawn To Do",
    image: "/games/pawn-to-do.png",
    category: "Narrative Puzzle",
    blurb: "Unravel a gripping story of secrets, choices, and redemption.",
    tagline: "Every choice writes the next chapter.",
    tiktokUrl: "https://www.tiktok.com/minis/F1IDoxyJqgj",
    screenshots: [
      "/games/screenshots/pawn-to-do-1.png",
      "/games/screenshots/pawn-to-do-2.png",
      "/games/screenshots/pawn-to-do-3.png",
      "/games/screenshots/pawn-to-do-4.png",
    ],
    overview: [
      "Pawn To Do is a gripping narrative puzzle game where your choices shape an unfolding story of secrets, betrayal, and redemption. Step into a cinematic world full of intrigue and complex characters.",
      "Solve clever puzzles, uncover hidden truths, and make decisions that change the course of the story. Every chapter draws you deeper into a web of mystery and emotion.",
      "With stunning visuals and a story-driven experience, Pawn To Do keeps you hooked from the first scene to the final reveal.",
    ],
    features: [
      "Choice-driven cinematic storytelling",
      "Clever puzzles woven into the plot",
      "Stunning, dramatic visuals",
      "Multiple twists and emotional moments",
    ],
  },
]

export function getGame(slug: string): Game | undefined {
  return GAMES.find((g) => g.slug === slug)
}

export function getRelatedGames(slug: string, count = 3): Game[] {
  return GAMES.filter((g) => g.slug !== slug).slice(0, count)
}

export const INSIGHTS = [
  {
    tag: "Trends",
    title: "What's Next for TikTok Mini Games",
    body: "The signals shaping the fastest-growing games platform — and where the next breakout hits will come from.",
    read: "6 min read",
  },
  {
    tag: "Creator Economy",
    title: "Turning Creators into Growth Engines",
    body: "How authentic creator content outperforms paid media for discovery and long-term retention.",
    read: "5 min read",
  },
  {
    tag: "Publishing",
    title: "A Modern Publishing Playbook",
    body: "From soft launch to scale — the strategy framework we use to de-risk every release.",
    read: "8 min read",
  },
  {
    tag: "User Acquisition",
    title: "Scaling UA Without Burning Budget",
    body: "Data-driven acquisition tactics that protect ROAS while compounding installs.",
    read: "7 min read",
  },
  {
    tag: "Monetization",
    title: "Designing Healthy Game Economies",
    body: "Balancing IAP and ads to maximize lifetime value without hurting the player experience.",
    read: "6 min read",
  },
]

export const SERVICES = [
  {
    title: "User Acquisition",
    body: "Performance marketing across paid social and emerging channels with rigorous ROAS targets.",
    metric: "1.4B+",
    metricLabel: "Ad impressions managed",
  },
  {
    title: "Creator Marketing",
    body: "Creator partnerships and viral content engines built natively for TikTok.",
    metric: "5,000+",
    metricLabel: "Creator collaborations",
  },
  {
    title: "Monetization Design",
    body: "Hybrid IAP and ad monetization models tuned per market to maximize lifetime value.",
    metric: "+38%",
    metricLabel: "Avg. ARPDAU lift",
  },
  {
    title: "LiveOps",
    body: "Always-on events, content cadence, and economy tuning that keep players engaged for years.",
    metric: "365",
    metricLabel: "Days of live content",
  },
  {
    title: "Community Management",
    body: "Localized community building and moderation across global player bases.",
    metric: "24/7",
    metricLabel: "Multi-region coverage",
  },
  {
    title: "Platform Compliance",
    body: "Full TikTok platform certification, policy, and integration handling end to end.",
    metric: "100%",
    metricLabel: "Compliance track record",
  },
]

export const OFFICES = [
  {
    city: "Singapore",
    role: "APAC Hub",
    coordinates: [103.8, 1.35] as [number, number],
    note: "Regional partnerships and developer relations.",
  },
  {
    city: "Los Angeles",
    role: "Americas Office",
    coordinates: [-118.2, 34.05] as [number, number],
    note: "Western developer cooperation and user acquisition.",
  },
]

export const CONTACTS = [
  { label: "Business Development", email: "bd@esigame.com" },
  { label: "Developer Partnerships", email: "dev@esigame.com" },
]
