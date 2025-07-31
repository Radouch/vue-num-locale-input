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
    @keydown="handleKeyDown"
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

/** Internal value for input type=number */
const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => {
    // Handle string input from user typing
    if (typeof val === 'string') {
      const parsedNumber = parseNumberAggressive(val);
      if (parsedNumber !== null) {
        emit("update:modelValue", parsedNumber);
      }
      return;
    }
    
    // Handle numeric input
    if (val !== undefined && val !== null && !Number.isNaN(val)) {
      emit("update:modelValue", val);
    }
  },
});

/** Handle keydown events to prevent invalid characters (like Chrome does) */
const handleKeyDown = (event: KeyboardEvent) => {
  const target = event.target as HTMLInputElement;
  const key = event.key;
  
  // Allow control keys (backspace, delete, arrow keys, tab, etc.)
  if (
    key === 'Backspace' ||
    key === 'Delete' ||
    key === 'Tab' ||
    key === 'Escape' ||
    key === 'Enter' ||
    key === 'Home' ||
    key === 'End' ||
    key.startsWith('Arrow') ||
    (event.ctrlKey || event.metaKey) // Allow Ctrl/Cmd combinations (copy, paste, etc.)
  ) {
    return; // Allow these keys
  }
  
  // Allow digits
  if (/^[0-9]$/.test(key)) {
    return;
  }
  
  // Allow decimal point/comma (but only one)
  if ((key === '.' || key === ',') && !target.value.includes('.') && !target.value.includes(',')) {
    return;
  }
  
  // Allow minus sign at the beginning
  if (key === '-' && target.selectionStart === 0 && !target.value.includes('-')) {
    return;
  }
  
  // Allow 'e' or 'E' for scientific notation (but only one, and not at the beginning)
  if ((key === 'e' || key === 'E') && target.value.length > 0 && !target.value.toLowerCase().includes('e')) {
    return;
  }
  
  // Allow '+' or '-' after 'e' for scientific notation
  if ((key === '+' || key === '-') && target.value.toLowerCase().endsWith('e')) {
    return;
  }
  
  // Block all other keys
  event.preventDefault();
};

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
