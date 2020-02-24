(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(1),i=n(6),r=(n(0),n(125)),a={id:"intro",title:"Intro to importing docs from external projects"},c={id:"intro",title:"Intro to importing docs from external projects",description:"## The problem\r",source:"@site/docs\\intro.md",permalink:"/docu2main/docs/intro",editUrl:"https://github.com/OleksiyRudenko/docu2main/edit/master/docs/intro.md",sidebar:"someSidebar",next:{title:"Style Guide",permalink:"/docu2main/docs/doc1"}},l=[{value:"The problem",id:"the-problem",children:[]},{value:"How this site setup is different from official?",id:"how-this-site-setup-is-different-from-official",children:[]},{value:"How to import content from external repos?",id:"how-to-import-content-from-external-repos",children:[]},{value:"I do not need content from external repo anymore",id:"i-do-not-need-content-from-external-repo-anymore",children:[]},{value:"How to develop documentation?",id:"how-to-develop-documentation",children:[]},{value:"How to keep this site in sync with remote content?",id:"how-to-keep-this-site-in-sync-with-remote-content",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"the-problem"},"The problem"),Object(r.b)("p",null,"You may want to have documentation from multiple projects on a single\nsite. And you still want those projects repos remain the single source(s)\nof truth."),Object(r.b)("p",null,"What may come first to one's mind is to update docs in the projects\nand copy the changes to the shared documentation site.\nNot really a DRY solution."),Object(r.b)("p",null,"This customized Docusaurus 2 set up helps to solve the problem\nin a more consistent way."),Object(r.b)("h2",{id:"how-this-site-setup-is-different-from-official"},"How this site setup is different from official?"),Object(r.b)("p",null,"This project setup is based on official classic template."),Object(r.b)("p",null,"It also requires ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/ingydotnet/git-subrepo#installation-instructions"}),"git-subrepo"),"\ninstalled."),Object(r.b)("p",null,"The setup allows to import external repos and keep local repo clones\nin sync with remote source."),Object(r.b)("p",null,"Change log:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docs/"),": add ",Object(r.b)("inlineCode",{parentName:"li"},"intro.md")," explaining this project setup"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docs/"),": import ",Object(r.b)("inlineCode",{parentName:"li"},"docu2inc/*")," from\nan ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/OleksiyRudenko/docu2inc"}),"external repo"),"\nby ",Object(r.b)("inlineCode",{parentName:"li"},"git subrepo clone")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sidebars.js"),": add ",Object(r.b)("inlineCode",{parentName:"li"},"intro")," document and ",Object(r.b)("inlineCode",{parentName:"li"},"Imported content")," section"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docusaurus.config.js"),": change docs entry point (",Object(r.b)("inlineCode",{parentName:"li"},"themeConfig.navbar.links[0].to"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"README.md"),": change instructions reflecting changed project setup"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"package.json"),": add ",Object(r.b)("inlineCode",{parentName:"li"},"update")," script"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"package.json"),": change ",Object(r.b)("inlineCode",{parentName:"li"},"build")," and ",Object(r.b)("inlineCode",{parentName:"li"},"deploy")," scripts"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"package.json"),": add ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.npmjs.com/package/yarn-or-npm"}),"yarn-or-npm")," dev dependency")),Object(r.b)("h2",{id:"how-to-import-content-from-external-repos"},"How to import content from external repos?"),Object(r.b)("p",null,"Make sure any changes are committed."),Object(r.b)("p",null,"When in project root run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"git subrepo clone <url.git> docs/<external-repo-name>\n")),Object(r.b)("p",null,"This command will clone an external repo into a sub-directory\nunder ",Object(r.b)("inlineCode",{parentName:"p"},"docs/"),"."),Object(r.b)("p",null,"Next refer files from imported repo in ",Object(r.b)("inlineCode",{parentName:"p"},"sidebars.js")," to have\nthose exposed in the site's side bar\n(e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"extrnal-repo-name/document-id"),")."),Object(r.b)("p",null,"By default local clone is synced with an external source repo\n",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch."),Object(r.b)("h2",{id:"i-do-not-need-content-from-external-repo-anymore"},"I do not need content from external repo anymore"),Object(r.b)("p",null,"When in project root run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"git subrepo clean docs/<external-repo-name>\n")),Object(r.b)("p",null,"Delete a directory with an external repo clone,\nfix ",Object(r.b)("inlineCode",{parentName:"p"},"sidebars.js"),", then build and deploy the site."),Object(r.b)("h2",{id:"how-to-develop-documentation"},"How to develop documentation?"),Object(r.b)("p",null,"Follow the\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/installation#running-the-development-server"}),"official guide"),"."),Object(r.b)("p",null,"It is recommended that documentation files from external repos\nhave their own headers like the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"---\nid: id-unique-across-an-imported-repo\ntitle: Title of the document to show in the sidebar\n---\n")),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"sidebars.js")," refer to every imported document using its ",Object(r.b)("inlineCode",{parentName:"p"},"id"),"\nprepended with imported repo directory name."),Object(r.b)("p",null,"For example, if ",Object(r.b)("inlineCode",{parentName:"p"},"docu2inc")," repo is imported with ",Object(r.b)("inlineCode",{parentName:"p"},"README.md"),"\nfile having ",Object(r.b)("inlineCode",{parentName:"p"},"intro")," as its ",Object(r.b)("inlineCode",{parentName:"p"},"id")," then ",Object(r.b)("inlineCode",{parentName:"p"},"sidebars.js")," should refer to\nit as ",Object(r.b)("inlineCode",{parentName:"p"},"docu2inc/intro")," (not ",Object(r.b)("inlineCode",{parentName:"p"},"docu2inc/README"),"). If a file\n(e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"extra.md"),") has no ",Object(r.b)("inlineCode",{parentName:"p"},"id")," assigned then it should be referred to\nas ",Object(r.b)("inlineCode",{parentName:"p"},"docu2inc/extra")," (without extension)."),Object(r.b)("p",null,"Note that all files from an imported repo are accessible.\nHowever, only those explicitly described in ",Object(r.b)("inlineCode",{parentName:"p"},"sidebars.js")," will\nbe exposed in the site's side bar."),Object(r.b)("div",{className:"admonition admonition-warning"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Unfortunately, it is not possible to update imported content\non-the-fly. You will need to stop development server,\nupdate imported content with ",Object(r.b)("inlineCode",{parentName:"p"},"yarn update")," and launch\ndevelopment server with ",Object(r.b)("inlineCode",{parentName:"p"},"yarn start")," again."))),Object(r.b)("h2",{id:"how-to-keep-this-site-in-sync-with-remote-content"},"How to keep this site in sync with remote content?"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"yarn update\n")),Object(r.b)("p",null,"This command will update local copies of files from all external repos."),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"yarn build")," and ",Object(r.b)("inlineCode",{parentName:"p"},"yarn deploy")," to re-build and publish the site."),Object(r.b)("p",null,"It would be great to trigger site re-build and deployment\nonce any external repo's ",Object(r.b)("inlineCode",{parentName:"p"},"master")," is updated."),Object(r.b)("p",null,"This feature is WIP. Possible solution is to employ\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.community/t5/GitHub-Actions/Triggering-by-other-repository/td-p/30668"}),'"repository dispatch" events'),"."))}b.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),m=o,u=d["".concat(a,".").concat(m)]||d[m]||s[m]||r;return n?i.a.createElement(u,c({ref:t},p,{components:n})):i.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<r;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);