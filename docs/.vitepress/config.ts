import { defineConfig } from "vitepress";

const repo = "onizuka-agi-co/github-project-skill";

export default defineConfig({
  title: "GitHub Project Skill",
  description: "Cross-platform Codex skill for GitHub Projects with gh CLI and portable Node helpers.",
  base: "/github-project-skill/",
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: "https://onizuka-agi-co.github.io/github-project-skill/",
  },
  head: [
    ["link", { rel: "icon", href: "/github-project-skill/favicon.svg", type: "image/svg+xml" }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "GitHub Project Skill",
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Usage", link: "/guide/usage" },
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
          { text: "Usage", link: "/guide/usage" },
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
          { text: "使い方", link: "/ja/guide/usage" },
          { text: "English", link: "/" },
          { text: "GitHub", link: `https://github.com/${repo}` },
        ],
      },
    },
  },
});
