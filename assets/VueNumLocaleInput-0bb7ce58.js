import{r as m,M as f,C as c}from"./chunk-HLWAVYOI-c2189631.js";import{V as x,S as j,T as b}from"./VueNumLocaleInput.stories-937b1172.js";import{u as h}from"./index-b9fc5b56.js";import"./iframe-9b94e748.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-38ad35d1.js";import"./index-356e4a49.js";import"./vue.esm-bundler-e4216748.js";var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=m,y=Symbol.for("react.element"),v=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,w=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,l){var r,o={},s=null,a=null;l!==void 0&&(s=""+l),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)_.call(e,r)&&!k.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:y,type:t,key:s,ref:a,props:o,_owner:w.current}}i.Fragment=v;i.jsx=u;i.jsxs=u;p.exports=i;var n=p.exports;function d(t){const e=Object.assign({h1:"h1",hr:"hr",blockquote:"blockquote",p:"p",a:"a",strong:"strong",ul:"ul",li:"li",h2:"h2",code:"code"},h(),t.components);return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,`
`,n.jsx(f,{of:x}),`
`,n.jsx(e.h1,{id:"vuenumlocaleinput",children:"VueNumLocaleInput"}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://vuejs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vue 3"})," ",n.jsx(e.strong,{children:"form input field"})," component edited as ",n.jsx(e.strong,{children:"numeric input field"}),", displayed as ",n.jsx(e.strong,{children:"language sensitive text field"})]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["For language-sensitive representation of numbers see ",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString",target:"_blank",rel:"nofollow noopener noreferrer",children:"Number.prototype.toLocaleString()"})]}),`
`,n.jsxs(e.li,{children:["Locale formatted number is displayed ",n.jsx(e.strong,{children:"only"})," if the field does ",n.jsx(e.strong,{children:"not"})," have focus. Otherwise it looks and behaves as normal numeric input field."]}),`
`,n.jsx(e.li,{children:"Especially useful for creating clear and easy to read tables containing numbers."}),`
`]}),`
`,n.jsx(e.h2,{id:"rationale",children:"Rationale"}),`
`,n.jsxs(e.p,{children:["The basic idea is that it would be difficult to make ",n.jsx(e.strong,{children:"editable"})," numeric form field that is formatted in some way (e.g. spaces between numbers). However, it is very easy to make a non-editable text field displaying a number in localized format (see ",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString",target:"_blank",rel:"nofollow noopener noreferrer",children:"Number.prototype.toLocaleString()"})," and ",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",target:"_blank",rel:"nofollow noopener noreferrer",children:"Intl.NumberFormat"}),")."]}),`
`,n.jsxs(e.p,{children:['Thus, the component internally switches between a "localized" non-editable ',n.jsx(e.code,{children:'input type="text"'}),' (the default display) and a "normal" ',n.jsx(e.code,{children:'input  type="number"'})," in which editing takes place. The component switches to the numeric input if it gets focus. After losing focus, it switches back to the text localised input."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["The component can be handled like a normal numeric ",n.jsx(e.code,{children:"input"})," element, because both internal input fields take the attributes passed to the component (you can define css classes, ",n.jsx(e.code,{children:"min"}),", ",n.jsx(e.code,{children:"max"}),", etc.)."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Warning! The component ",n.jsx(e.strong,{children:"must not"})," have a ",n.jsx(e.code,{children:"type"})," defined (",n.jsx(e.code,{children:"text"}),", ",n.jsx(e.code,{children:"number"}),", event, other). The type is defined by the two internal inputs themselves, and an external definition would override this."]}),`
`]}),`
`,n.jsx(e.h2,{id:"single-field-with-options",children:"Single field with options"}),`
`,n.jsx(c,{of:j}),`
`,n.jsx(e.h2,{id:"three-fields-as-bootstrap-input-group",children:"Three fields as Bootstrap Input Group"}),`
`,n.jsx(c,{of:b})]})}function M(t={}){const{wrapper:e}=Object.assign({},h(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(d,t)})):d(t)}export{M as default};
