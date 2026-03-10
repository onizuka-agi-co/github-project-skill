# GitHub Project Commands

Use this file as the quick command reference for the `github-project` skill.

## Inspect

```bash
gh project list --owner onizuka-agi-co --format json
gh project view 1 --owner onizuka-agi-co --format json
gh project field-list 1 --owner onizuka-agi-co --format json
gh project item-list 1 --owner onizuka-agi-co --limit 100 --format json
```

## Create

```bash
gh project create --owner onizuka-agi-co --title "Roadmap"
gh project field-create 1 --owner onizuka-agi-co --name "Priority" --data-type "SINGLE_SELECT" --single-select-options "P0,P1,P2"
gh project link 1 --owner onizuka-agi-co --repo onizuka-agi-co/skills
```

## Add Items

```bash
gh project item-create 1 --owner onizuka-agi-co --title "Draft task" --body "Describe the work"
gh project item-add 1 --owner onizuka-agi-co --url https://github.com/onizuka-agi-co/skills/issues/1
```

## Edit Items

```bash
gh project item-edit --id <item-id> --project-id <project-id> --field-id <field-id> --single-select-option-id <option-id>
gh project item-edit --id <item-id> --project-id <project-id> --field-id <field-id> --date 2026-03-10
gh project item-edit --id <item-id> --project-id <project-id> --field-id <field-id> --clear
```

## Practical Notes

- Use `gh auth status` before touching a project.
- Ensure the token has `project` scope.
- Prefer `--format json` plus the bundled Node helpers when `jq` is unavailable.
- Update one field per `gh project item-edit` invocation.
