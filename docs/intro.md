---
id: intro
title: Intro to importing docs from external projects
sidebar_label: Importing docs from external projects
---

v.0.0.10

## The problem

You may want to have documentation from multiple projects on a single
site. And you still want those projects repos remain the single source(s)
of truth.

What may come first to one's mind is to update docs in the projects
and copy the changes to the shared documentation site.
Not really a DRY solution.

This customized Docusaurus 2 set up helps to solve the problem
in a more consistent way. Also employing CI.

## How this site setup is different from official?

This project setup is based on official classic template.

The setup allows to import external repos and keep local repo clones
in sync with remote source. It requires [git-subrepo](https://github.com/ingydotnet/git-subrepo#installation-instructions)
installed.

Change log:
 * `docs/`: add `intro.md` explaining this project setup
 * `docs/`: import `docu2inc/*` from
   an [external repo](https://github.com/OleksiyRudenko/docu2inc)
   by `git subrepo clone`
 * `sidebars.js`: add `intro` document and `Imported content` section
 * `docusaurus.config.js`: change docs entry point
   (`themeConfig.navbar.links[0].to` property)
 * `README.md`: change instructions reflecting changed project setup
 * `package.json`: add `update` script
 * `package.json`: change `build` and `deploy` scripts
 * add `.github/workflows/continuous-publishing.yml` that triggers build and
   deploy upon push to remote `master`

The remaining docs come as they are from official Docusaurus 2 classic template.

## What next?

Two following sections describe approaches to importing docs
from external projects
- [Importing static docs](import-static.md)
- [Importing generated docs](import-generated.md)
