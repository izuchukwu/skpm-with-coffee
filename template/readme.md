# {{ name }}

## Using it

✨

## Development

### Installation

To set up {{ name }} for development:

``` bash
# clone the repo
git clone this-repository

# open the repo
cd this-repository

# install its dependencies, build, & link to Sketch
yarn install
```

or `npm install`.

### Development

{{ name }} uses [skpm](https://github.com/skpm/skpm) to compile [CoffeeScript](http://coffeescript.org)'s transpiled ES6 output to [CocoaScript](http://developer.sketchapp.com/introduction/cocoascript/) and build it to a Sketch plugin, to bundle its dependencies, and to monitor Sketch's logs. Rather than call `coffee` or `skpm` directly, check out the included scripts:

``` bash
# transpile, build, & watch for both
yarn watch

# watch the logs
yarn log

# transpile, but don't build
yarn coffee

# build for production
yarn build
```

or `npm run` instead of `yarn` if that's more your thing.

### Configuration

#### CoffeeScript

To modify the CoffeeScript compiler arguments, see the `coffee` and `watch-coffee` scripts in `package.json`.

#### Sketch & skpm

The Sketch manifest can be modified in `js/manifest.json`. To modify the skpm build arguments, see the `sketch` and `watch-sketch` scripts in `package.json`.

#### Babel

skpm uses Babel to compile ES6 to CocoaScript-compatible JS.
To customize Babel, see skpm's [documentation on Babel](https://github.com/skpm/skpm/tree/master/template#babel).

#### Webpack

skpm uses Webpack to bundle {{ name }}'s dependencies.
To customize webpack, see skpm's [documentation on Webpack](https://github.com/skpm/skpm/tree/master/template#webpack).

✌️
