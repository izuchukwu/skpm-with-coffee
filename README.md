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
# compile, build, & watch for changes
yarn watch

# watch the logs
yarn log

# build only
yarn build
```

or `npm run` instead of `yarn`.

✌️
