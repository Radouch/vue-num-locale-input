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
    v-model="internalValue"
    @input="updateValue"
    :style="shown === 'text' ? 'display: none' : ''"
    @focusout="handleNumberFocusOut"
    ref="inpnum"
  />
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";

const props = defineProps({
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

const internalValue = ref<number>();

const updateValue = () => {
  /* if (isNaN(parseFloat(event.target.value)) === false) {
    emit("update:modelValue", Number(event.target.value));
  } */
  if (
    internalValue.value !== undefined &&
    internalValue.value !== null &&
    isNaN(internalValue.value) === false
  ) {
    emit("update:modelValue", internalValue.value);
  }
};

/** HTML Input type=number element */
const inpnum = ref<HTMLElement | null>(null);

/** Which type of input is shown? */
const shown = ref("text");

/** Handle FocusIn event on input type=text - replace text input with number input */
const handleNumberFocusIn = async () => {
  internalValue.value = props.modelValue;
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
