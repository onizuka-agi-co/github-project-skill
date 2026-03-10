#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { parseArgs, skillRootFromMeta } from "./lib/github-project.mjs";

const args = parseArgs(process.argv.slice(2));
const skillSourcePath = path.resolve(args["skill-source-path"] ?? skillRootFromMeta(import.meta.url));
const codexHome = path.resolve(
  args["codex-home"] ?? process.env.CODEX_HOME ?? path.join(process.env.USERPROFILE ?? process.env.HOME, ".codex"),
);

const skillFile = path.join(skillSourcePath, "SKILL.md");
if (!fs.existsSync(skillFile)) {
  throw new Error(`SKILL.md was not found under '${skillSourcePath}'.`);
}

const skillFileText = fs.readFileSync(skillFile, "utf8");
const match = skillFileText.match(/^name:\s*(.+?)\s*$/m);
const skillName = args["skill-name"] ?? (match ? match[1].trim().replace(/^['"]|['"]$/g, "") : path.basename(skillSourcePath));

const skillsDir = path.join(codexHome, "skills");
const linkPath = path.join(skillsDir, skillName);

fs.mkdirSync(skillsDir, { recursive: true });

if (fs.existsSync(linkPath)) {
  const stat = fs.lstatSync(linkPath);
  if (stat.isSymbolicLink()) {
    const existingTarget = path.resolve(path.dirname(linkPath), fs.readlinkSync(linkPath));
    if (existingTarget === skillSourcePath) {
      console.log(
        JSON.stringify(
          {
            message: "Codex skill link already exists.",
            name: skillName,
            source: skillSourcePath,
            link: linkPath,
          },
          null,
          2,
        ),
      );
      process.exit(0);
    }
  }

  throw new Error(`A different item already exists at '${linkPath}'. Remove it first or pass --skill-name with another value.`);
}

const linkType = process.platform === "win32" ? "junction" : "dir";
fs.symlinkSync(skillSourcePath, linkPath, linkType);

console.log(
  JSON.stringify(
    {
      message: "Created Codex skill link.",
      name: skillName,
      source: skillSourcePath,
      link: linkPath,
      type: linkType,
    },
    null,
    2,
  ),
);
