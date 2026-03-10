import { defineConfig } from "vitepress";

const repo = "onizuka-agi-co/github-project-skill";
const siteUrl = "https://onizuka-agi-co.github.io/github-project-skill/";
const base = "/github-project-skill/";

export default defineConfig({
  title: "GitHub Project Skill",
  description: "Cross-platform Codex skill for GitHub Projects with gh CLI and portable Node helpers.",
  base,
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: siteUrl,
  },
  head: [
    ["link", { rel: "icon", href: `${base}favicon.svg`, type: "image/svg+xml" }],
    ["meta", { name: "theme-color", content: "#0f172a" }],
    ["meta", { property: "og:title", content: "GitHub Project Skill" }],
    ["meta", { property: "og:description", content: "Cross-platform Codex skill for GitHub Projects with gh CLI and portable Node helpers." }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: siteUrl }],
    ["meta", { property: "og:image", content: `${siteUrl}social-card.svg` }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "GitHub Project Skill" }],
    ["meta", { name: "twitter:description", content: "Inspect schemas, add work items, update fields, and export project state from Codex." }],
    ["meta", { name: "twitter:image", content: `${siteUrl}social-card.svg` }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "GitHub Project Skill",
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "CLI Reference", link: "/guide/cli-reference" },
      { text: "日本語", link: "/ja/" },
      { text: "GitHub", link: `https://github.com/${repo}` },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Usage", link: "/guide/usage" },
            { text: "CLI Reference", link: "/guide/cli-reference" },
            { text: "Architecture", link: "/guide/architecture" },
            { text: "Troubleshooting", link: "/guide/troubleshooting" },
          ],
        },
      ],
      "/ja/guide/": [
        {
          text: "ガイド",
          items: [
            { text: "はじめに", link: "/ja/guide/getting-started" },
            { text: "使い方", link: "/ja/guide/usage" },
            { text: "CLI リファレンス", link: "/ja/guide/cli-reference" },
            { text: "アーキテクチャ", link: "/ja/guide/architecture" },
            { text: "トラブルシュート", link: "/ja/guide/troubleshooting" },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: `https://github.com/${repo}` }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026 ONIZUKA AGI Co.",
    },
    search: {
      provider: "local",
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/guide/getting-started" },
          { text: "CLI Reference", link: "/guide/cli-reference" },
          { text: "日本語", link: "/ja/" },
          { text: "GitHub", link: `https://github.com/${repo}` },
        ],
      },
    },
    ja: {
      label: "日本語",
      lang: "ja",
      link: "/ja/",
      themeConfig: {
        nav: [
          { text: "ガイド", link: "/ja/guide/getting-started" },
          { text: "CLI リファレンス", link: "/ja/guide/cli-reference" },
          { text: "English", link: "/" },
          { text: "GitHub", link: `https://github.com/${repo}` },
        ],
      },
    },
  },
});
