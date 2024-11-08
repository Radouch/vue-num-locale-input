import{ag as e,ah as r,ai as i}from"./chunk-NUUEMKO5-CC3cIS1O.js";import{u as s}from"./index-BaHe5-Wz.js";import{V as l,S as a,T as c}from"./VueNumLocaleInput.stories-C5uvhQEl.js";import"./iframe--cIuYyaW.js";import"../sb-preview/runtime.js";import"./index-DZVNkkTA.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-C17D5QKd.js";function o(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"vuenumlocaleinput",children:"VueNumLocaleInput"}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://vuejs.org/",rel:"nofollow",children:"Vue 3"})," ",e.jsx(n.strong,{children:"form input field"})," component edited as ",e.jsx(n.strong,{children:"numeric input field"}),", displayed as ",e.jsx(n.strong,{children:"language sensitive text field"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For language-sensitive representation of numbers see ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString",rel:"nofollow",children:"Number.prototype.toLocaleString()"})]}),`
`,e.jsxs(n.li,{children:["Locale formatted number is displayed ",e.jsx(n.strong,{children:"only"})," if the field does ",e.jsx(n.strong,{children:"not"})," have focus. Otherwise it looks and behaves as normal numeric input field."]}),`
`,e.jsx(n.li,{children:"Especially useful for creating clear and easy to read tables containing numbers."}),`
`]}),`
`,e.jsx(n.h2,{id:"rationale",children:"Rationale"}),`
`,e.jsxs(n.p,{children:["The basic idea is that it would be difficult to make ",e.jsx(n.strong,{children:"editable"})," numeric form field that is formatted in some way (e.g. spaces between numbers). However, it is very easy to make a non-editable text field displaying a number in localized format (see ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString",rel:"nofollow",children:"Number.prototype.toLocaleString()"})," and ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",rel:"nofollow",children:"Intl.NumberFormat"}),")."]}),`
`,e.jsxs(n.p,{children:['Thus, the component internally switches between a "localized" non-editable ',e.jsx(n.code,{children:'input type="text"'}),' (the default display) and a "normal" ',e.jsx(n.code,{children:'input  type="number"'})," in which editing takes place. The component switches to the numeric input if it gets focus. After losing focus, it switches back to the text localised input."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The component can be handled like a normal numeric ",e.jsx(n.code,{children:"input"})," element, because both internal input fields take the attributes passed to the component (you can define css classes, ",e.jsx(n.code,{children:"min"}),", ",e.jsx(n.code,{children:"max"}),", etc.)."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Warning! The component ",e.jsx(n.strong,{children:"must not"})," have a ",e.jsx(n.code,{children:"type"})," defined (",e.jsx(n.code,{children:"text"}),", ",e.jsx(n.code,{children:"number"}),", event, other). The type is defined by the two internal inputs themselves, and an external definition would override this."]}),`
`]}),`
`,e.jsx(n.h2,{id:"single-field-with-options",children:"Single field with options"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h2,{id:"three-fields-as-bootstrap-input-group",children:"Three fields as Bootstrap Input Group"}),`
`,e.jsx(i,{of:c})]})}function g(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{g as default};