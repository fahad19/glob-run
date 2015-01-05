#  [![Build Status](https://secure.travis-ci.org/fahad19/glob-run.png?branch=master)](http://travis-ci.org/fahad19/glob-run)

> Run multiple commands by glob patterns sequentially.

## Install

```sh
$ npm install -g glob-run
```

### Usage

Basic example:

    $ glob-run cat src/\*.js

This is equivalent to running:

    $ cat src/a.js && cat src/b.js && cat src/c.js

With [Browserify](https://www.npmjs.com/package/browserify):

    # src/a.js will be bundled into dist/a.js
    $ glob-run browserify src/\*.js -o dist/\*.js

    # src/a.coffee will be bundled into a.js
    $ glob-run browserify -t coffeeify src/\*.coffee -o dist/\*.js

    $ glob-run browserify src/\*.js -o dist/bundle-\*.js

With [concat-from-list](https://www.npmjs.com/package/concat-from-list):

    # files listed in src/a.json will be concatenated in dist/a.js
    $ glob-run concat-from-list src/\*.json dist/\*.js

From package.json:

```json
{
  "dependencies": {
    "glob-run": "^0.1.3",
    "browserify": "^8.0.3"
  },
  "scripts": {
    "build": "./node_modules/.bin/glob-run ./node-modules/.bin/browserify src/\\*.js dist/\\*js"
  }
}
```

And then you can just do `npm run build`.

Since it is all in CLI, asterisks (*) are expected to be always escaped.

## License

MIT © [Fahad Ibnay Heylaal](http://fahad19.com)
