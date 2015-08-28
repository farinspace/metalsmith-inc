# metalsmith-inc

A metalsmith plugin to include partials.

## Installation

```bash
$ npm install metalsmith-inc
```

## CLI Usage

Use the following in your `metalsmith.json` file (e.g. the defaults are displayed)

```json
{
  "plugins": {
    "metalsmith-inc": {
      "directory": ".",
      "pattern": /^include (.*)/gim,
    }
  }
}
```

## Javascript Usage

```javascript
var inc = require('metalsmith-inc');
metalsmith.use(inc({
  directory: "docs/partial"
}));
```

## License

MIT
