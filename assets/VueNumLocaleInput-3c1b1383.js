import{r as p,M as u,C as l}from"./chunk-PCJTTTQV-21caaf34.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{V as m,S as f,T as x}from"./VueNumLocaleInput.stories-ed5eb622.js";import{u as d}from"./index-905d1f28.js";import"./iframe-0c00469f.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-85a12bb0.js";import"./index-356e4a49.js";import"./vue.esm-bundler-437c4d54.js";var t={},j={get exports(){return t},set exports(o){t=o}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=p,g=Symbol.for("react.element"),y=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,w=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function h(o,n,r){var e,i={},a=null,c=null;r!==void 0&&(a=""+r),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(c=n.ref);for(e in n)_.call(n,e)&&!v.hasOwnProperty(e)&&(i[e]=n[e]);if(o&&o.defaultProps)for(e in n=o.defaultProps,n)i[e]===void 0&&(i[e]=n[e]);return{$$typeof:g,type:o,key:a,ref:c,props:i,_owner:w.current}}s.Fragment=y;s.jsx=h;s.jsxs=h;(function(o){o.exports=s})(j);function M(o={}){const{wrapper:n}=Object.assign({},d(),o.components);return n?t.jsx(n,Object.assign({},o,{children:t.jsx(r,{})})):r();function r(){const e=Object.assign({h1:"h1",hr:"hr",blockquote:"blockquote",p:"p",h2:"h2",strong:"strong",a:"a",code:"code"},d(),o.components);return t.jsxs(t.Fragment,{children:[`
`,`
`,`
`,`
`,`
`,t.jsx(u,{of:m}),`
`,t.jsx(e.h1,{children:"VueNumLocaleInput"}),`
`,t.jsx(e.hr,{}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:'"Dual" form input field: numeric when focused (edited), locale string when without focus (shown)'}),`
`]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h2,{children:"Rationale"}),`
`,t.jsxs(e.p,{children:["The basic idea is that it would be difficult to make ",t.jsx(e.strong,{children:"editable"})," numeric form field that is formatted in some way (e.g. spaces between numbers). However, it is very easy to make a non-editable text field displaying a number in national format (see ",t.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString",children:"Number.prototype.toLocaleString()"})," and ",t.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",children:"Intl.NumberFormat"}),")."]}),`
`,t.jsxs(e.p,{children:['Thus, the component internally switches between a "localized" non-editable text ',t.jsx(e.code,{children:"input"}),' (the default display) and a "normal" numeric ',t.jsx(e.code,{children:"input"})," in which editing takes place. The component switches to the numeric input if it gets focus. After losing it, it switches back to the text localised input."]}),`
`,t.jsx(e.h2,{children:"Usage"}),`
`,t.jsxs(e.p,{children:["The component can be handled like a normal numeric ",t.jsx(e.code,{children:"input"})," element, because both internal input fields take the attributes passed to the component (you can define css classes, ",t.jsx(e.code,{children:"min"}),", ",t.jsx(e.code,{children:"max"}),", etc.)."]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["Warning! The component ",t.jsx(e.strong,{children:"must not"})," have a ",t.jsx(e.code,{children:"type"})," defined (",t.jsx(e.code,{children:"text"}),", ",t.jsx(e.code,{children:"number"}),", event, other). The type is defined by the two internal inputs themselves, and an external definition would override this."]}),`
`]}),`
`,t.jsx(e.h2,{children:"Single field with options"}),`
`,t.jsx(l,{of:f}),`
`,t.jsx(e.h2,{children:"Three fields as Bootstrap Input Group"}),`
`,t.jsx(l,{of:x})]})}}export{M as default};
//# sourceMappingURL=VueNumLocaleInput-3c1b1383.js.map
