<template>
  <input
    v-if="shown === 'text'"
    type="text"
    v-bind="filteredAttrs"
    readonly
    :value="formattedValue"
    @focus="handleNumberFocusIn"
  />
  <input
    v-else
    type="number"
    v-bind="filteredAttrs"
    v-model="internalValue"
    @focusout="handleNumberFocusOut"
    ref="inpnum"
  />
</template>

<script setup lang="ts">
import { ref, nextTick, computed, useAttrs } from "vue";

interface Props {
  /** 
   * Numeric model value
   *  */
  modelValue?: number;
  /** 
   * Options for Intl.NumberFormat
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   */
  options?: Record<string, unknown>;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});

interface Emits {
  /** Emits when value is changed and is valid number */
  (event: "update:modelValue", value: number) : void;
}

const emit = defineEmits<Emits>();

// const emit = defineEmits(["update:modelValue"]);

/** Which type of input is shown? */
const shown = ref("text");

/** HTML Input type=number element */
const inpnum = ref<HTMLInputElement | null>(null);

/** Number formatted as locale string */
const formattedValue = computed(() => {
  return typeof props.modelValue === 'number'
    ? props.modelValue.toLocaleString(undefined, props.options)
    : '';
});

/** Internal value for input type=number */
const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => {
    if (val !== undefined && val !== null && !isNaN(val)) {
      emit("update:modelValue", val);
    }
  },
});

/** Handle FocusIn event on input type=text - replace text input with number input */
const handleNumberFocusIn = async () => {
  shown.value = "number";
  await nextTick();
  if (inpnum.value instanceof HTMLInputElement) {
    inpnum.value.focus();
  }
};

/** Handle FocusOut event on input type=number */
const handleNumberFocusOut = () => {
  shown.value = "text";
};

/** Prevent passing unwanted attributes to input elements */
const attrs = useAttrs();
const filteredAttrs = computed(() => {
  const { type, value, ...rest } = attrs;
  return rest;
});
</script>
