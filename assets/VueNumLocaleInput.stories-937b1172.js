import{d as S,e as u,f as j,g,m as b,j as M,v as O,F as _,n as B,o as A}from"./vue.esm-bundler-e4216748.js";const E=["value"],m=S({__name:"vue-num-locale-input",props:{modelValue:{type:Number,required:!1},options:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:n}){const s=e,a=n,t=u(),p=()=>{t.value!==void 0&&t.value!==null&&isNaN(t.value)===!1&&a("update:modelValue",t.value)},o=u(null),d=u("text"),w=async()=>{t.value=s.modelValue,d.value="number",o.value!==null&&(await B(),o.value.focus())},T=()=>{d.value="text"};return(c,v)=>(A(),j(_,null,[g("input",b({type:"text"},c.$attrs,{style:d.value==="number"?"display: none":"",readonly:"",value:typeof e.modelValue=="number"?e.modelValue.toLocaleString(void 0,e.options):"",onFocus:w}),null,16,E),M(g("input",b({type:"number"},c.$attrs,{"onUpdate:modelValue":v[0]||(v[0]=D=>t.value=D),onInput:p,style:d.value==="text"?"display: none":"",onFocusout:T,ref_key:"inpnum",ref:o}),null,16),[[O,t.value]])],64))}});m.__docgenInfo={exportName:"default",displayName:"vue-num-locale-input",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!1},{name:"options",description:"See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options",type:{name:"object"},required:!1,defaultValue:{func:!1,value:"{}"}}],events:[{name:"update:modelValue"}],sourceFiles:["C:/Users/radek.svitil/Documents/github/vue-num-locale-input/src/lib-components/vue-num-locale-input.vue"]};const k={title:"VueNumLocaleInput",component:m},l={render:e=>({components:{VueNumLocaleInput:m},setup(){let n=u(12);return{args:e,model:n,updateModel:a=>n.value=a}},template:`
    <h3>Field displaying number in scientific notation</h3>
    <div style="max-width: 40rem" class="mt-4">
    <div class="input-group mb-4"><span class="input-group-text bg-secondary-subtle w-50">Outside input: </span><input type="number" v-model="model" class="form-control" /></div>
    <div class="input-group"><span class="input-group-text bg-secondary-subtle w-50">VueNumLocaleInput component</span><VueNumLocaleInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" class="form-control" /></div>
    </div>
    `}),args:{min:-2,max:2e4,options:{notation:"scientific"}}},r={name:"Three fields as Bootstrap Input Group",render:e=>({components:{VueNumLocaleInput:m},data(){return{secondValue:-273.15}},setup(){let n=u(12);return{args:e,firstValue:n,updateFirstValue:a=>n.value=a}},template:`
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
  </div>,`}),args:{step:1,max:20,class:"form-control",options:{minimumFractionDigits:void 0,maximumFractionDigits:void 0}}},i={render:e=>({components:{VueNumLocaleInput:m},data(){return{secondValue:-273.15}},setup(){let n=u([]);const s=-1e7,a=1e7;for(let t=0;t<10;t++){let p=[];for(let o=0;o<4;o++)p.push(Math.random()*(a-s+1)+s);n.value.push(p)}return{args:e,numArray:n}},template:`
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
`}),args:{step:1,class:"form-control text-end",options:{minimumFractionDigits:2,maximumFractionDigits:2}}};var f,V,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    template: \`
    <h3>Field displaying number in scientific notation</h3>
    <div style="max-width: 40rem" class="mt-4">
    <div class="input-group mb-4"><span class="input-group-text bg-secondary-subtle w-50">Outside input: </span><input type="number" v-model="model" class="form-control" /></div>
    <div class="input-group"><span class="input-group-text bg-secondary-subtle w-50">VueNumLocaleInput component</span><VueNumLocaleInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" class="form-control" /></div>
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
}`,...(y=(V=l.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var h,x,N;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(N=(x=r.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var F,I,L;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const G=["SingleFieldWithOptions","ThreeFieldsBootstraped","NumericTable"],U=Object.freeze(Object.defineProperty({__proto__:null,NumericTable:i,SingleFieldWithOptions:l,ThreeFieldsBootstraped:r,__namedExportsOrder:G,default:k},Symbol.toStringTag,{value:"Module"}));export{l as S,r as T,U as V};
