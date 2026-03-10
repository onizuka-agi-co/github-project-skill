#!/usr/bin/env node
import { parseArgs, requireArg, ghJson } from "./lib/github-project.mjs";

const args = parseArgs(process.argv.slice(2));
const owner = requireArg(args, "owner");
const projectNumber = Number(requireArg(args, "project-number"));
const url = requireArg(args, "url");

console.log(
  JSON.stringify(
    ghJson([
      "project",
      "item-add",
      String(projectNumber),
      "--owner",
      owner,
      "--url",
      url,
      "--format",
      "json",
    ]),
    null,
    2,
  ),
);
