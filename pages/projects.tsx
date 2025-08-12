import Container from "@/components/Container";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  Squares2X2Icon,
  ChartBarIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import type { CSSProperties } from "react";

// --- Data --------------------------------------------------------------------

type Project = {
  name: string;
  url: string;
  desc: string;
  color: string; // unique accent per project (no duplicates)
  stack: string[];
  slug?: string;
  category: "Full-Stack" | "Quant" | "ML" | "Tools" | "Fun";
};

const projects: Project[] = [
  // Full-Stack Apps (unique colors)
  {
    name: "AudioCNN — ResNet Classifier & Visualizer",
    url: "https://cnn-audio-vis.vercel.app/",
    desc: "Train & visualize CNNs on audio.",
    color: "#F59E0B", // amber-500
    stack: ["PyTorch", "FastAPI", "Next.js"],
    slug: "audiocnn",
    category: "Full-Stack",
  },
  {
    name: "Multi-Agent Reasoning",
    url: "https://github.com/achntj/multi-agent-reasoning",
    desc: "Agent workflows for strategic debate & tool use.",
    color: "#D946EF", // fuchsia-500
    stack: ["FastAPI", "Streamlit", "Ollama"],
    slug: "multi-agent-reasoning",
    category: "Full-Stack",
  },
  {
    name: "Value Finder",
    url: "https://github.com/achntj/value-finder",
    desc: "Surfaces high-signal links from noisy sources. Learns preferences.",
    color: "#EF4444", // red-500
    stack: ["Next.js", "TypeScript", "sklearn"],
    slug: "value-finder",
    category: "Full-Stack",
  },
  {
    name: "Slimlist",
    url: "https://github.com/achntj/slimlist",
    desc: "Local-first productivity suite.",
    color: "#2563EB", // blue-600
    stack: ["Next.js", "Tailwind", "SQLite"],
    slug: "slimlist",
    category: "Full-Stack",
  },
  {
    name: "AppTrack",
    url: "https://github.com/achntj/apptrack",
    desc: "Lightweight job application tracker.",
    color: "#16A34A", // green-600
    stack: ["Next.js", "Prisma", "SQLite"],
    slug: "apptrack",
    category: "Full-Stack",
  },

  // Quantitative Finance
  {
    name: "Statistical Arbitrage Engine",
    url: "https://github.com/achntj/statistical-arbitrage",
    desc: "Clustering + cointegration pair trading with backtests.",
    color: "#10B981", // emerald-500
    stack: ["Python", "scikit-learn", "statsmodels", "pandas"],
    slug: "statistical-arbitrage",
    category: "Quant",
  },
  {
    name: "Quantitative Strategies — Portfolio Optimization",
    url: "https://github.com/achntj/Quantitative-Strategies",
    desc: "MPT, risk budgeting, and Monte Carlo tooling.",
    color: "#A855F7", // violet-500
    stack: ["Python", "NumPy", "Matplotlib", "pandas"],
    slug: "quantitative-strategies",
    category: "Quant",
  },

  // Machine Learning
  {
    name: "Deep Learning from Scratch",
    url: "https://github.com/achntj/deep-learning-from-scratch",
    desc: "Minimal NumPy implementations of core DL components.",
    color: "#06B6D4", // cyan-500
    stack: ["Python", "NumPy"],
    slug: "dlfs",
    category: "ML",
  },
  {
    name: "NightVision",
    url: "https://github.com/achntj/NightVision",
    desc: "Low-light image enhancement experiments.",
    color: "#F97316", // orange-500
    stack: ["Python", "OpenCV", "PyTorch"],
    slug: "nightvision",
    category: "ML",
  },
  {
    name: "Depression Detection",
    url: "https://github.com/achntj/depression-detection",
    desc: "Classic NLP on tweets (logistic regression baseline).",
    color: "#22D3EE", // cyan-300/400
    stack: ["Python", "scikit-learn"],
    slug: "depression-detection",
    category: "ML",
  },

  // Tools
  {
    name: "Stegify",
    url: "https://github.com/achntj/stegify",
    desc: "Embed encrypted messages inside images.",
    color: "#84CC16", // lime-500
    stack: ["Python"],
    slug: "stegify",
    category: "Tools",
  },
  {
    name: "Bookmarks → Notion",
    url: "https://github.com/achntj/bookmarks-notion",
    desc: "Export browser bookmarks to Notion-ready data.",
    color: "#EAB308", // yellow-500
    stack: ["TypeScript", "Node"],
    slug: "bookmarks-notion",
    category: "Tools",
  },
  {
    name: "Zsh Guide",
    url: "https://github.com/achntj/zshguide",
    desc: "A cleaner mirror of Peter Stephenson’s Zsh Guide.",
    color: "#14B8A6", // teal-500
    stack: ["Next.js", "TypeScript", "MDX"],
    slug: "zshguide",
    category: "Tools",
  },

  // Fun
  {
    name: "Patrick Bateman Card Generator",
    url: "https://bateman.achintyajha.com",
    desc: "An over-engineered business card (American Psycho).",
    color: "#9333EA", // violet-600
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    slug: "bateman-card",
    category: "Fun",
  },
];

