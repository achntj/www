"use client";

import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  Squares2X2Icon,
  ChartBarIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

type ProjectCategory = "Full-Stack" | "Quant" | "ML" | "Tools";

type Project = {
  name: string;
  url: string;
  desc: string;
  color: string;
  stack: string[];
  slug?: string;
  categories: ProjectCategory[];
};

const projects: Project[] = [
  {
    name: "Statistical Arbitrage Engine",
    url: "https://github.com/achntj/statistical-arbitrage",
    desc: "Regime-aware pairs trading research using HMM state detection, OU spreads, and microstructure filters across 2018-2024 backtests.",
    color: "#10B981",
    stack: ["Python", "scikit-learn", "statsmodels", "pandas"],
    slug: "statistical-arbitrage",
    categories: ["Quant"],
  },
  {
    name: "Quantitative Strategies",
    url: "https://github.com/achntj/Quantitative-Strategies",
    desc: "Portfolio research covering MPT, risk budgeting, Black-Litterman with shrinkage, and Monte Carlo analysis.",
    color: "#A855F7",
    stack: ["Python", "NumPy", "ta-lib", "Matplotlib", "pandas"],
    slug: "quantitative-strategies",
    categories: ["Quant"],
  },
  {
    name: "AudioCNN — ResNet Classifier & Visualizer",
    url: "https://cnn-audio-vis.vercel.app/",
    desc: "End-to-end audio classification pipeline with ResNet modeling, layer visualizations, and an interactive inference interface.",
    color: "#4F46E5",
    stack: ["PyTorch", "FastAPI", "Next.js", "AWS"],
    slug: "audiocnn",
    categories: ["Full-Stack", "ML"],
  },
  {
    name: "Value Finder",
    url: "https://github.com/achntj/value-finder",
    desc: "Ranking pipeline for extracting high-signal links from noisy sources using retrieval, filtering, and user-feedback loops.",
    color: "#EF4444",
    stack: ["FastAPI", "Playwright", "Ollama", "sklearn"],
    slug: "value-finder",
    categories: ["Full-Stack"],
  },
  {
    name: "Deep Learning from Scratch",
    url: "https://github.com/achntj/deep-learning-from-scratch",
    desc: "From-scratch implementations of core deep learning components used to study optimization, backpropagation, and model behavior.",
    color: "#06B6D4",
    stack: ["Python", "NumPy", "PyTorch"],
    slug: "dlfs",
    categories: ["ML"],
  },
  {
    name: "NightVision",
    url: "https://github.com/achntj/NightVision",
    desc: "Low-light image enhancement experiments combining classical preprocessing and deep learning models.",
    color: "#F97316",
    stack: ["Python", "OpenCV", "PyTorch"],
    slug: "nightvision",
    categories: ["ML"],
  },
  {
    name: "Depression Detection",
    url: "https://github.com/achntj/depression-detection",
    desc: "Baseline NLP study on social text using classical feature engineering and logistic regression.",
    color: "#22D3EE",
    stack: ["Python", "scikit-learn"],
    slug: "depression-detection",
    categories: ["ML"],
  },
  {
    name: "Personal Lab",
    url: "https://github.com/achntj/lab",
    desc: "Local workspace application integrating notes, tasks, timers, and secure access patterns in a desktop workflow.",
    color: "#0EA5A4",
    stack: ["Next.js", "Typescript", "Prisma", "SQLite", "Tailwind", "Tauri"],
    slug: "personal-lab",
    categories: ["Full-Stack"],
  },
  {
    name: "Slimlist",
    url: "https://github.com/achntj/slimlist",
    desc: "Local-first productivity tool focused on lightweight task capture and offline usability.",
    color: "#2563EB",
    stack: ["Next.js", "Typescript", "Tailwind", "SQLite"],
    slug: "slimlist",
    categories: ["Full-Stack"],
  },
  {
    name: "Stegify",
    url: "https://github.com/achntj/stegify",
    desc: "Utility for embedding encrypted messages inside image files.",
    color: "#84CC16",
    stack: ["Python"],
    slug: "stegify",
    categories: ["Tools"],
  },
  {
    name: "Bookmarks → Notion",
    url: "https://github.com/achntj/bookmarks-notion",
    desc: "Small data utility for transforming browser bookmarks into a Notion-ready import format.",
    color: "#EAB308",
    stack: ["Python"],
    slug: "bookmarks-notion",
    categories: ["Tools"],
  },
  {
    name: "Zsh Guide",
    url: "https://github.com/achntj/zshguide",
    desc: "Readable web edition of Peter Stephenson's Zsh Guide with a cleaner browsing experience.",
    color: "#14B8A6",
    stack: ["Next.js", "TypeScript"],
    slug: "zshguide",
    categories: ["Tools"],
  },
];

const categoryMeta: Record<ProjectCategory, { label: string; Icon: any }> = {
  "Full-Stack": { label: "Full-Stack", Icon: Squares2X2Icon },
  Quant: { label: "Quant", Icon: ChartBarIcon },
  ML: { label: "ML", Icon: CpuChipIcon },
  Tools: { label: "Tools", Icon: WrenchScrewdriverIcon },
};

const categories = ["All", "Full-Stack", "Quant", "ML", "Tools"] as const;

/* --- palette helpers for soft card tints --- */
function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function mixWithWhite(hex: string, whiteRatio = 0.92) {
  const { r, g, b } = hexToRgb(hex);
  const mix = (c: number) =>
    Math.round(255 * whiteRatio + c * (1 - whiteRatio));
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

function mixForBorder(hex: string, whiteRatio = 0.82) {
  const { r, g, b } = hexToRgb(hex);
  const mix = (c: number) =>
    Math.round(255 * whiteRatio + c * (1 - whiteRatio));
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

function mixForDot(hex: string, whiteRatio = 0.65) {
  const { r, g, b } = hexToRgb(hex);
  const mix = (c: number) =>
    Math.round(255 * whiteRatio + c * (1 - whiteRatio));
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

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(active as ProjectCategory));

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => {
          const isActive = c === active;
          const Meta = c === "All" ? null : categoryMeta[c as ProjectCategory];
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
                {c === "All" ? "All" : Meta?.label}
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
                  <div className="mt-1 inline-flex flex-wrap items-center gap-2 text-xs">
                    {p.categories.map((category) => (
                      <span
                        key={category}
                        className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 bg-[color:var(--pill)] border-[color:var(--hairline)] text-[color:var(--soft-ink)]"
                      >
                        {categoryMeta[category].label}
                      </span>
                    ))}
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
