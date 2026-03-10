#!/usr/bin/env node
import { parseArgs, requireArg, getProject, getFields, writeMaybe } from "./lib/github-project.mjs";

const args = parseArgs(process.argv.slice(2));
const owner = requireArg(args, "owner");
const projectNumber = Number(requireArg(args, "project-number"));
const outFile = args.out;

const project = getProject(owner, projectNumber);
const fields = getFields(owner, projectNumber).map((field) => ({
  id: field.id,
  name: field.name,
  type: field.type,
  options: Array.isArray(field.options)
    ? field.options.map((option) => ({
        id: option.id,
        name: option.name,
      }))
    : [],
}));

const output = JSON.stringify(
  {
    owner,
    projectNumber,
    projectId: project.id,
    title: project.title,
    url: project.url,
    fields,
  },
  null,
  2,
);

writeMaybe(outFile, output);
console.log(output);
