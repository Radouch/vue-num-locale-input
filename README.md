# VueNumLocaleInput

This _Vue 3_ component can be used as **input numeric field** which is **rendered as language sensitive string**, see [Number.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString).

Locale formatted number is displayed **only** if the field is **not** edited (does not have focus). Otherwise it looks and behaves as normal numeric input field.

## Installation

```cmd
npm install vue-num-locale-input
```

## Usage

```javascript
import VueNumLocaleInput from "vue-num-locale-input";
```

```html
<VueNumLocaleInput v-model="yourNumericVariable" class="some-class" min="-10" max="10" step="2" :options="{maximumFractionDigits: 1}" />
```

## Important notes

* Default _locales_ is used (= browser settings). This version of the component does not allow to set it manually by props.
* Property `options` is the same as documented in [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat).
* You must not use html attribute _type_ (e.g. `type="number"`) on the component. It breaks its functionality.
