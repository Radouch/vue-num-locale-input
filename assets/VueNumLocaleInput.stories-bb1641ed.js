import{d as x,a as l,b as L,e as c,m as v,F as D,n as T,o as _}from"./vue.esm-bundler-99f97b98.js";const S=["value"],w=["value"],i=x({__name:"vue-num-locale-input",props:{modelValue:{type:Number,required:!1},options:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:n}){const u=p=>{n("update:modelValue",Number(p.target.value))},t=l(null),a=l("text"),m=async()=>{a.value="number",t.value!==null&&(await T(),t.value.focus())},d=()=>{a.value="text"};return(p,M)=>(_(),L(D,null,[c("input",v({type:"text"},p.$attrs,{style:a.value==="number"?"display: none":"",readonly:"",value:typeof e.modelValue=="number"?e.modelValue.toLocaleString(void 0,e.options):"",onFocus:m}),null,16,S),c("input",v({type:"number"},p.$attrs,{value:e.modelValue,onInput:u,style:a.value==="text"?"display: none":"",onFocusout:d,ref_key:"inpnum",ref:t}),null,16,w)],64))}});i.__docgenInfo={exportName:"default",displayName:"vue-num-locale-input",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!1},{name:"options",description:"See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options",type:{name:"object"},required:!1,defaultValue:{func:!1,value:"{}"}}],events:[{name:"update:modelValue"}],sourceFiles:["C:/Users/radek.svitil/Documents/github/vue-num-locale-input/src/lib-components/vue-num-locale-input.vue"]};const j={title:"VueNumLocaleInput",component:i},o={render:e=>({components:{VueNumLocaleInput:i},setup(){let n=l(12);return{args:e,model:n,updateModel:t=>n.value=t}},data(){return{numValue:13}},template:`
    <h3>Field displaying number in scientific notation</h3>
    <VueNumLocaleInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" />
    `}),args:{min:-2,max:2e4,options:{notation:"scientific",minimumFractionDigits:1,maximumFractionDigits:3,minimumIntegerDigits:3}}},s={name:"Three fields as Bootstrap Input Group",render:e=>({components:{VueNumLocaleInput:i},data(){return{secondValue:-273.15}},setup(){let n=l(12);return{args:e,firstValue:n,updateFirstValue:t=>n.value=t}},template:`
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
  </div>,`}),args:{step:1,max:20,class:"form-control",options:{minimumFractionDigits:void 0,maximumFractionDigits:void 0}}},r={name:"Numeric Table",render:e=>({components:{VueNumLocaleInput:i},data(){return{secondValue:-273.15}},setup(){let n=l([]);const u=-1e7,t=1e7;for(let a=0;a<10;a++){let m=[];for(let d=0;d<4;d++)m.push(Math.random()*(t-u+1)+u);n.value.push(m)}return{args:e,numArray:n}},template:`
    <h3>Table with random generated numbers from -1E7 to +1E7</h3>
    <div class="table-responsive">
    <table class="table table-primary table-bordered">
    <tbody>
    <tr v-for="row in numArray">
    <td v-for="cell in row"><VueNumLocaleInput v-bind="args" v-model="cell" /></td>
    </tr>
    </tbody>
    </table>
    </div>
`}),args:{step:1,class:"form-control text-end",options:{minimumFractionDigits:2,maximumFractionDigits:2}}};var g,b,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    template: \`
    <h3>Field displaying number in scientific notation</h3>
    <VueNumLocaleInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" />
    \`
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
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var V,h,F;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Three fields as Bootstrap Input Group",
  render: args => ({
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
    class: "form-control",
    options: {
      minimumFractionDigits: undefined,
      maximumFractionDigits: undefined
    }
  }
}`,...(F=(h=s.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var y,N,I;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Numeric Table",
  render: args => ({
    components: {
      VueNumLocaleInput
    },
    data() {
      return {
        secondValue: -273.15
      };
    },
    setup() {
      let numArray = ref([]);
      const min = -10000000;
      const max = 10000000;
      for (let i = 0; i < 10; i++) {
        let row = [];
        for (let j = 0; j < 4; j++) {
          row.push(Math.random() * (max - min + 1) + min);
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
    <td v-for="cell in row"><VueNumLocaleInput v-bind="args" v-model="cell" /></td>
    </tr>
    </tbody>
    </table>
    </div>
\`
  }),
  args: {
    step: 1,
    class: "form-control text-end",
    options: {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  }
}`,...(I=(N=r.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const B=["SingleFieldWithOptions","ThreeFieldsBootstraped","NumericTable"],A=Object.freeze(Object.defineProperty({__proto__:null,NumericTable:r,SingleFieldWithOptions:o,ThreeFieldsBootstraped:s,__namedExportsOrder:B,default:j},Symbol.toStringTag,{value:"Module"}));export{o as S,s as T,A as V};
//# sourceMappingURL=VueNumLocaleInput.stories-bb1641ed.js.map
