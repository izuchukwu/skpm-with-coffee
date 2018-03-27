# sketch-polyfill-setInterval

A [setInterval](https://developer.mozilla.org/fr/docs/Web/API/WindowTimers/setInterval) polyfill for sketch.

## Installation

```bash
npm i -S sketch-polyfill-setinterval
```

## Usage

```js
import {setInterval, clearInterval} from 'sketch-polyfill-setinterval'

const interval = setInterval(
  (param) => console.log(param),
  1000,
  'hello world'
)

clearInterval(interval)
```
