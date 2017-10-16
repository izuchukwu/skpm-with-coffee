# skpm-with-coffee
An skpm template for developing for Sketch with CoffeeScript

## Creating a plugin

	skpm create my-plugin --template izuchukwu/skpm-with-coffee

This will:
1. Create your Sketch plugin with the `skpm-with-coffee` template
2. Install `skpm`, `npm-run-all` (for parallel script execution), and `coffeescript` as dependencies
3. Initialize a git repo if there isn't one (disable with `--git false`)
4. Build the plugin & link it to Sketch's plugin folder, ready to go

## Developing a plugin

Once you're done, you can transpile your CoffeeScript with:

	npm run coffee

and build your plugin with:

	npm run build

If you'd like to transpile & build on every save, use:

	npm run watch

and if you'd like to view a running log of your plugin, use:

	npm run log

✌️
