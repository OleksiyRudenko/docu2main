---
id: import-static
title: Intro to importing static docs from external projects
sidebar_label: Importing static docs
---

## How to import static content from external repos?

Make sure any changes are committed.

When in this centralized documentation project root run the following command:
```
git subrepo clone <url.git> docs/<external-repo-name>
```

This command will clone an external repo into a sub-directory
under `docs/`.

Next, refer files from imported repo in `sidebars.js` to have
those exposed in the site's side bar
(e.g. `external-repo-name/document-id`).

By default local clone is synced with an external source repo
`master` branch.

## I do not need content from external repo anymore

When in project root run the following command:
```
git subrepo clean docs/<external-repo-name> --force
```

Delete the sub-directory with an external repo clone you do not need,
fix `sidebars.js`, then build and deploy the site.

## How to develop documentation?

Firstly, follow the
[official guide](https://v2.docusaurus.io/docs/installation#running-the-development-server).

The following command will start a development server:
```
yarn start
```

Whenever imported content requires any changes introduce those
in a base repo (on `master` branch) and re-import it
into the documentation site with `yarn update`.

:::caution
Actually, `git-subrepo` allows pushing local changes to imported content
to a relevant base repo. Make sure this is an accepted method of
contribution to a base repo.
:::

`.gitrepo` file in a sub-directory is an evidence of imported content.

It is recommended that documentation files from external repos
have their own headers like the following:
```
---
id: id-unique-across-an-imported-repo
title: Title of the document to show in the sidebar
---
```

In `sidebars.js` refer to every imported document using its `id`
prepended with imported repo directory name.

For example, if `docu2inc` repo is imported with `README.md`
file having `intro` as its `id` then `sidebars.js` should refer to
it as `docu2inc/intro` (not `docu2inc/README`). If a file
(e.g. `extra.md`) has no `id` assigned then it should be referred to
as `docu2inc/extra` (without extension).

Note that all files from an imported repo are accessible.
However, only those explicitly described in `sidebars.js` will
be exposed in the site's side bar.

:::warning
Unfortunately, it is not possible to update imported content
on-the-fly. You will need to stop development server,
update imported content with `yarn update` and launch
development server with `yarn start` again.
:::

## How to keep this site in sync with remote content?

```
yarn update
```

This command will update local copies of files from all external repos.

Run `yarn build` and `yarn deploy` to re-build and publish the site.

It would be great to trigger site re-build and deployment
once any external repo's `master` is updated.

This feature is WIP. Possible solution is to employ
["repository dispatch" events](https://github.community/t5/GitHub-Actions/Triggering-by-other-repository/td-p/30668).
