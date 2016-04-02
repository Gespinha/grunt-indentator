/*
 * grunt-indentator
 *
 * Copyright (c) 2016 Goncalo Espinha
 * Licensed under the MIT License.
 */

(function () {
  'use strict';

  module.exports = function(grunt) {
    grunt.registerMultiTask('indentator', 'A Grunt task to convert the indentation on files.', function() {

      var detectIndent = require('detect-indent');

      var files = this.files[0].orig.src;
      var options = this.options({
        type: 'space',
        size: 4,
        debug: false
      });

      var error = false;
      if(['space', 'tab'].indexOf(options.type) === -1){
        error = true;
        grunt.fail.warn('[Invalid Type value] must be \'space\' or \'tab\'.');
      }
      if(options.size <= 0){
        error = true;
        grunt.fail.warn('[Invalid Size value] must be larger than 0\'.');
      }
      if(files.length === 0){
        error = true;
        grunt.fail.warn('[Files not found] at least one valid file target must be set.');
      }

      files = grunt.file.expandMapping(files, '', {extDot: 'last'}).filter(function(file){
        return (file.dest.lastIndexOf('.') > -1);
      });

      if(!error){
        files.forEach(function(file){
          file = file.dest;
          var code = grunt.file.read(file);

          var config = {
            curr: {
              type: detectIndent(code).type,
              size: detectIndent(code).amount,
              input: ''
            },
            new: {
              type: options.type,
              size: options.size,
              input: ''
            },
            map: []
          };

          function type(val){
            return val === 'space' ? '' : '\t';
          }

          config.curr.input = grunt.util.repeat(config.curr.size, type(config.curr.
            type));
          config.new.input = grunt.util.repeat(config.new.size, type(config.new.type));

          var match = new RegExp('(?:' + config.curr.input + ')+');

          code.split('\n').forEach(function(line, index){
            config.map.push({curr: line, new: line});

            var lineMatch = line.match(match);

            if(lineMatch !== null && lineMatch[0].length > 0){
              var count = lineMatch[0].length / config.curr.size,
                  update = grunt.util.repeat(count, config.new.input);

              config.map[index].new = line.replace(match, update);
            }
          });

          code = '';
          config.map.forEach(function(line, index){
            code = code + (index > 0 ? '\n' : '') + line.new;
          });

          if(options.debug){
            grunt.log.ok(file);
            grunt.log.ok(config.curr.size + ' (' + config.curr.type + ') -> ' + config.new.size + ' (' + config.new.type + ')');
            grunt.log.writeln('');
          }
          grunt.file.write(file, code);
        });

        grunt.log.ok(files.length + (files.length > 1 ? ' files' : ' file') + ' converted successfully.');
      }
    });
  };
}());