# CHANGELOG

## Version 1.2.0

* More aggresive conversion to numbers (e.g. accepting both decimal comma and decimal point).
* Fixed problem with "zeroing" input if user entered something which was not a number and then left the field.

## Version 1.1.0

* Fixed problem with "zeroing" input if user entered something which was not a number. Now the input is not changed in such case.
* Better suppport for entering numbers in exponential notation.

## Version 1.0.0

* **No default `options`**. So far, the default option was:

```javascript
{
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}
```
