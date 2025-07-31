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
    :value="numberInputValue"
    @input="handleNumberInput"
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
  (event: "update:modelValue", value: number): void;
}

const emit = defineEmits<Emits>();

// const emit = defineEmits(["update:modelValue"]);

/** Which type of input is shown? */
const shown = ref("text");

/** HTML Input type=number element */
const inpnum = ref<HTMLInputElement | null>(null);

/** Raw user input in the number field (preserves invalid input) */
const rawNumberInput = ref<string>("");

/** Number formatted as locale string */
const formattedValue = computed(() => {
  return typeof props.modelValue === "number"
    ? props.modelValue.toLocaleString(undefined, props.options)
    : "";
});

/** Parse number more aggressively to handle various formats */
const parseNumberAggressive = (input: string): number | null => {
  if (!input || typeof input !== 'string') return null;
  
  // Trim whitespace
  input = input.trim();
  if (!input) return null;
  
  // Try direct parsing first
  let num = parseFloat(input);
  if (!isNaN(num)) return num;
  
  // Replace decimal comma with decimal point for locales that use comma
  let cleaned = input.replace(',', '.');
  num = parseFloat(cleaned);
  if (!isNaN(num)) return num;
  
  // Try more aggressive cleaning: remove thousand separators
  // Handle common patterns like "1 234,56" or "1,234.56"
  cleaned = input
    .replace(/\s+/g, '') // Remove spaces
    .replace(/,(\d{3})/g, '$1') // Remove comma thousand separators
    .replace(',', '.'); // Replace remaining comma with dot
  
  num = parseFloat(cleaned);
  if (!isNaN(num)) return num;
  
  return null;
};

/** Value to display in the number input */
const numberInputValue = computed(() => {
  // If we have raw user input, show that (preserves invalid input)
  if (rawNumberInput.value !== "") {
    return rawNumberInput.value;
  }
  // Otherwise show the current model value
  return props.modelValue?.toString() ?? "";
});

/** Internal value for input type=number */
const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => {
    if (val !== undefined && val !== null && !Number.isNaN(val)) {
      emit("update:modelValue", val);
    }
  },
});

/** Handle input events on the number field */
const handleNumberInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const inputValue = target.value;
  
  // Store the raw input to preserve invalid values
  rawNumberInput.value = inputValue;
  
  // Try to parse and emit if it's a valid number
  const parsedNumber = parseNumberAggressive(inputValue);
  if (parsedNumber !== null) {
    emit("update:modelValue", parsedNumber);
  }
};

/** Handle FocusIn event on input type=text - replace text input with number input */
const handleNumberFocusIn = async () => {
  shown.value = "number";
  // Clear raw input so we start with the current model value
  rawNumberInput.value = "";
  await nextTick();
  if (inpnum.value instanceof HTMLInputElement) {
    inpnum.value.focus();
  }
};

/** Handle FocusOut event on input type=number */
const handleNumberFocusOut = () => {
  shown.value = "text";
  // Keep the raw input - don't clear it anymore
  // This preserves invalid input for the user to see and correct
};

/** Prevent passing unwanted attributes to input elements */
const attrs = useAttrs();
const filteredAttrs = computed(() => {
  const { type, value, ...rest } = attrs;
  return rest;
});
</script>
