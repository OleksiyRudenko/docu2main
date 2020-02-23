# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

The organization of the repo allows to import documents from other repos  
and keep imported content in sync.

### Installation

Install [git-subrepo](https://github.com/ingydotnet/git-subrepo#installation-instructions)
for it is required to keep imported content in sync with external source  
repositories.

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

Whenever you want to sync up with remote sources of content stop
development server, run `yarn update` explicitly and then `yarn start`.

Unfortunately, on-the-fly update from external repos is not supported.

### Sync Up With External Sources

```
yarn update
```

This will invoke `git-subrepo` to update local copies of files
from external source repos `master` branches.

### Build

```
$ yarn build
```

This command updates imported content and generates static content  
into the `build` directory and can be served using any static contents  
hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient  
way to build the website (having imported content updated)  
and push to the `gh-pages` branch.
