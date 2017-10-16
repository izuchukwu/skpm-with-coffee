# skpm-with-coffee
An skpm template for developing for Sketch with CoffeeScript

## Creating a plugin

	skpm create my-plugin --template izuchukwu/skpm-with-coffee

This will:

1. Create your Sketch plugin with the `skpm-with-coffee` template
2. Install `skpm`, `npm-run-all` (for parallel script execution), and `coffeescript` as dependencies
3. Initialize a git repo if there isn't one (disable with `--git false`)
4. Build the plugin & link it to Sketch's plugin folder, ready to go

After creating, consider adding `author`, `license`, `description`, and `repository` fields to your `package.json`.

## Developing a plugin

Once you're done, rather than call `coffee` or `skpm` directly, check out the included scripts:

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

## Structure

A few slight structure changes from skpm's standard template:
- The `source` folder holds the original source
- The `js` folder holds the JS output and the `manifest.json`

All folder structure in `source` is kept, though deleted `.coffee` files may need to be manually deleted from `js`.

✌️
