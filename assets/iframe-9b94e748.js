import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",d=function(_,i){return new URL(_,i).href},O={},o=function(i,s,c){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=d(e,c),e in O)return;O[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const u=t[l];if(u.href===e&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":E,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((l,u)=>{n.addEventListener("load",l),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,a=p({page:"preview"});f.setChannel(a);window.__STORYBOOK_ADDONS_CHANNEL__=a;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=a);const R={"./src/stories/VueNumLocaleInput.mdx":async()=>o(()=>import("./VueNumLocaleInput-0bb7ce58.js"),["./VueNumLocaleInput-0bb7ce58.js","./chunk-HLWAVYOI-c2189631.js","./_commonjsHelpers-725317a4.js","./index-1b441bc2.js","./index-38ad35d1.js","./index-356e4a49.js","./VueNumLocaleInput.stories-937b1172.js","./vue.esm-bundler-e4216748.js","./VueNumLocaleInput-45676771.css","./index-b9fc5b56.js"],import.meta.url),"./src/stories/VueNumLocaleInput.stories.js":async()=>o(()=>import("./VueNumLocaleInput.stories-937b1172.js").then(_=>_.V),["./VueNumLocaleInput.stories-937b1172.js","./vue.esm-bundler-e4216748.js","./VueNumLocaleInput-45676771.css"],import.meta.url)};async function w(_){return R[_]()}const{composeConfigs:P,PreviewWeb:T,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-2223856b.js"),["./entry-preview-2223856b.js","./vue.esm-bundler-e4216748.js"],import.meta.url),o(()=>import("./entry-preview-docs-b3842b5d.js"),["./entry-preview-docs-b3842b5d.js","./index-38ad35d1.js","./_commonjsHelpers-725317a4.js","./vue.esm-bundler-e4216748.js"],import.meta.url),o(()=>import("./preview-2ff2accb.js"),["./preview-2ff2accb.js","./index-1b441bc2.js"],import.meta.url),o(()=>import("./preview-a5ed845b.js"),[],import.meta.url),o(()=>import("./preview-d01b88e8.js"),["./preview-d01b88e8.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-30b54f76.js"),["./preview-30b54f76.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-c56bf6ac.js"),[],import.meta.url),o(()=>import("./preview-da31036b.js"),["./preview-da31036b.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-0ef86afd.js"),[],import.meta.url),o(()=>import("./preview-c82afb13.js"),["./preview-c82afb13.js","./_commonjsHelpers-725317a4.js"],import.meta.url),o(()=>import("./preview-356c9ae2.js"),[],import.meta.url)]);return P(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:I});export{o as _};