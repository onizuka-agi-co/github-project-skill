import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

export function parseArgs(argv) {
  const args = {};

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) {
      continue;
    }

    const key = token.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }

    args[key] = next;
    i += 1;
  }

  return args;
}

export function requireArg(args, name) {
  const value = args[name];
  if (value === undefined || value === null || value === "") {
    throw new Error(`Missing required argument --${name}`);
  }

  return value;
}

export function ghJson(args) {
  const result = spawnSync("gh", args, {
    encoding: "utf8",
    stdio: ["inherit", "pipe", "pipe"],
  });

  if (result.status !== 0) {
    throw new Error(result.stderr.trim() || `gh exited with code ${result.status}`);
  }

  return JSON.parse(result.stdout);
}

export function ghText(args) {
  const result = spawnSync("gh", args, {
    encoding: "utf8",
    stdio: ["inherit", "pipe", "pipe"],
  });

  if (result.status !== 0) {
    throw new Error(result.stderr.trim() || `gh exited with code ${result.status}`);
  }

  return result.stdout.trim();
}

export function getProject(owner, projectNumber) {
  return ghJson([
    "project",
    "view",
    String(projectNumber),
    "--owner",
    owner,
    "--format",
    "json",
  ]);
}

export function getFields(owner, projectNumber) {
  const payload = ghJson([
    "project",
    "field-list",
    String(projectNumber),
    "--owner",
    owner,
    "--format",
    "json",
  ]);

  return payload.fields ?? [];
}

export function getItems(owner, projectNumber, limit) {
  return ghJson([
    "project",
    "item-list",
    String(projectNumber),
    "--owner",
    owner,
    "--limit",
    String(limit),
    "--format",
    "json",
  ]);
}

export function findFieldByName(fields, fieldName) {
  const needle = fieldName.toLowerCase();
  return fields.find((field) => String(field.name).toLowerCase() === needle);
}

export function findOptionByName(field, optionName) {
  const options = Array.isArray(field.options) ? field.options : [];
  const needle = optionName.toLowerCase();
  return options.find((option) => String(option.name).toLowerCase() === needle);
}

export function writeMaybe(filePath, value) {
  if (!filePath) {
    return;
  }

  fs.writeFileSync(filePath, value);
}

export function skillRootFromMeta(importMetaUrl) {
  const scriptDir = path.dirname(fileURLToPath(importMetaUrl));
  return path.resolve(scriptDir, "..");
}
