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
    desc: "Train & visualize CNNs on audio.",
    color: "#4F46E5",
    stack: ["PyTorch", "FastAPI", "Next.js"],
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
    stack: ["Next.js", "TypeScript", "sklearn"],
    slug: "value-finder",
    category: "Full-Stack",
  },
  {
    name: "Slimlist",
    url: "https://github.com/achntj/slimlist",
    desc: "Local-first productivity suite.",
    color: "#2563EB",
    stack: ["Next.js", "Tailwind", "SQLite"],
    slug: "slimlist",
    category: "Full-Stack",
  },
  {
    name: "AppTrack",
    url: "https://github.com/achntj/apptrack",
    desc: "Lightweight job application tracker.",
    color: "#16A34A",
    stack: ["Next.js", "Prisma", "SQLite"],
    slug: "apptrack",
    category: "Full-Stack",
  },
  {
    name: "Statistical Arbitrage Engine",
    url: "https://github.com/achntj/statistical-arbitrage",
    desc: "Clustering + cointegration pair trading with backtests.",
    color: "#10B981",
    stack: ["Python", "scikit-learn", "statsmodels", "pandas"],
    slug: "statistical-arbitrage",
    category: "Quant",
  },
  {
    name: "Quantitative Strategies — Portfolio Optimization",
    url: "https://github.com/achntj/Quantitative-Strategies",
    desc: "MPT, risk budgeting, and Monte Carlo tooling.",
    color: "#A855F7",
    stack: ["Python", "NumPy", "Matplotlib", "pandas"],
    slug: "quantitative-strategies",
    category: "Quant",
  },
  {
    name: "Deep Learning from Scratch",
    url: "https://github.com/achntj/deep-learning-from-scratch",
    desc: "Minimal NumPy implementations of core DL components.",
    color: "#06B6D4",
    stack: ["Python", "NumPy"],
    slug: "dlfs",
    category: "ML",
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
    stack: ["TypeScript", "Node"],
    slug: "bookmarks-notion",
    category: "Tools",
  },
  {
    name: "Zsh Guide",
    url: "https://github.com/achntj/zshguide",
    desc: "A cleaner mirror of Peter Stephenson’s Zsh Guide.",
    color: "#14B8A6",
    stack: ["Next.js", "TypeScript", "MDX"],
    slug: "zshguide",
    category: "Tools",
  },
  {
    name: "Patrick Bateman Card Generator",
    url: "https://bateman.achintyajha.com",
    desc: "An over-engineered business card (American Psycho).",
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

/* --- color helpers for soft card tints --- */
function hexToRgb(hex: string) {
  const m = hex.trim().replace("#", "");
  const num = parseInt(m, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}
function mixWithWhite(hex: string, whiteRatio = 0.88) {
  const { r, g, b } = hexToRgb(hex);
  const mix = (c: number) =>
    Math.round(255 * whiteRatio + c * (1 - whiteRatio));
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}
function mixForBorder(hex: string, whiteRatio = 0.72) {
  const { r, g, b } = hexToRgb(hex);
  const mix = (c: number) =>
    Math.round(255 * whiteRatio + c * (1 - whiteRatio));
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}
function cardStyle(color: string): CSSProperties {
  return {
    ["--card-bg" as any]: mixWithWhite(color, 0.9),
    ["--card-border" as any]: mixForBorder(color, 0.78),
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
                "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm",
                isActive
                  ? "bg-emerald-500 text-emerald-50 border-emerald-700"
                  : "bg-stone-50 dark:bg-stone-900 border-stone-300 dark:border-stone-700 hover:bg-emerald-50/70 dark:hover:bg-stone-800",
              ].join(" ")}
            >
              {Icon && (
                <Icon className="h-4 w-4 opacity-80 text-stone-800 dark:text-stone-200" />
              )}
              <span className="text-stone-900 dark:text-stone-100">
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
                "bg-[var(--card-bg)] border-[var(--card-border)]",
                "hover:-translate-y-0.5",
                "dark:bg-stone-900 dark:border-stone-700",
              ].join(" ")}
            >
              <div
                className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full opacity-70"
                style={{ backgroundColor: p.color }}
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold leading-tight text-stone-900 dark:text-stone-100">
                    {p.name}
                  </h3>
                  <div className="mt-1 inline-flex items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 bg-white/70 dark:bg-stone-800 border-stone-300/70 dark:border-stone-700 text-stone-800 dark:text-stone-200">
                      {categoryMeta[p.category].label}
                    </span>
                  </div>
                </div>
                <div className="opacity-70 group-hover:opacity-100 text-stone-700 dark:text-stone-200">
                  <ArrowUpRightIcon className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-3 text-sm text-stone-700 dark:text-stone-300">
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs rounded-full px-2 py-1 bg-white/70 dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 text-stone-700 dark:text-stone-300"
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
        <div className="text-sm text-stone-600 dark:text-stone-400 mt-8">
          Nothing here yet. Try another filter.
        </div>
      )}
    </>
  );
}
