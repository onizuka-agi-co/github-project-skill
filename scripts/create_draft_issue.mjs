#!/usr/bin/env node
import { parseArgs, requireArg, ghJson } from "./lib/github-project.mjs";

const args = parseArgs(process.argv.slice(2));
const owner = requireArg(args, "owner");
const projectNumber = Number(requireArg(args, "project-number"));
const title = requireArg(args, "title");
const body = args.body;

const command = [
  "project",
  "item-create",
  String(projectNumber),
  "--owner",
  owner,
  "--title",
  title,
  "--format",
  "json",
];

if (body) {
  command.push("--body", body);
}

console.log(JSON.stringify(ghJson(command), null, 2));
