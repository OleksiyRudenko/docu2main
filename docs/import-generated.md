---
id: import-generated
title: Intro to importing generated docs from external projects
sidebar_label: Importing generated docs
---

## How to import generated content from external repos?

Unlike [static content](import-static.md) generated content
is not available right off from the external repo.

The suggested approach is as follows:

1. On external project set up scripts/hooks that
   1. generate docs into markdown
   1. commit generated docs into an orphaned commit and
      associated dedicated branch
   1. push orphaned commit to remote
   1. emit **publication event** for centralized docs project
   1. intercept **delete branch event** and delete dedicated branch
1. On centralized documentation project:
   1. connect external repo with `subrepo clone ...` or intercept **publication event**
   1. import remote dedicated branch with `subrepo pull ... && subrepo clean ...`
   1. emit **delete branch event** for external project
   1. build and publish centralized docs
