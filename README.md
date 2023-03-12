# vue-num-locale-input

[![npm version](https://img.shields.io/npm/v/vue-num-locale-input.svg)](https://npm.im/vue-num-locale-input) ![Monthly Downloads](https://img.shields.io/npm/dm/vue-num-locale-input.svg?style=flat-square) ![MIT License](https://img.shields.io/npm/l/vue-num-locale-input)

> [Vue 3](https://vuejs.org/) **form input field** component edited as **numeric input field**, displayed as **language sensitive text field**.

* For language-sensitive representation of numbers see [Number.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)
* Locale formatted number is displayed **only** if the field does **not** have focus. Otherwise it looks and behaves as normal numeric input field.
* Especially useful for creating clear and easy to read tables containing numbers.

## Installation

```cmd
npm install vue-num-locale-input
```

## Usage

```html
<script>
import VueNumLocaleInput from "vue-num-locale-input";
</script>

<template>
  <VueNumLocaleInput
    v-model="yourNumericVariable"
    class="some-class"
    min="-10"
    max="10"
    step="2"
    :options="{maximumFractionDigits: 1}"
  />
</template>
```

## Important notes

* Default _locales_ is used (= browser settings). This version of the component does not allow to set it manually by props.
* Property `options` is the same as documented in [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat).
* You **must not** use html attribute _type_ (e.g. `type="number"`) on the component. It breaks its functionality.
