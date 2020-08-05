const HtmlWebpackPlugin = require('html-webpack-plugin')
const beautify = require('js-beautify').html

class HtmlPrettifyPlugin {
  constructor(options = {}) {
    this.options = {
      ...options,
      html: {
        indent_size: 2,
        end_with_newline: true,
        indent_inner_html: true,
        preserve_newlines: true,
        max_preserve_newlines: 0,
        wrap_line_length: 0,
        extra_liners: [],
        ...options.html,
        js: {
          end_with_newline: false,
          preserve_newlines: true,
          max_preserve_newlines: 2,
          space_after_anon_function: true,
          ...(options.html && options.html.js)
        },
        css: {
          end_with_newline: false,
          preserve_newlines: false,
          newline_between_rules: false,
          ...(options.html && options.html.css)
        }
      }
    }
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('HtmlPrettifyPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'HtmlPrettifyPlugin',
        (data, callback) => {
          data.html = beautify(data.html, this.options)
          callback(null, data)
        }
      )
    })
  }
}

module.exports = HtmlPrettifyPlugin
