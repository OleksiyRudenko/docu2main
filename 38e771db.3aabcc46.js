(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),i=(n(0),n(161)),c={id:"intro",title:"Imports from external repos"},a={id:"docu2inc/intro",title:"Imports from external repos",description:"# Docu 2 Imports",source:"@site/docs/docu2inc/README.md",permalink:"/docu2main/docs/docu2inc/intro",editUrl:"https://github.com/OleksiyRudenko/docu2main/edit/master/docs/docu2inc/README.md",sidebar:"someSidebar",previous:{title:"This is Document Number 3",permalink:"/docu2main/docs/doc3"},next:{title:"Powered by MDX",permalink:"/docu2main/docs/mdx"}},u=[],p={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"docu-2-imports"},"Docu 2 Imports"),Object(i.b)("p",null,"This repo will be imported into\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OleksiyRudenko/docu2main"}),"docu2main"),"\nDocusaurus 2 documentation demo site."),Object(i.b)("p",null,"All files from this repo (including ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docu2main/docs/docu2inc/extra"}),"extra.md"),") will be published.\nThose that are not assigned any ",Object(i.b)("inlineCode",{parentName:"p"},"id"),"s can be referred to by their\nfile names without extensions."))}l.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?o.a.createElement(f,a({ref:t},p,{components:n})):o.a.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);