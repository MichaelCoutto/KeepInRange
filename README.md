# Keep In Range
Check if a given number is inside the range of two numbers, the result is limited by the ranges. Also works with decimal numbers

**Installation:**

    npm install keep-in-range --save

**API:**
```js
keepinrange(value, minValue, maxValue)
```

**Usage:**
```js
const keepinrange = require('keep-in-range');
var value = keepinrange(50,100,200); //Value will be 100
var value = keepinrange(150,100,200); //Value will be 150
var value = keepinrange(300,100,200); //Value will be 200
```
