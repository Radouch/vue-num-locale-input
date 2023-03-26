import{r as p,M as u,C as c}from"./chunk-PCJTTTQV-f2d08a23.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{V as m,S as f,T as x}from"./VueNumLocaleInput.stories-863698e3.js";import{u as d}from"./index-99552a12.js";import"./iframe-c156d830.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-f8f81512.js";import"./index-356e4a49.js";import"./vue.esm-bundler-99f97b98.js";var n={},j={get exports(){return n},set exports(r){n=r}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=p,g=Symbol.for("react.element"),y=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,_=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function h(r,t,o){var e,s={},l=null,a=null;o!==void 0&&(l=""+o),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(e in t)v.call(t,e)&&!S.hasOwnProperty(e)&&(s[e]=t[e]);if(r&&r.defaultProps)for(e in t=r.defaultProps,t)s[e]===void 0&&(s[e]=t[e]);return{$$typeof:g,type:r,key:l,ref:a,props:s,_owner:_.current}}i.Fragment=y;i.jsx=h;i.jsxs=h;(function(r){r.exports=i})(j);function U(r={}){const{wrapper:t}=Object.assign({},d(),r.components);return t?n.jsx(t,Object.assign({},r,{children:n.jsx(o,{})})):o();function o(){const e=Object.assign({h1:"h1",hr:"hr",blockquote:"blockquote",p:"p",a:"a",strong:"strong",ul:"ul",li:"li",h2:"h2",code:"code"},d(),r.components);return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,`
`,n.jsx(u,{of:m}),`
`,n.jsx(e.h1,{children:"VueNumLocaleInput"}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://vuejs.org/",children:"Vue 3"})," ",n.jsx(e.strong,{children:"form input field"})," component edited as ",n.jsx(e.strong,{children:"numeric input field"}),", displayed as ",n.jsx(e.strong,{children:"language sensitive text field"})]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["For language-sensitive representation of numbers see ",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString",children:"Number.prototype.toLocaleString()"})]}),`
`,n.jsxs(e.li,{children:["Locale formatted number is displayed ",n.jsx(e.strong,{children:"only"})," if the field does ",n.jsx(e.strong,{children:"not"})," have focus. Otherwise it looks and behaves as normal numeric input field."]}),`
`,n.jsx(e.li,{children:"Especially useful for creating clear and easy to read tables containing numbers."}),`
`]}),`
`,n.jsx(e.h2,{children:"Rationale"}),`
`,n.jsxs(e.p,{children:["The basic idea is that it would be difficult to make ",n.jsx(e.strong,{children:"editable"})," numeric form field that is formatted in some way (e.g. spaces between numbers). However, it is very easy to make a non-editable text field displaying a number in localized format (see ",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString",children:"Number.prototype.toLocaleString()"})," and ",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",children:"Intl.NumberFormat"}),")."]}),`
`,n.jsxs(e.p,{children:['Thus, the component internally switches between a "localized" non-editable ',n.jsx(e.code,{children:'input type="text"'}),' (the default display) and a "normal" ',n.jsx(e.code,{children:'input  type="number"'})," in which editing takes place. The component switches to the numeric input if it gets focus. After losing focus, it switches back to the text localised input."]}),`
`,n.jsx(e.h2,{children:"Usage"}),`
`,n.jsxs(e.p,{children:["The component can be handled like a normal numeric ",n.jsx(e.code,{children:"input"})," element, because both internal input fields take the attributes passed to the component (you can define css classes, ",n.jsx(e.code,{children:"min"}),", ",n.jsx(e.code,{children:"max"}),", etc.)."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Warning! The component ",n.jsx(e.strong,{children:"must not"})," have a ",n.jsx(e.code,{children:"type"})," defined (",n.jsx(e.code,{children:"text"}),", ",n.jsx(e.code,{children:"number"}),", event, other). The type is defined by the two internal inputs themselves, and an external definition would override this."]}),`
`]}),`
`,n.jsx(e.h2,{children:"Single field with options"}),`
`,n.jsx(c,{of:f}),`
`,n.jsx(e.h2,{children:"Three fields as Bootstrap Input Group"}),`
`,n.jsx(c,{of:x})]})}}export{U as default};
//# sourceMappingURL=VueNumLocaleInput-15be6f78.js.map
