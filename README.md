# case-insensitive-compare

[![Travis Build Status](https://travis-ci.org/nickcoad/case-insensitive-compare.svg?branch=master)](https://travis-ci.org/nickcoad/case-insensitive-compare) [![Coverage Status](https://coveralls.io/repos/github/nickcoad/case-insensitive-compare/badge.svg?branch=master)](https://coveralls.io/github/nickcoad/case-insensitive-compare?branch=master) [![Dependencies](https://david-dm.org/nickcoad/case-insensitive-compare.svg)](https://david-dm.org/nickcoad/case-insensitive-compare#info=dependencies) [![Greenkeeper badge](https://badges.greenkeeper.io/nickcoad/case-insensitive-compare.svg)](https://greenkeeper.io/)

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
