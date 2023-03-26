/* VueNumLocaleInput.stories.js */

import VueNumLocaleInput from "../lib-components/vue-num-locale-input.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { ref } from "vue";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "VueNumLocaleInput",
  component: VueNumLocaleInput,
};

export const SingleFieldWithOptions = {
    render: (args) => ({
    components: { VueNumLocaleInput },
    setup() {
      let model = ref(12);
      const updateModel = (event) => (model.value = event);
      return { args, model, updateModel };
    },
    data() {
      return { numValue: 13 };
    },
    template: `
    <h3>Field displaying number in scientific notation</h3>
    <VueNumLocaleInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" />
    `,
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
  },
};

export const ThreeFieldsBootstraped = {
  name: "Three fields as Bootstrap Input Group",
  render: (args) => ({
    components: { VueNumLocaleInput },
    data() {
      return { secondValue: -273.15 };
    },
    setup() {
      let firstValue = ref(12);
      const updateFirstValue = (event) => (firstValue.value = event);
      return {
        args,
        firstValue,
        updateFirstValue,
      };
    },
    template: `
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
  </div>,`
  }),
  args: {
    step: 1,
    max: 20,
    class: "form-control",
    options: {
      minimumFractionDigits: undefined,
      maximumFractionDigits: undefined,
    }

  }
};

export const NumericTable = {
  name: "Numeric Table",
  render: (args) => ({
    components: { VueNumLocaleInput },
    data() {
      return { secondValue: -273.15 };
    },
    setup() {
      let numArray = ref([]);
      const min = -10000000;
      const max =  10000000;
      for (let i = 0; i < 10; i++) {
        let row = [];
        for (let j = 0; j < 4; j++) {
          row.push(Math.random() * (max - min + 1) +min);
        }
        numArray.value.push(row);
      }
      console.log(numArray.value);
      return {
        args,
        numArray
      };
    },
    template: `
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
`
  }),
  args: {
    step: 1,
    class: "form-control text-end",
    options: {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  }
};
