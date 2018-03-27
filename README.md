# skpm-with-coffee
An skpm template for developing for Sketch with CoffeeScript

## Creating a plugin

	skpm create my-plugin --template izuchukwu/skpm-with-coffee

This will:

1. Create your Sketch plugin with the `skpm-with-coffee` template
2. Install `skpm`, `npm-run-all` (for parallel script execution), `nodemon` (for watching for updates), and `coffeescript` as dependencies
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

# transpile, compile but don't build
yarn build-coffee

# build only
yarn build
```

or `npm run` instead of `yarn`.

## Structure

A few slight structure changes from skpm's standard template:
- The `source` folder holds the original source
- The `js` folder holds the JS output that uses

Might suggest adding the `js` folder to your `.gitignore`.

✌️
