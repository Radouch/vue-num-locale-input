<template>
  <input
    type="text"
    v-bind="$attrs"
    :style="shown === 'number' ? 'display: none' : ''"
    readonly
    :value="
      typeof modelValue === 'number'
        ? modelValue.toLocaleString(undefined, options)
        : ''
    "
    @focus="handleNumberFocusIn"
  />
  <input
    type="number"
    v-bind="$attrs"
    :value="modelValue"
    @input="updateValue"
    :style="shown === 'text' ? 'display: none' : ''"
    @focusout="handleNumberFocusOut"
    ref="inpnum"
  />
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";

defineProps({
  modelValue: {
    type: Number,
    required: false,
  },
  /** See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options */
  options: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: any) => {
  emit("update:modelValue", Number(event.target.value));
};

/** HTML Input type=number element */
const inpnum = ref<HTMLElement | null>(null);

/** Which type of input is shown? */
const shown = ref("text");

/** Handle FocusIn event on input type=text */
const handleNumberFocusIn = async () => {
  shown.value = "number";
  if (inpnum.value !== null) {
    await nextTick();
    inpnum.value.focus();
  }
};

/** Handle FocusOut event on input type=number */
const handleNumberFocusOut = () => {
  shown.value = "text";
};
</script>
