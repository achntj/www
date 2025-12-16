"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  Squares2X2Icon,
  ChartBarIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

type Project = {
  name: string;
  url: string;
  desc: string;
  color: string;
  stack: string[];
  slug?: string;
  category: "Full-Stack" | "Quant" | "ML" | "Tools" | "Whimsy";
};

const projects: Project[] = [
  {
    name: "AudioCNN — ResNet Classifier & Visualizer",
    url: "https://cnn-audio-vis.vercel.app/",
    desc: "CNN based audio classifications with Layer Visualizations.",
    color: "#4F46E5",
    stack: ["PyTorch", "FastAPI", "Next.js", "AWS"],
    slug: "audiocnn",
    category: "Full-Stack",
  },
  {
    name: "Multi-Agent Reasoning",
    url: "https://github.com/achntj/multi-agent-reasoning",
    desc: "Agent workflows for strategic debate & tool use.",
    color: "#D946EF",
    stack: ["FastAPI", "Streamlit", "Ollama"],
    slug: "multi-agent-reasoning",
    category: "Full-Stack",
  },
  {
    name: "Value Finder",
    url: "https://github.com/achntj/value-finder",
    desc: "Surfaces high-signal links from noisy sources. Learns preferences.",
    color: "#EF4444",
    stack: ["FastAPI", "Playwright", "Ollama", "sklearn"],
    slug: "value-finder",
    category: "Full-Stack",
  },
  {
    name: "Quantitative Strategies — Portfolio Optimization",
    url: "https://github.com/achntj/Quantitative-Strategies",
    desc: "MPT, risk budgeting, Black-Littermn with Shrinkage, and Monte Carlo tooling.",
    color: "#A855F7",
    stack: ["Python", "NumPy", "ta-lib", "Matplotlib", "pandas"],
    slug: "quantitative-strategies",
    category: "Quant",
  },
  {
    name: "Deep Learning from Scratch",
    url: "https://github.com/achntj/deep-learning-from-scratch",
    desc: "Minimal from-scratch implementations of core DL components and PyTorch Classes.",
    color: "#06B6D4",
    stack: ["Python", "NumPy", "PyTorch"],
    slug: "dlfs",
    category: "ML",
  },
  {
    name: "Slimlist",
    url: "https://github.com/achntj/slimlist",
    desc: "Local-first productivity suite.",
    color: "#2563EB",
    stack: ["Next.js", "Typescript", "Tailwind", "SQLite"],
    slug: "slimlist",
    category: "Full-Stack",
  },
  {
    name: "AppTrack",
    url: "https://github.com/achntj/apptrack",
    desc: "Lightweight job application tracker.",
    color: "#16A34A",
    stack: ["Next.js", "Typescript", "Prisma", "SQLite"],
    slug: "apptrack",
    category: "Full-Stack",
  },
  {
    name: "Statistical Arbitrage Engine",
    url: "https://github.com/achntj/statistical-arbitrage",
    desc: "Hidden Markov Model over Ornstein–Uhlenbeck pairs trading with microstructure filter; 2018–2024 backtests.",
    color: "#10B981",
    stack: ["Python", "scikit-learn", "statsmodels", "pandas"],
    slug: "statistical-arbitrage",
    category: "Quant",
  },

  {
    name: "NightVision",
    url: "https://github.com/achntj/NightVision",
    desc: "Low-light image enhancement experiments.",
    color: "#F97316",
    stack: ["Python", "OpenCV", "PyTorch"],
    slug: "nightvision",
    category: "ML",
  },
  {
    name: "Depression Detection",
    url: "https://github.com/achntj/depression-detection",
    desc: "Classic NLP on tweets (logistic regression baseline).",
    color: "#22D3EE",
    stack: ["Python", "scikit-learn"],
    slug: "depression-detection",
    category: "ML",
  },
  {
    name: "Stegify",
    url: "https://github.com/achntj/stegify",
    desc: "Embed encrypted messages inside images.",
    color: "#84CC16",
    stack: ["Python"],
    slug: "stegify",
    category: "Tools",
  },
  {
    name: "Bookmarks → Notion",
    url: "https://github.com/achntj/bookmarks-notion",
    desc: "Export browser bookmarks to Notion-ready data.",
    color: "#EAB308",
    stack: ["Python"],
    slug: "bookmarks-notion",
    category: "Tools",
  },
  {
    name: "Zsh Guide",
    url: "https://github.com/achntj/zshguide",
    desc: "A cleaner mirror of Peter Stephenson’s Zsh Guide.",
    color: "#14B8A6",
    stack: ["Next.js", "TypeScript"],
    slug: "zshguide",
    category: "Tools",
  },
  {
    name: "Patrick Bateman Card Generator",
    url: "https://bateman.achintyajha.com",
    desc: "An over-engineered business card (from the movie American Psycho).",
    color: "#9333EA",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    slug: "bateman-card",
    category: "Whimsy",
  },
];