// --- UI Helpers ---------------------------------------------------------------

const categoryMeta: Record<Project["category"], { label: string; Icon: any }> =
  {
    "Full-Stack": { label: "Full‑Stack", Icon: Squares2X2Icon },
    Quant: { label: "Quant", Icon: ChartBarIcon },
    ML: { label: "ML", Icon: CpuChipIcon },
    Tools: { label: "Tools", Icon: WrenchScrewdriverIcon },
    Fun: { label: "Fun", Icon: SparklesIcon },
  };

const categories = [
  "All",
  "Full-Stack",
  "Quant",
  "ML",
  "Tools",
  "Fun",
] as const;

// subtle radial gradient using the card's accent color
function cardBg(color: string) {
  return {
    background: `radial-gradient(1200px 400px at -10% -10%, ${color}33, transparent 60%), linear-gradient(135deg, ${color}1a, transparent 70%)`,
  } as CSSProperties;
}

// readable border color derived from accent
function ringFrom(color: string) {
  return { boxShadow: `0 0 0 1px ${color}55` } as CSSProperties;
}

// --- Component ----------------------------------------------------------------

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter(
      (p) => p.category === (active as Project["category"]),
    );
  }, [active]);

  return (
    <Container>
      <section className="mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Projects
        </motion.h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
          Selected work across full‑stack apps, quantitative finance, and
          machine learning. Filter to explore.
        </p>
      </section>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => {
          const isActive = c === active;
          const Meta =
            c === "All" ? null : categoryMeta[c as Project["category"]];
          const Icon = Meta?.Icon;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-black border-neutral-900 dark:border-white"
                  : "bg-transparent border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              }`}
            >
              {Icon && <Icon className="h-4 w-4" />}
              <span>
                {c === "All"
                  ? "All"
                  : categoryMeta[c as Project["category"]].label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, idx) => (
          <a key={p.name} href={p.url} target="_blank" rel="noreferrer">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.02 * idx }}
              className="group relative overflow-hidden rounded-2xl p-5 md:p-6 h-full border bg-white/60 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-neutral-900/40"
              style={{ ...cardBg(p.color), ...ringFrom(p.color) }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {p.name}
                  </h3>
                  <div className="mt-1 inline-flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                    <span className="inline-flex items-center rounded-full border px-2 py-0.5">
                      {categoryMeta[p.category].label}
                    </span>
                  </div>
                </div>
                <div className="opacity-70 group-hover:opacity-100 transition text-neutral-800 dark:text-neutral-100">
                  <ArrowUpRightIcon className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Accent ring on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 transition"
                style={{ boxShadow: `inset 0 0 0 1px ${p.color}55` }}
              />
            </motion.div>
          </a>
        ))}
      </div>

      {/* Empty state (unlikely) */}
      {filtered.length === 0 && (
        <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-8">
          Nothing here yet. Try another filter.
        </div>
      )}
    </Container>
  );
}
