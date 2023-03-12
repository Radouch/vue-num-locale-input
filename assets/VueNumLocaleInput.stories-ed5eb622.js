import{d as N,a as r,b as x,e as m,m as p,F as I,n as y,o as L}from"./vue.esm-bundler-437c4d54.js";const h=["value"],_=["value"],i=N({__name:"vue-num-locale-input",props:{modelValue:{type:Number,required:!1},options:{type:Object,required:!1,default:()=>({minimumFractionDigits:2,maximumFractionDigits:2})}},emits:["update:modelValue"],setup(e,{emit:n}){const u=l=>{n("update:modelValue",Number(l.target.value))},a=r(null),t=r("text"),b=async()=>{t.value="number",a.value!==null&&(await y(),a.value.focus())},F=()=>{t.value="text"};return(l,O)=>(L(),x(I,null,[m("input",p({type:"text"},l.$attrs,{style:t.value==="number"?"display: none":"",readonly:"",value:typeof e.modelValue=="number"?e.modelValue.toLocaleString(void 0,e.options):"",onFocus:b}),null,16,h),m("input",p({type:"number"},l.$attrs,{value:e.modelValue,onInput:u,style:t.value==="text"?"display: none":"",onFocusout:F,ref_key:"inpnum",ref:a}),null,16,_)],64))}});i.__docgenInfo={exportName:"default",displayName:"vue-num-locale-input",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!1},{name:"options",description:"See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options",type:{name:"object"},required:!1,defaultValue:{func:!1,value:`{\r
  minimumFractionDigits: 2,\r
  maximumFractionDigits: 2\r
}`}}],events:[{name:"update:modelValue"}]};const S={title:"VueNumLocaleInput",component:i},s={render:e=>({components:{VueNumLocaleInput:i},setup(){let n=r(12);return{args:e,model:n,updateModel:a=>n.value=a}},data(){return{numValue:13}},template:'<VueNumLocaleInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" />'}),args:{min:-2,max:2e4,options:{notation:"scientific",minimumFractionDigits:1,maximumFractionDigits:3,minimumIntegerDigits:3}}},o={name:"Three fields as Bootstrap Input Group",render:(e,n)=>({components:{VueNumLocaleInput:i},data(){return{secondValue:-273.15}},setup(){let u=r(12);return{args:e,args2:n,firstValue:u,updateFirstValue:t=>u.value=t}},template:`
    <div class="mb-4">first value: {{firstValue}}, second value: {{secondValue}}</div>
  <div class="input-group mb-3">
  <span class="input-group-text">first value</span><VueNumLocaleInput v-bind="args" :modelValue="firstValue" @update:modelValue="updateFirstValue" /><span class="input-group-text">also firstValue</span><VueNumLocaleInput v-bind="args" v-model="firstValue" /><span class="input-group-text">second value</span><VueNumLocaleInput v-bind="args" v-model="secondValue" /></div>
  `}),args:{step:1,max:20,class:"form-control"},args2:{step:2,max:22,class:"form-control"}};var d,c,V;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VueNumLocaleInput
    },
    setup() {
      let model = ref(12);
      const updateModel = event => model.value = event;
      return {
        args,
        model,
        updateModel
      };
    },
    data() {
      return {
        numValue: 13
      };
    },
    template: \`<VueNumLocaleInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" />\`
  }),
  args: {
    min: -2,
    max: 20000,
    options: {
      notation: "scientific",
      minimumFractionDigits: 1,
      maximumFractionDigits: 3,
      minimumIntegerDigits: 3
    }
  }
}`,...(V=(c=s.parameters)==null?void 0:c.docs)==null?void 0:V.source}}};var v,g,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Three fields as Bootstrap Input Group",
  render: (args, args2) => ({
    components: {
      VueNumLocaleInput
    },
    data() {
      return {
        secondValue: -273.15
      };
    },
    setup() {
      let firstValue = ref(12);
      const updateFirstValue = event => firstValue.value = event;
      return {
        args,
        args2,
        firstValue,
        updateFirstValue
      };
    },
    template: \`
    <div class="mb-4">first value: {{firstValue}}, second value: {{secondValue}}</div>
  <div class="input-group mb-3">
  <span class="input-group-text">first value</span><VueNumLocaleInput v-bind="args" :modelValue="firstValue" @update:modelValue="updateFirstValue" /><span class="input-group-text">also firstValue</span><VueNumLocaleInput v-bind="args" v-model="firstValue" /><span class="input-group-text">second value</span><VueNumLocaleInput v-bind="args" v-model="secondValue" /></div>
  \`
  }),
  args: {
    step: 1,
    max: 20,
    class: "form-control"
  },
  args2: {
    step: 2,
    max: 22,
    class: "form-control"
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const D=["SingleFieldWithOptions","ThreeFieldsBootstraped"],M=Object.freeze(Object.defineProperty({__proto__:null,SingleFieldWithOptions:s,ThreeFieldsBootstraped:o,__namedExportsOrder:D,default:S},Symbol.toStringTag,{value:"Module"}));export{s as S,o as T,M as V};
//# sourceMappingURL=VueNumLocaleInput.stories-ed5eb622.js.map