const categoryMeta: Record<Project["category"], { label: string; Icon: any }> =
  {
    "Full-Stack": { label: "Full-Stack", Icon: Squares2X2Icon },
    Quant: { label: "Quant", Icon: ChartBarIcon },
    ML: { label: "ML", Icon: CpuChipIcon },
    Tools: { label: "Tools", Icon: WrenchScrewdriverIcon },
    Whimsy: { label: "Whimsy", Icon: PuzzlePieceIcon },
  };

const categories = [
  "All",
  "Full-Stack",
  "Quant",
  "ML",
  "Tools",
  "Whimsy",
] as const;

/* --- palette helpers for soft card tints --- */
function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function mixWithWhite(hex: string, whiteRatio = 0.92) {
  const { r, g, b } = hexToRgb(hex);
  const mix = (c: number) => Math.round(255 * whiteRatio + c * (1 - whiteRatio));
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

function mixForBorder(hex: string, whiteRatio = 0.82) {
  const { r, g, b } = hexToRgb(hex);
  const mix = (c: number) => Math.round(255 * whiteRatio + c * (1 - whiteRatio));
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

function mixForDot(hex: string, whiteRatio = 0.65) {
  const { r, g, b } = hexToRgb(hex);
  const mix = (c: number) => Math.round(255 * whiteRatio + c * (1 - whiteRatio));
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

function cardStyle(color: string): CSSProperties {
  return {
    ["--card-bg" as any]: mixWithWhite(color, 0.92),
    ["--card-border" as any]: mixForBorder(color, 0.82),
    ["--card-dot" as any]: mixForDot(color, 0.65),
  } as CSSProperties;
}

export default function ProjectsClient() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter(
      (p) => p.category === (active as Project["category"]),
    );
  }, [active]);

  return (
    <>
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
              className={[
                "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 type-base tracking-[0.08em] font-[560] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[rgba(var(--accent-rgb),0.35)] focus-visible:outline-offset-2",
                isActive
                  ? "bg-[rgba(var(--accent-rgb),0.16)] text-[color:var(--ink)] border-[color:rgba(var(--accent-rgb),0.4)] shadow-[0_16px_40px_-30px_rgba(34,40,34,0.55)]"
                  : "bg-[color:var(--pill)] border-[color:var(--hairline)] hover:border-[rgba(var(--accent-rgb),0.36)] hover:bg-[rgba(var(--accent-rgb),0.1)]",
              ].join(" ")}
            >
              {Icon && (
                <Icon className="h-4 w-4 opacity-80 text-[color:var(--muted-ink)]" />
              )}
              <span className="text-[color:var(--ink)]">
                {c === "All"
                  ? "All"
                  : categoryMeta[c as Project["category"]].label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, idx) => (
          <a key={p.name} href={p.url} target="_blank" rel="noreferrer">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.02 * idx }}
              style={cardStyle(p.color)}
              className={[
                "group relative overflow-hidden rounded-2xl border p-5 md:p-6 h-full",
                "bg-[var(--card-bg)] border-[color:var(--card-border)]",
                "hover:-translate-y-0.5 shadow-[0_22px_52px_-38px_rgba(34,40,34,0.65)] backdrop-blur-[0.5px]",
                "dark:bg-[#0f110f] dark:border-[color:rgba(120,136,125,0.28)]",
              ].join(" ")}
            >
              <div
                className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full opacity-70"
                style={{ backgroundColor: "var(--card-dot)" }}
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold leading-tight text-[color:var(--ink)] tracking-[0.02em]">
                    {p.name}
                  </h3>
                  <div className="mt-1 inline-flex items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 bg-[color:var(--pill)] border-[color:var(--hairline)] text-[color:var(--soft-ink)]">
                      {categoryMeta[p.category].label}
                    </span>
                  </div>
                </div>
                <div className="opacity-70 group-hover:opacity-100 text-[color:var(--muted-ink)]">
                  <ArrowUpRightIcon className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-3 type-secondary text-[color:var(--muted-ink)] leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="type-caption rounded-full px-2 py-1 bg-[color:var(--pill)] border border-[color:var(--hairline)] text-[color:var(--soft-ink)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="type-secondary text-[color:var(--soft-ink)] mt-8">
          Nothing here yet. Try another filter.
        </div>
      )}
    </>
  );
}
