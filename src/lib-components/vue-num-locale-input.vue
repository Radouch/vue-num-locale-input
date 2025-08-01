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
  /** Emits when value is changed and is valid number, or null when cleared */
  (event: "update:modelValue", value: number | null): void;
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
  if (!input || typeof input !== "string") return null;

  // Trim whitespace
  input = input.trim();
  if (!input) return null;

  // Try direct parsing first
  let num = parseFloat(input);
  if (!isNaN(num)) return num;

  // Replace decimal comma with decimal point for locales that use comma
  let cleaned = input.replace(",", ".");
  num = parseFloat(cleaned);
  if (!isNaN(num)) return num;

  // Try more aggressive cleaning: remove thousand separators
  // Handle common patterns like "1 234,56" or "1,234.56"
  cleaned = input
    .replace(/\s+/g, "") // Remove spaces
    .replace(/,(\d{3})/g, "$1") // Remove comma thousand separators
    .replace(",", "."); // Replace remaining comma with dot

  num = parseFloat(cleaned);
  if (!isNaN(num)) return num;

  return null;
};

/** Internal value for input type=number */
const internalValue = computed({
  get: () => props.modelValue,
  set: (val: any) => {
    // Handle string input from user typing
    if (typeof val === "string") {
      // Handle empty string - clear the model value
      if (val.trim() === "") {
        emit("update:modelValue", null);
        return;
      }

      const parsedNumber = parseNumberAggressive(val);
      if (parsedNumber !== null) {
        emit("update:modelValue", parsedNumber);
      }
      // Note: if parsing fails, we don't emit anything, keeping the current value
      // This allows the user to continue typing (e.g., typing "1." while building "1.23")
      return;
    }

    // Handle numeric input
    if (val !== undefined && val !== null && !Number.isNaN(val)) {
      emit("update:modelValue", val as number);
    }
  },
});

/** Handle keydown events to prevent invalid characters */
const handleKeyDown = (event: KeyboardEvent) => {
  const target = event.target as HTMLInputElement;
  const key = event.key;
  const value = target.value;

  // Allow digits
  if (/^[0-9]$/.test(key)) {
    return;
  }

  // Allow control keys (backspace, delete, arrow keys, tab, etc.)
  if (
    key === "Backspace" ||
    key === "Delete" ||
    key === "Tab" ||
    key === "Escape" ||
    key === "Enter" ||
    key === "Home" ||
    key === "End" ||
    key === "Shift" ||
    key === "." ||
    key === "," ||
    key === "-" ||
    key === "+" ||
    key.toLowerCase() === "e" ||
    key.startsWith("Arrow") ||
    event.ctrlKey ||
    event.metaKey // Allow Ctrl/Cmd combinations (copy, paste, etc.)
  ) {
    return; // Allow these keys
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
