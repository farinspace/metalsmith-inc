# metalsmith-inc

A metalsmith plugin to include partials.

## Installation

```bash
$ npm install metalsmith-inc
```

## CLI Usage

Use the following in your `metalsmith.json` file (e.g. the defaults are displayed). Be sure to read more about [defining a RegExp pattern as a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) and the normal string escaping rules that apply.

```json
{
  "plugins": {
    "metalsmith-inc": {
      "directory": '.',
      "pattern": '^include (.*)'
    }
  }
}
```

## Javascript Usage

```javascript
var inc = require('metalsmith-inc');
metalsmith.use(inc({
  directory: 'docs/partial',
  pattern: '^require (.*)'
}));
```

## Example

```markdown
---
title: Sample
---

# Exploring Partials

include partial-abc.md

include partial-xyz.md

# More Markdown

A markdown paragraph
```

## License

MIT
