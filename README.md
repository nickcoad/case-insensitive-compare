# case-insensitive-compare

Case insensitive string comparison.

## Install

```
npm install case-insensitive-compare
```

## Usage

```js
const compare = require("case-insensitive-compare");

compare("test", "test"); // true
compare("test", "Test"); // true
```

## Parameters

- `a` `{String}` The first string to compare.
- `b` `{String}` The second string to compare.

## Returns

- `{Boolean}` The result of comparing the two strings, ignoring case.
