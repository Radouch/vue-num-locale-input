const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VueNumLocaleInput-CxZ-YWfQ.js","./chunk-NUUEMKO5-CC3cIS1O.js","./index-DZVNkkTA.js","./index-D-8MO0q_.js","./index-DrFu-skq.js","./index-BaHe5-Wz.js","./VueNumLocaleInput.stories-C5uvhQEl.js","./vue.esm-bundler-C17D5QKd.js","./VueNumLocaleInput-DnVUw_vK.css","./entry-preview-CtpL_g9u.js","./entry-preview-docs-xJrauvqQ.js","./preview-BhhEZcNS.js","./preview-D77C14du.js","./preview-BWzBA1C2.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const R="modulepreload",L=function(e,n){return new URL(e,n).href},p={},o=function(n,l,u){let t=Promise.resolve();if(l&&l.length>0){const i=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),d=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));t=Promise.allSettled(l.map(s=>{if(s=L(s,u),s in p)return;p[s]=!0;const a=s.endsWith(".css"),f=a?'[rel="stylesheet"]':"";if(!!u)for(let m=i.length-1;m>=0;m--){const E=i[m];if(E.href===s&&(!a||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${f}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":R,a||(c.as="script"),c.crossOrigin="",c.href=s,d&&c.setAttribute("nonce",d),document.head.appendChild(c),a)return new Promise((m,E)=>{c.addEventListener("load",m),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(i){const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=i,window.dispatchEvent(_),!_.defaultPrevented)throw i}return t.then(i=>{for(const _ of i||[])_.status==="rejected"&&r(_.reason);return n().catch(r)})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:I}=__STORYBOOK_MODULE_PREVIEW_API__,O=T({page:"preview"});I.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const P={"./src/stories/VueNumLocaleInput.mdx":async()=>o(()=>import("./VueNumLocaleInput-CxZ-YWfQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),"./src/stories/VueNumLocaleInput.stories.js":async()=>o(()=>import("./VueNumLocaleInput.stories-C5uvhQEl.js").then(e=>e.V),__vite__mapDeps([6,7,8]),import.meta.url)};async function S(e){return P[e]()}const{composeConfigs:V,PreviewWeb:y,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,D=async(e=[])=>{const n=await Promise.all([e[0]??o(()=>import("./entry-preview-CtpL_g9u.js"),__vite__mapDeps([9,7]),import.meta.url),e[1]??o(()=>import("./entry-preview-docs-xJrauvqQ.js"),__vite__mapDeps([10,2,7]),import.meta.url),e[2]??o(()=>import("./preview-BhhEZcNS.js"),__vite__mapDeps([11,3]),import.meta.url),e[3]??o(()=>import("./preview-C5uj8el_.js"),[],import.meta.url),e[4]??o(()=>import("./preview-aVwhiz9X.js"),[],import.meta.url),e[5]??o(()=>import("./preview-D77C14du.js"),__vite__mapDeps([12,4]),import.meta.url),e[6]??o(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),e[7]??o(()=>import("./preview-CFgKly6U.js"),[],import.meta.url),e[8]??o(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([13,4]),import.meta.url),e[9]??o(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),e[10]??o(()=>import("./preview-BJ6EHSBF.js"),[],import.meta.url),e[11]??o(()=>import("./preview-BFzpVMGc.js"),[],import.meta.url)]);return V(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new y(S,D);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{o as _};