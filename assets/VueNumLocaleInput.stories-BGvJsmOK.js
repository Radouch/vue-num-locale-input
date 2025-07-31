import{v as C}from"./v4-CtRu48qb.js";import{d as W,b as p,e as x,u as Y,f as R,g as U,o as w,m as I,v as q,n as G}from"./vue.esm-bundler--cmgGqvu.js";const{addons:z}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:$}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:E}=__STORYBOOK_MODULE_GLOBAL__;var H=Object.defineProperty,J=(t,e)=>{for(var n in e)H(t,n,{get:e[n],enumerable:!0})},Q="storybook/actions",X=`${Q}/action-event`,Z={depth:10,clearOnStoryChange:!0,limit:50},j=(t,e)=>{let n=Object.getPrototypeOf(t);return!n||e(n)?n:j(n,e)},ee=t=>!!(typeof t=="object"&&t&&j(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),ne=t=>{if(ee(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let n=Object.getOwnPropertyDescriptor(e,"view"),r=n==null?void 0:n.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...n,value:Object.create(r.constructor.prototype)}),e}return t},te=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?C():Date.now().toString(36)+Math.random().toString(36).substring(2);function h(t,e={}){let n={...Z,...e},r=function(...u){var y,_;if(e.implicit){let m=(y="__STORYBOOK_PREVIEW__"in E?E.__STORYBOOK_PREVIEW__:void 0)==null?void 0:y.storyRenders.find(a=>a.phase==="playing"||a.phase==="rendering");if(m){let a=!((_=globalThis==null?void 0:globalThis.FEATURES)!=null&&_.disallowImplicitActionsInRenderV8),o=new $({phase:m.phase,name:t,deprecated:a});if(a)console.warn(o);else throw o}}let i=z.getChannel(),l=te(),d=5,c=u.map(ne),V=u.length>1?c:c[0],O={id:l,count:0,data:{name:t,args:V},options:{...n,maxDepth:d+(n.depth||3),allowFunction:n.allowFunction||!1}};i.emit(X,O)};return r.isAction=!0,r.implicit=e.implicit,r}const{definePreview:fe}=__STORYBOOK_MODULE_PREVIEW_API__,{global:N}=__STORYBOOK_MODULE_GLOBAL__;var ae={};J(ae,{argsEnhancers:()=>se,loaders:()=>ue});var K=(t,e)=>typeof e[t]>"u"&&!(t in e),re=t=>{let{initialArgs:e,argTypes:n,id:r,parameters:{actions:u}}=t;if(!u||u.disable||!u.argTypesRegex||!n)return{};let i=new RegExp(u.argTypesRegex);return Object.entries(n).filter(([l])=>!!i.test(l)).reduce((l,[d,c])=>(K(d,e)&&(l[d]=h(d,{implicit:!0,id:r})),l),{})},oe=t=>{let{initialArgs:e,argTypes:n,parameters:{actions:r}}=t;return r!=null&&r.disable||!n?{}:Object.entries(n).filter(([u,i])=>!!i.action).reduce((u,[i,l])=>(K(i,e)&&(u[i]=h(typeof l.action=="string"?l.action:i)),u),{})},se=[oe,re],T=!1,ie=t=>{let{parameters:{actions:e}}=t;if(!(e!=null&&e.disable)&&!T&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in N&&typeof N.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let n=N.__STORYBOOK_TEST_ON_MOCK_CALL__;n((r,u)=>{let i=r.getMockName();i!=="spy"&&(!/^next\/.*::/.test(i)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(l=>i.startsWith(l)))&&h(i)(u)}),T=!0}},ue=[ie];const le=["value"],b=W({__name:"vue-num-locale-input",props:{modelValue:{},options:{default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,r=e,u=p("text"),i=p(null),l=x(()=>typeof n.modelValue=="number"?n.modelValue.toLocaleString(void 0,n.options):""),d=a=>{if(!a||typeof a!="string"||(a=a.trim(),!a))return null;let o=parseFloat(a);if(!isNaN(o))return o;let s=a.replace(",",".");return o=parseFloat(s),!isNaN(o)||(s=a.replace(/\s+/g,"").replace(/,(\d{3})/g,"$1").replace(",","."),o=parseFloat(s),!isNaN(o))?o:null},c=x({get:()=>n.modelValue,set:a=>{if(typeof a=="string"){const o=d(a);o!==null&&r("update:modelValue",o);return}a!=null&&!Number.isNaN(a)&&r("update:modelValue",a)}}),V=a=>{const o=a.target,s=a.key;s==="Backspace"||s==="Delete"||s==="Tab"||s==="Escape"||s==="Enter"||s==="Home"||s==="End"||s.startsWith("Arrow")||a.ctrlKey||a.metaKey||/^[0-9]$/.test(s)||(s==="."||s===",")&&!o.value.includes(".")&&!o.value.includes(",")||s==="-"&&o.selectionStart===0&&!o.value.includes("-")||(s==="e"||s==="E")&&o.value.length>0&&!o.value.toLowerCase().includes("e")||(s==="+"||s==="-")&&o.value.toLowerCase().endsWith("e")||a.preventDefault()},O=async()=>{u.value="number",await G(),i.value instanceof HTMLInputElement&&i.value.focus()},y=()=>{u.value="text"},_=Y(),m=x(()=>{const{type:a,value:o,...s}=_;return s});return(a,o)=>u.value==="text"?(w(),R("input",I({key:0,type:"text"},m.value,{readonly:"",value:l.value,onFocus:O}),null,16,le)):U((w(),R("input",I({key:1,type:"number"},m.value,{"onUpdate:modelValue":o[0]||(o[0]=s=>c.value=s),onKeydown:V,onFocusout:y,ref_key:"inpnum",ref:i}),null,16)),[[q,c.value]])}});b.__docgenInfo={exportName:"default",displayName:"vue-num-locale-input",type:1,props:[{name:"modelValue",global:!1,description:"Numeric model value",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"options",global:!1,description:"Options for Intl.NumberFormat",tags:[{name:"see",text:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options"}],required:!1,type:"Record<string, unknown> | undefined",declarations:[],schema:{kind:"enum",type:"Record<string, unknown> | undefined",schema:["undefined","Record<string, unknown>"]},default:"{}"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"Emits when value is changed and is valid number",tags:[],type:"[value: number]",signature:'(event: "update:modelValue", value: number): void',declarations:[],schema:["number"]}],slots:[],exposed:[{name:"options",type:"Record<string, unknown>",description:"Options for Intl.NumberFormat",declarations:[],schema:"Record<string, unknown>"},{name:"modelValue",type:"number | undefined",description:"Numeric model value",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}}],sourceFiles:"C:/Users/radek.svitil/Documents/github/vue-num-locale-input/src/lib-components/vue-num-locale-input.vue"};const de={component:b},f={decorators:[()=>({template:`
        <h3>Field displaying number in scientific notation</h3>
        <div style="max-width: 40rem" class="mt-4">
        <story />
        </div>
      `})],render:t=>({components:{VueNumLocaleInput:b},setup(){let e=p(123456789e-20);return{args:t,model:e,updateModel:r=>{e.value=r,h("update")(r)}}},template:`
          <div class="input-group mb-4">
            <span class="input-group-text bg-secondary-subtle w-50">Outside input: </span>
            <input type="number" v-model="model" class="form-control" />
          </div>
          <div class="input-group">
            <span class="input-group-text bg-secondary-subtle w-50">VueNumLocaleInput component</span>
            <VueNumLocaleInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" class="form-control" />
          </div>
    `}),args:{min:-2,max:2e4,options:{notation:"scientific"}}},g={name:"Three fields as Bootstrap Input Group",render:t=>({components:{VueNumLocaleInput:b},data(){return{secondValue:-273.15}},setup(){let e=p(12);return{args:t,firstValue:e,updateFirstValue:r=>e.value=r}},template:`
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
  </div>,`}),args:{step:1,max:20,min:-10,class:"form-control",options:{minimumFractionDigits:void 0,maximumFractionDigits:void 0}}},v={render:t=>({components:{VueNumLocaleInput:b},setup(){let e=p([]);const n=-1e7,r=1e7;for(let u=0;u<10;u++){let i=[];for(let l=0;l<4;l++)i.push(p(Math.random()*(r-n+1)+n));e.value.push(i)}return{args:t,numArray:e}},template:`
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
`}),args:{step:1,min:-1e7,max:1e7,class:"form-control text-end",options:{minimumFractionDigits:2,maximumFractionDigits:2}}};var F,L,k;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(k=(L=f.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var S,A,D;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(A=g.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var B,M,P;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(M=v.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const ce=["SingleFieldWithOptions","ThreeFieldsBootstraped","NumericTable"],ge=Object.freeze(Object.defineProperty({__proto__:null,NumericTable:v,SingleFieldWithOptions:f,ThreeFieldsBootstraped:g,__namedExportsOrder:ce,default:de},Symbol.toStringTag,{value:"Module"}));export{f as S,g as T,ge as V};
