#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function read(relativePath) {
  const absolutePath = path.join(rootDir, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing required file: ${relativePath}`);
  }

  return fs.readFileSync(absolutePath, "utf8");
}

function expectIncludes(label, content, expected) {
  if (!content.includes(expected)) {
    throw new Error(`${label} is missing expected text: ${expected}`);
  }
}

function expectRegex(label, content, pattern) {
  if (!pattern.test(content)) {
    throw new Error(`${label} failed pattern check: ${pattern}`);
  }
}

const readme = read("README.md");
const readmeJa = read("README.ja.md");
const skill = read("SKILL.md");
const agentMetadata = read("agents/openai.yaml");
const docsConfig = read("docs/.vitepress/config.ts");
const contributing = read("CONTRIBUTING.md");
const contributingJa = read("CONTRIBUTING.ja.md");
const docsHome = read("docs/index.md");
const docsHomeJa = read("docs/ja/index.md");

const requiredFiles = [
  "docs/guide/getting-started.md",
  "docs/guide/usage.md",
  "docs/guide/cli-reference.md",
  "docs/guide/architecture.md",
  "docs/guide/troubleshooting.md",
  "docs/ja/guide/getting-started.md",
  "docs/ja/guide/usage.md",
  "docs/ja/guide/cli-reference.md",
  "docs/ja/guide/architecture.md",
  "docs/ja/guide/troubleshooting.md",
  "docs/public/logo.svg",
  "docs/public/hero.svg",
  "docs/public/favicon.svg",
  "docs/public/social-card.svg",
  ".github/workflows/repo-qa.yml",
  ".github/workflows/docs-qa.yml",
  ".github/workflows/deploy-docs.yml",
  ".github/dependabot.yml",
];

for (const relativePath of requiredFiles) {
  read(relativePath);
}

expectIncludes("README.md", readme, "./README.ja.md");
expectIncludes("README.md", readme, "./CONTRIBUTING.md");
expectIncludes("README.md", readme, "https://onizuka-agi-co.github.io/github-project-skill/");

expectIncludes("README.ja.md", readmeJa, "./README.md");
expectIncludes("README.ja.md", readmeJa, "./CONTRIBUTING.ja.md");
expectIncludes("README.ja.md", readmeJa, "https://onizuka-agi-co.github.io/github-project-skill/ja/");

expectRegex("SKILL.md", skill, /^name:\s*github-project\s*$/m);
expectIncludes("SKILL.md", skill, "./scripts/get_project_schema.mjs");
expectIncludes("SKILL.md", skill, "./scripts/set_project_field.mjs");

expectIncludes("agents/openai.yaml", agentMetadata, "$github-project");

expectIncludes("docs/.vitepress/config.ts", docsConfig, 'const base = "/github-project-skill/"');
expectIncludes("docs/.vitepress/config.ts", docsConfig, "social-card.svg");
expectIncludes("docs/.vitepress/config.ts", docsConfig, 'text: "CLI Reference"');
expectIncludes("docs/.vitepress/config.ts", docsConfig, 'text: "CLI リファレンス"');

expectIncludes("docs/index.md", docsHome, "/guide/cli-reference");
expectIncludes("docs/ja/index.md", docsHomeJa, "/ja/guide/cli-reference");

expectIncludes("CONTRIBUTING.md", contributing, "node ./scripts/verify_repo_surfaces.mjs");
expectIncludes("CONTRIBUTING.md", contributing, "npm ci && npm run docs:build");
expectIncludes("CONTRIBUTING.ja.md", contributingJa, "node ./scripts/verify_repo_surfaces.mjs");
expectIncludes("CONTRIBUTING.ja.md", contributingJa, "npm ci && npm run docs:build");

console.log(
  JSON.stringify(
    {
      message: "Repository surface checks passed.",
      checkedFiles: requiredFiles.length + 9,
      checkedPages: [
        "README.md",
        "README.ja.md",
        "SKILL.md",
        "agents/openai.yaml",
        "docs/index.md",
        "docs/ja/index.md",
        "docs/.vitepress/config.ts",
        "CONTRIBUTING.md",
        "CONTRIBUTING.ja.md",
      ],
    },
    null,
    2,
  ),
);
