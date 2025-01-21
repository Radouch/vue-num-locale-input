import{v as j}from"./v4-CtRu48qb.js";import{d as B,b as d,e as h,u as P,f as O,m as I,g as M,v as q,n as C,o as w}from"./vue.esm-bundler-Du9k2es5.js";const{addons:W}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:K}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:x}=__STORYBOOK_MODULE_GLOBAL__;var U="storybook/actions",G=`${U}/action-event`,z={depth:10,clearOnStoryChange:!0,limit:50},A=(t,e)=>{let n=Object.getPrototypeOf(t);return!n||e(n)?n:A(n,e)},Y=t=>!!(typeof t=="object"&&t&&A(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),J=t=>{if(Y(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let n=Object.getOwnPropertyDescriptor(e,"view"),a=n==null?void 0:n.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...n,value:Object.create(a.constructor.prototype)}),e}return t},$=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?j():Date.now().toString(36)+Math.random().toString(36).substring(2);function H(t,e={}){let n={...z,...e},a=function(...o){var m,r;if(e.implicit){let l=(m="__STORYBOOK_PREVIEW__"in x?x.__STORYBOOK_PREVIEW__:void 0)==null?void 0:m.storyRenders.find(s=>s.phase==="playing"||s.phase==="rendering");if(l){let s=!((r=window==null?void 0:window.FEATURES)!=null&&r.disallowImplicitActionsInRenderV8),_=new K({phase:l.phase,name:t,deprecated:s});if(s)console.warn(_);else throw _}}let i=W.getChannel(),u=$(),v=5,b=o.map(J),y=o.length>1?b:b[0],V={id:u,count:0,data:{name:t,args:y},options:{...n,maxDepth:v+(n.depth||3),allowFunction:n.allowFunction||!1}};i.emit(G,V)};return a.isAction=!0,a.implicit=e.implicit,a}const Q=["value"],g=B({__name:"vue-num-locale-input",props:{modelValue:{},options:{default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,a=e,o=d("text"),i=d(null),u=h(()=>typeof n.modelValue=="number"?n.modelValue.toLocaleString(void 0,n.options):""),v=h({get:()=>n.modelValue,set:r=>{r!=null&&!Number.isNaN(r)&&a("update:modelValue",r)}}),b=async()=>{o.value="number",await C(),i.value instanceof HTMLInputElement&&i.value.focus()},y=()=>{o.value="text"},V=P(),m=h(()=>{const{type:r,value:l,...s}=V;return s});return(r,l)=>o.value==="text"?(w(),O("input",I({key:0,type:"text"},m.value,{readonly:"",value:u.value,onFocus:b}),null,16,Q)):M((w(),O("input",I({key:1,type:"number"},m.value,{"onUpdate:modelValue":l[0]||(l[0]=s=>v.value=s),onFocusout:y,ref_key:"inpnum",ref:i}),null,16)),[[q,v.value]])}});g.__docgenInfo={exportName:"default",displayName:"vue-num-locale-input",type:1,props:[{name:"modelValue",global:!1,description:"Numeric model value",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"options",global:!1,description:"Options for Intl.NumberFormat",tags:[{name:"see",text:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options"}],required:!1,type:"Record<string, unknown> | undefined",declarations:[],schema:{kind:"enum",type:"Record<string, unknown> | undefined",schema:["undefined","Record<string, unknown>"]},default:"{}"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"Emits when value is changed and is valid number",tags:[],type:"[value: number]",signature:'(event: "update:modelValue", value: number): void',declarations:[],schema:["number"]}],slots:[],exposed:[{name:"options",type:"Record<string, unknown>",description:"Options for Intl.NumberFormat",declarations:[],schema:"Record<string, unknown>"},{name:"modelValue",type:"number | undefined",description:"Numeric model value",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}}],sourceFiles:"C:/Users/radek.svitil/Documents/github/vue-num-locale-input/src/lib-components/vue-num-locale-input.vue"};const X={component:g},p={decorators:[()=>({template:`
        <h3>Field displaying number in scientific notation</h3>
        <div style="max-width: 40rem" class="mt-4">
        <story />
        </div>
      `})],render:t=>({components:{VueNumLocaleInput:g},setup(){let e=d(123456789e-20);return{args:t,model:e,updateModel:a=>{e.value=a,H("update")(a)}}},template:`
          <div class="input-group mb-4">
            <span class="input-group-text bg-secondary-subtle w-50">Outside input: </span>
            <input type="number" v-model="model" class="form-control" />
          </div>
          <div class="input-group">
            <span class="input-group-text bg-secondary-subtle w-50">VueNumLocaleInput component</span>
            <VueNumLocaleInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" class="form-control" />
          </div>
    `}),args:{min:-2,max:2e4,options:{notation:"scientific"}}},c={name:"Three fields as Bootstrap Input Group",render:t=>({components:{VueNumLocaleInput:g},data(){return{secondValue:-273.15}},setup(){let e=d(12);return{args:t,firstValue:e,updateFirstValue:a=>e.value=a}},template:`
    <h3>Three fields as Bootstrap Input Group</h3>
    <div class="mb-4">first value: {{firstValue}}, second value: {{secondValue}}</div>
  <div class="input-group mb-3">
  <span class="input-group-text">first value</span><VueNumLocaleInput v-bind="args" :modelValue="firstValue" @update:modelValue="updateFirstValue" />
  </div>
  <div class="input-group mb-3">
  <span class="input-group-text">also firstValue</span><VueNumLocaleInput v-bind="args" v-model="firstValue" />
  </div>
  <div class="input-group mb-3">
    <span class="input-group-text">second value</span><VueNumLocaleInput v-bind="args" v-model="secondValue" />
  </div>,`}),args:{step:1,max:20,min:-10,class:"form-control",options:{minimumFractionDigits:void 0,maximumFractionDigits:void 0}}},f={render:t=>({components:{VueNumLocaleInput:g},setup(){let e=d([]);const n=-1e7,a=1e7;for(let o=0;o<10;o++){let i=[];for(let u=0;u<4;u++)i.push(d(Math.random()*(a-n+1)+n));e.value.push(i)}return{args:t,numArray:e}},template:`
    <h3>Table with random generated numbers from -1E7 to +1E7</h3>
    <div class="table-responsive">
    <table class="table table-primary table-bordered">
    <tbody>
    <tr v-for="row in numArray">
    <td v-for="cell in row"><VueNumLocaleInput v-bind="args" v-model="cell.value" /></td>
    </tr>
    </tbody>
    </table>
    </div>
`}),args:{step:1,min:-1e7,max:1e7,class:"form-control text-end",options:{minimumFractionDigits:2,maximumFractionDigits:2}}};var N,R,F;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [() => ({
    template: \`
        <h3>Field displaying number in scientific notation</h3>
        <div style="max-width: 40rem" class="mt-4">
        <story />
        </div>
      \`
  })],
  render: (args: any) => ({
    components: {
      VueNumLocaleInput
    },
    setup() {
      let model: Ref<number> = ref(1.23456789e-12);
      const updateModel = (event: number) => {
        model.value = event;
        // Just logging for Storybook Action panel
        action("update")(event);
      };
      return {
        args,
        model,
        updateModel
      };
    },
    template: \`
          <div class="input-group mb-4">
            <span class="input-group-text bg-secondary-subtle w-50">Outside input: </span>
            <input type="number" v-model="model" class="form-control" />
          </div>
          <div class="input-group">
            <span class="input-group-text bg-secondary-subtle w-50">VueNumLocaleInput component</span>
            <VueNumLocaleInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" class="form-control" />
          </div>
    \`
  }),
  args: {
    min: -2,
    max: 20000,
    options: {
      notation: "scientific"
      // minimumFractionDigits: 1,
      // maximumFractionDigits: 3,
      // minimumIntegerDigits: 3,
    }
  }
}`,...(F=(R=p.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var E,k,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Three fields as Bootstrap Input Group",
  render: (args: any) => ({
    components: {
      VueNumLocaleInput
    },
    data() {
      return {
        secondValue: -273.15
      };
    },
    setup() {
      let firstValue: Ref<number> = ref(12);
      const updateFirstValue = (event: number) => firstValue.value = event;
      return {
        args,
        firstValue,
        updateFirstValue
      };
    },
    template: \`
    <h3>Three fields as Bootstrap Input Group</h3>
    <div class="mb-4">first value: {{firstValue}}, second value: {{secondValue}}</div>
  <div class="input-group mb-3">
  <span class="input-group-text">first value</span><VueNumLocaleInput v-bind="args" :modelValue="firstValue" @update:modelValue="updateFirstValue" />
  </div>
  <div class="input-group mb-3">
  <span class="input-group-text">also firstValue</span><VueNumLocaleInput v-bind="args" v-model="firstValue" />
  </div>
  <div class="input-group mb-3">
    <span class="input-group-text">second value</span><VueNumLocaleInput v-bind="args" v-model="secondValue" />
  </div>,\`
  }),
  args: {
    step: 1,
    max: 20,
    min: -10,
    class: "form-control",
    options: {
      minimumFractionDigits: undefined,
      maximumFractionDigits: undefined
    }
  }
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var L,S,T;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      VueNumLocaleInput
    },
    setup() {
      let numArray: Ref<Ref<number>[][]> = ref([]);
      const min = -10000000;
      const max = 10000000;
      for (let i = 0; i < 10; i++) {
        let row: Ref<number>[] = [];
        for (let j = 0; j < 4; j++) {
          row.push(ref(Math.random() * (max - min + 1) + min));
        }
        numArray.value.push(row);
      }
      console.log(numArray.value);
      return {
        args,
        numArray
      };
    },
    template: \`
    <h3>Table with random generated numbers from -1E7 to +1E7</h3>
    <div class="table-responsive">
    <table class="table table-primary table-bordered">
    <tbody>
    <tr v-for="row in numArray">
    <td v-for="cell in row"><VueNumLocaleInput v-bind="args" v-model="cell.value" /></td>
    </tr>
    </tbody>
    </table>
    </div>
\`
  }),
  args: {
    step: 1,
    min: -10000000,
    max: 10000000,
    class: "form-control text-end",
    options: {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  }
}`,...(T=(S=f.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const Z=["SingleFieldWithOptions","ThreeFieldsBootstraped","NumericTable"],te=Object.freeze(Object.defineProperty({__proto__:null,NumericTable:f,SingleFieldWithOptions:p,ThreeFieldsBootstraped:c,__namedExportsOrder:Z,default:X},Symbol.toStringTag,{value:"Module"}));export{p as S,c as T,te as V};
