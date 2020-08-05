# html-prettify-webpack-plugin
Prettify output of [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)

Installation
------------
Install the plugin with npm:
```shell
$ npm i -D html-prettify-webpack-plugin
```

Usage
-----------


```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlPrettifyPlugin = require('html-prettify-webpack-plugin');

plugins: [
    new HtmlWebpackPlugin()
    new HtmlPrettifyPlugin()
]
```

Configuration
-------------
You can pass a configuration options which is [js-beautify](https://github.com/beautify-web/js-beautify)'s options.
Default options for this package (but not for js-beautify):

```javascript
{
  html: {
    indent_size: 2,
    end_with_newline: true,
    indent_inner_html: true,
    preserve_newlines: true,
    max_preserve_newlines: 0,
    wrap_line_length: 0,
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
