# html-beautifier-webpack-plugin

Beautify output of
[HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)

## Installation

Install the plugin with npm:

```shell
$ npm i -D html-beautifier-webpack-plugin
```

## Usage

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifierPlugin = require('html-beautifier-webpack-plugin');

plugins: [
    new HtmlWebpackPlugin()
    new HtmlBeautifierPlugin()
]
```

## Configuration

You can pass a configuration options which is
[js-beautify](https://github.com/beautify-web/js-beautify)'s options. Default
options for this package:

```javascript
{
  html: {
    indent_size: 2,
    end_with_newline: true,
    indent_inner_html: true,
    preserve_newlines: true,
    max_preserve_newlines: 0,
    wrap_line_length: 120,
    extra_liners: [],
    js: {
      end_with_newline: false,
      preserve_newlines: true,
      max_preserve_newlines: 2,
      space_after_anon_function: true
    },
    css: {
      end_with_newline: false,
      preserve_newlines: false,
      newline_between_rules: false
    }
  }
}
```
