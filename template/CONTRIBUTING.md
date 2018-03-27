## Contributing

This plugin uses [skpm](https://github.com/skpm/skpm) to compile [CoffeeScript](http://coffeescript.org)'s ES6 output to [CocoaScript](http://developer.sketchapp.com/introduction/cocoascript/) and build it to a Sketch plugin, to bundle its dependencies, and to monitor Sketch's logs. Rather than call `coffee` or `skpm` directly, check out the included scripts:

``` bash
# compile, build, & watch for changes
yarn watch

# watch the logs
yarn log

# build only
yarn build
```

or `npm run` instead of `yarn`.

### Configuration

#### CoffeeScript, Sketch & skpm

The Sketch manifest can be modified in `source/manifest.json`. To modify the CoffeeScript compiler arguments, see the `coffee` script in `package.json`, and to modify the skpm build arguments, see the `sketch` script in `package.json`.

#### Babel & Webpack

skpm uses Babel to compile ES6 to CocoaScript-compatible JS and webpack to bundle this plugin's dependencies.
- To customize Babel, see skpm's [documentation on Babel](https://github.com/skpm/skpm/tree/master/template#babel).
- To customize webpack, see skpm's [documentation on Webpack](https://github.com/skpm/skpm/tree/master/template#webpack).
