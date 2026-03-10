#!/usr/bin/env node
import { parseArgs, requireArg, getItems, writeMaybe } from "./lib/github-project.mjs";

const args = parseArgs(process.argv.slice(2));
const owner = requireArg(args, "owner");
const projectNumber = Number(requireArg(args, "project-number"));
const limit = Number(args.limit ?? "100");
const outFile = args.out;

const payload = getItems(owner, projectNumber, limit);
const output = JSON.stringify(payload, null, 2);

writeMaybe(outFile, output);
console.log(output);
