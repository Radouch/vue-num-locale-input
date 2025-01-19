/* VueNumLocaleInput.stories.ts */

import type { Meta, StoryObj } from "@storybook/vue3";
import VueNumLocaleInput from "../lib-components/vue-num-locale-input.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { ref, type Ref } from "vue";

type Story = StoryObj<typeof VueNumLocaleInput> & {args: {min?: number, max?: number, step?: number}};

/* const meta: Meta<Story> = {
  component: VueNumLocaleInput
}; */

// Nw we can use the satisfies method to check if the StoryObj is a Meta
const meta = {
  component: VueNumLocaleInput,
} satisfies Meta<typeof VueNumLocaleInput>;

export default meta;

export const SingleFieldWithOptions: Story = {
  decorators: [
    () => ({
      template: `
        <h3>Field displaying number in scientific notation</h3>
        <div style="max-width: 40rem" class="mt-4">
        <story />
        </div>
      `,
    }),
  ],
  render: (args: any) => ({
    components: { VueNumLocaleInput },
    setup() {
      let model: Ref<number> = ref(1.23456789e-12);
      const updateModel = (event: number) => (model.value = event);
      return { args, model, updateModel };
    },
    template: `
          <div class="input-group mb-4">
            <span class="input-group-text bg-secondary-subtle w-50">Outside input: </span>
            <input type="number" v-model="model" class="form-control" />
          </div>
          <div class="input-group">
            <span class="input-group-text bg-secondary-subtle w-50">VueNumLocaleInput component</span>
            <VueNumLocaleInput v-bind="args" :modelValue="model" @update:modelValue="updateModel" class="form-control" />
          </div>
    `,
  }),
  args: {
    min: -2,
    max: 20000,
    options: {
      notation: "scientific",
      // minimumFractionDigits: 1,
      // maximumFractionDigits: 3,
      // minimumIntegerDigits: 3,
    },
  },
};

export const ThreeFieldsBootstraped = {
  name: "Three fields as Bootstrap Input Group",
  render: (args: any) => ({
    components: { VueNumLocaleInput },
    data() {
      return { secondValue: -273.15 };
    },
    setup() {
      let firstValue: Ref<number> = ref(12);
      const updateFirstValue = (event: number) => (firstValue.value = event);
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
  </div>,`,
  }),
  args: {
    step: 1,
    max: 20,
    min: -10,
    class: "form-control",
    options: {
      minimumFractionDigits: undefined,
      maximumFractionDigits: undefined,
    },
  },
};

export const NumericTable = {
  render: (args: any) => ({
    components: { VueNumLocaleInput },
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
        numArray,
      };
    },
    template: `
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
`,
  }),
  args: {
    step: 1,
    min: -10000000,
    max: 10000000,
    class: "form-control text-end",
    options: {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  },
};
