import{v as U}from"./v4-CtRu48qb.js";import{d as q,b as p,e as w,u as G,f as E,g as z,o as I,m as T,v as $,n as H}from"./vue.esm-bundler--cmgGqvu.js";const{addons:J}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Q}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:F}=__STORYBOOK_MODULE_GLOBAL__;var X=Object.defineProperty,Z=(t,e)=>{for(var n in e)X(t,n,{get:e[n],enumerable:!0})},ee="storybook/actions",ne=`${ee}/action-event`,te={depth:10,clearOnStoryChange:!0,limit:50},K=(t,e)=>{let n=Object.getPrototypeOf(t);return!n||e(n)?n:K(n,e)},re=t=>!!(typeof t=="object"&&t&&K(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),ae=t=>{if(re(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let n=Object.getOwnPropertyDescriptor(e,"view"),a=n==null?void 0:n.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...n,value:Object.create(a.constructor.prototype)}),e}return t},oe=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?U():Date.now().toString(36)+Math.random().toString(36).substring(2);function V(t,e={}){let n={...te,...e},a=function(...u){var _,h;if(e.implicit){let m=(_="__STORYBOOK_PREVIEW__"in F?F.__STORYBOOK_PREVIEW__:void 0)==null?void 0:_.storyRenders.find(r=>r.phase==="playing"||r.phase==="rendering");if(m){let r=!((h=globalThis==null?void 0:globalThis.FEATURES)!=null&&h.disallowImplicitActionsInRenderV8),o=new Q({phase:m.phase,name:t,deprecated:r});if(r)console.warn(o);else throw o}}let i=J.getChannel(),l=oe(),d=5,c=u.map(ae),O=u.length>1?c:c[0],x={id:l,count:0,data:{name:t,args:O},options:{...n,maxDepth:d+(n.depth||3),allowFunction:n.allowFunction||!1}};i.emit(ne,x)};return a.isAction=!0,a.implicit=e.implicit,a}const{definePreview:be}=__STORYBOOK_MODULE_PREVIEW_API__,{global:R}=__STORYBOOK_MODULE_GLOBAL__;var se={};Z(se,{argsEnhancers:()=>le,loaders:()=>ce});var W=(t,e)=>typeof e[t]>"u"&&!(t in e),ie=t=>{let{initialArgs:e,argTypes:n,id:a,parameters:{actions:u}}=t;if(!u||u.disable||!u.argTypesRegex||!n)return{};let i=new RegExp(u.argTypesRegex);return Object.entries(n).filter(([l])=>!!i.test(l)).reduce((l,[d,c])=>(W(d,e)&&(l[d]=V(d,{implicit:!0,id:a})),l),{})},ue=t=>{let{initialArgs:e,argTypes:n,parameters:{actions:a}}=t;return a!=null&&a.disable||!n?{}:Object.entries(n).filter(([u,i])=>!!i.action).reduce((u,[i,l])=>(W(i,e)&&(u[i]=V(typeof l.action=="string"?l.action:i)),u),{})},le=[ue,ie],L=!1,de=t=>{let{parameters:{actions:e}}=t;if(!(e!=null&&e.disable)&&!L&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in R&&typeof R.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let n=R.__STORYBOOK_TEST_ON_MOCK_CALL__;n((a,u)=>{let i=a.getMockName();i!=="spy"&&(!/^next\/.*::/.test(i)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(l=>i.startsWith(l)))&&V(i)(u)}),L=!0}},ce=[de];const pe=["value"],y=q({__name:"vue-num-locale-input",props:{modelValue:{},options:{default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,a=e,u=p("text"),i=p(null),l=w(()=>typeof n.modelValue=="number"?n.modelValue.toLocaleString(void 0,n.options):""),d=r=>{if(!r||typeof r!="string"||(r=r.trim(),!r))return null;let o=parseFloat(r);if(!isNaN(o))return o;let s=r.replace(",",".");return o=parseFloat(s),!isNaN(o)||(s=r.replace(/\s+/g,"").replace(/,(\d{3})/g,"$1").replace(",","."),o=parseFloat(s),!isNaN(o))?o:null},c=w({get:()=>n.modelValue,set:r=>{if(typeof r=="string"){if(r.trim()===""){a("update:modelValue",void 0);return}const o=d(r);o!==null&&a("update:modelValue",o);return}r!=null&&!Number.isNaN(r)&&a("update:modelValue",r)}}),O=r=>{const o=r.target,s=r.key,f=o.selectionStart??0,Y=o.selectionEnd??0,N=f!==Y;s==="Backspace"||s==="Delete"||s==="Tab"||s==="Escape"||s==="Enter"||s==="Home"||s==="End"||s.startsWith("Arrow")||r.ctrlKey||r.metaKey||/^[0-9]$/.test(s)||(s==="."||s===",")&&(N||!o.value.includes(".")&&!o.value.includes(","))||s==="-"&&(f===0||N&&f===0||o.value.toLowerCase().endsWith("e"))||s==="+"&&(f===0||N&&f===0||o.value.toLowerCase().endsWith("e"))||(s==="e"||s==="E")&&o.value.length>0&&!o.value.toLowerCase().includes("e")||r.preventDefault()},x=async()=>{u.value="number",await H(),i.value instanceof HTMLInputElement&&i.value.focus()},_=()=>{u.value="text"},h=G(),m=w(()=>{const{type:r,value:o,...s}=h;return s});return(r,o)=>u.value==="text"?(I(),E("input",T({key:0,type:"text"},m.value,{readonly:"",value:l.value,onFocus:x}),null,16,pe)):z((I(),E("input",T({key:1,type:"number"},m.value,{"onUpdate:modelValue":o[0]||(o[0]=s=>c.value=s),onKeydown:O,onFocusout:_,ref_key:"inpnum",ref:i}),null,16)),[[$,c.value]])}});y.__docgenInfo={exportName:"default",displayName:"vue-num-locale-input",type:1,props:[{name:"modelValue",global:!1,description:"Numeric model value",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"options",global:!1,description:"Options for Intl.NumberFormat",tags:[{name:"see",text:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options"}],required:!1,type:"Record<string, unknown> | undefined",declarations:[],schema:{kind:"enum",type:"Record<string, unknown> | undefined",schema:["undefined","Record<string, unknown>"]},default:"{}"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"Emits when value is changed and is valid number, or undefined when cleared",tags:[],type:"[value: number | undefined]",signature:'(event: "update:modelValue", value: number | undefined): void',declarations:[],schema:[{kind:"enum",type:"number | undefined",schema:["undefined","number"]}]}],slots:[],exposed:[{name:"options",type:"Record<string, unknown>",description:"Options for Intl.NumberFormat",declarations:[],schema:"Record<string, unknown>"},{name:"modelValue",type:"number | undefined",description:"Numeric model value",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}}],sourceFiles:"C:/Users/radek.svitil/Documents/github/vue-num-locale-input/src/lib-components/vue-num-locale-input.vue"};const me={component:y},g={decorators:[()=>({template:`
        <h3>Field displaying number in scientific notation</h3>
        <div style="max-width: 40rem" class="mt-4">
        <story />
        </div>
      `})],render:t=>({components:{VueNumLocaleInput:y},setup(){let e=p(123456789e-20);return{args:t,model:e,updateModel:a=>{e.value=a,V("update")(a)}}},template:`
          <div class="input-group mb-4">
            <span class="input-group-text bg-secondary-subtle w-50">Outside input: </span>
            <input type="number" v-model="model" class="form-control" />
          </div>
          <div class="input-group">
            <span class="input-group-text bg-secondary-subtle w-50">VueNumLocaleInput component</span>
            <VueNumLocaleInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" class="form-control" />
          </div>
    `}),args:{min:-2,max:2e4,options:{notation:"scientific"}}},v={name:"Three fields as Bootstrap Input Group",render:t=>({components:{VueNumLocaleInput:y},data(){return{secondValue:-273.15}},setup(){let e=p(12);return{args:t,firstValue:e,updateFirstValue:a=>e.value=a}},template:`
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
  </div>,`}),args:{step:1,max:20,min:-10,class:"form-control",options:{minimumFractionDigits:void 0,maximumFractionDigits:void 0}}},b={render:t=>({components:{VueNumLocaleInput:y},setup(){let e=p([]);const n=-1e7,a=1e7;for(let u=0;u<10;u++){let i=[];for(let l=0;l<4;l++)i.push(p(Math.random()*(a-n+1)+n));e.value.push(i)}return{args:t,numArray:e}},template:`
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
`}),args:{step:1,min:-1e7,max:1e7,class:"form-control text-end",options:{minimumFractionDigits:2,maximumFractionDigits:2}}};var S,k,A;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(k=g.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var D,B,M;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(B=v.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var P,j,C;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(C=(j=b.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const fe=["SingleFieldWithOptions","ThreeFieldsBootstraped","NumericTable"],ye=Object.freeze(Object.defineProperty({__proto__:null,NumericTable:b,SingleFieldWithOptions:g,ThreeFieldsBootstraped:v,__namedExportsOrder:fe,default:me},Symbol.toStringTag,{value:"Module"}));export{g as S,v as T,ye as V};
