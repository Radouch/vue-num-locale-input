/* VueNumLocaleInput.stories.js */

import VueNumLocaleInput from "../lib-components/vue-num-locale-input.vue";
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
    template: `<VueNumLocaleInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" />`,
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
  render: (args, args2) => ({
    components: { VueNumLocaleInput },
    data() {
      return { secondValue: -273.15 };
    },
    setup() {
      let firstValue = ref(12);
      const updateFirstValue = (event) => (firstValue.value = event);
      return {
        args,
        args2,
        firstValue,
        updateFirstValue,
      };
    },
    template: `
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
  },
  args2: {
    step: 2,
    max: 22,
    class: "form-control",
  }
};
