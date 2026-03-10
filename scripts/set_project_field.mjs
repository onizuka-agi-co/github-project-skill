#!/usr/bin/env node
import {
  parseArgs,
  requireArg,
  ghJson,
  getProject,
  getFields,
  findFieldByName,
  findOptionByName,
} from "./lib/github-project.mjs";

const args = parseArgs(process.argv.slice(2));
const owner = requireArg(args, "owner");
const projectNumber = Number(requireArg(args, "project-number"));
const itemId = requireArg(args, "item-id");
const fieldName = requireArg(args, "field-name");

const modes = ["text", "date", "number", "option", "clear"].filter((name) => args[name] !== undefined);
if (modes.length !== 1) {
  throw new Error("Provide exactly one of --text, --date, --number, --option, or --clear");
}

const project = getProject(owner, projectNumber);
const fields = getFields(owner, projectNumber);
const field = findFieldByName(fields, fieldName);

if (!field) {
  throw new Error(`Field '${fieldName}' was not found in project ${projectNumber} for owner '${owner}'.`);
}

const command = [
  "project",
  "item-edit",
  "--id",
  itemId,
  "--project-id",
  project.id,
  "--field-id",
  field.id,
  "--format",
  "json",
];

if (args.text !== undefined) {
  command.push("--text", String(args.text));
} else if (args.date !== undefined) {
  command.push("--date", String(args.date));
} else if (args.number !== undefined) {
  command.push("--number", String(args.number));
} else if (args.option !== undefined) {
  const option = findOptionByName(field, String(args.option));
  if (!option) {
    throw new Error(`Option '${args.option}' was not found on field '${fieldName}'.`);
  }

  command.push("--single-select-option-id", option.id);
} else {
  command.push("--clear");
}

console.log(JSON.stringify(ghJson(command), null, 2));
