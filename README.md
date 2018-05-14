# grunt-indentator

> A Grunt task to convert the indentation on files.

## Getting Started
This plugin requires Grunt `0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-indentator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-indentator');
```

## The "indentator" task

### Overview
In your project's Gruntfile, add a section named `indentator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  indentator: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.type
Type: `String`
Default value: `'space'`

Sets the type of indentation to which your files will be converted. Can be `'space'` or `'tab'`. 

#### options.size
Type: `Number`
Default value: `4`

Sets the size of each indentation. If `options.type` is set to `'space'`, this number equals the number of spaces in each indentation. If its set to `'tab'`, this number equals the number of tabbed intendations.

#### options.debug
Type: `Boolean`
Default value: `false`

If set to `true`, displays aditional information on the files that are being converted, such as their previous and new indentation size and type.

### Usage Examples

#### Default Options
This is a basic example of how this task is configured in your `Gruntfile.js`. This configuration relies on no specific options and is using the default conversion settings.

```js
grunt.initConfig({
  indentator: {
    options: {},
    files: ['*.js', 'styles/*.sass']
  },
});
```

#### Custom Options
This is a customized configuration of this task. In this setting, the target files will be converted to `'space'` indentations with a size of `2` spaces per indentation. Upon converting the files, a set of debug information will be displayed.

```js
grunt.initConfig({
  indentator: {
    options: {
      type: 'space',
      size: 2,
      debug: true
    },
    files: ['*.js', 'styles/*.sass']
  },
});
```

## Changelog

- 0.1.5 - Fixed a bug where errors were not being displayed correctly when no files were found.
- 0.1.4 - Fixed minor bug on the way files are processed.
- 0.1.3 - Refactored the plugin to handle complex files better.
- 0.1.2 - Fixed minor bugs on file processing.
- 0.1.1 - Fixed some major bugs on the file review process.
- 0.1.0 - Initial release.

## License

The MIT License (MIT)
Copyright (c) 2018 Goncalo Espinha

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.