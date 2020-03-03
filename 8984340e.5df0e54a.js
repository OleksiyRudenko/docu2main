(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{143:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(1),o=r(9),a=(r(0),r(161)),c={id:"import-generated",title:"Intro to importing generated docs from external projects",sidebar_label:"Importing generated docs"},i={id:"import-generated",title:"Intro to importing generated docs from external projects",description:"## How to import generated content from external repos?",source:"@site/docs/import-generated.md",permalink:"/docu2main/docs/import-generated",editUrl:"https://github.com/OleksiyRudenko/docu2main/edit/master/docs/import-generated.md",sidebar_label:"Importing generated docs",sidebar:"someSidebar",previous:{title:"Intro to importing static docs from external projects",permalink:"/docu2main/docs/import-static"},next:{title:"Style Guide",permalink:"/docu2main/docs/doc1"}},l=[{value:"How to import generated content from external repos?",id:"how-to-import-generated-content-from-external-repos",children:[]}],p={rightToc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"how-to-import-generated-content-from-external-repos"},"How to import generated content from external repos?"),Object(a.b)("p",null,"Unlike ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docu2main/docs/import-static"}),"static content")," generated content\nis not available right off from the external repo."),Object(a.b)("p",null,"The suggested approach is as follows:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"On external project set up scripts/hooks that",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"generate docs into markdown"),Object(a.b)("li",{parentName:"ol"},"commit generated docs into an orphaned commit and\nassociated dedicated branch"),Object(a.b)("li",{parentName:"ol"},"push orphaned commit to remote"),Object(a.b)("li",{parentName:"ol"},"emit ",Object(a.b)("strong",{parentName:"li"},"publication event")," for centralized docs project"),Object(a.b)("li",{parentName:"ol"},"intercept ",Object(a.b)("strong",{parentName:"li"},"delete branch event")," and delete dedicated branch"))),Object(a.b)("li",{parentName:"ol"},"On centralized documentation project:",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"connect external repo with ",Object(a.b)("inlineCode",{parentName:"li"},"subrepo clone ...")," or intercept ",Object(a.b)("strong",{parentName:"li"},"publication event")),Object(a.b)("li",{parentName:"ol"},"import remote dedicated branch with ",Object(a.b)("inlineCode",{parentName:"li"},"subrepo pull ... && subrepo clean ...")),Object(a.b)("li",{parentName:"ol"},"emit ",Object(a.b)("strong",{parentName:"li"},"delete branch event")," for external project"),Object(a.b)("li",{parentName:"ol"},"build and publish centralized docs")))))}d.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return u}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},m=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(r),s=n,u=m["".concat(c,".").concat(s)]||m[s]||b[s]||a;return r?o.a.createElement(u,i({ref:t},p,{components:r})):o.a.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);