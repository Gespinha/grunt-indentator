/*
 * grunt-indentator
 * 
 * Copyright (c) 2016 Goncalo Espinha
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({  
    indentator: {
      options: {
        type: 'space'
        size: 2,
        debug: true
      },
      files: ['style/**/*']
    },
    jshint: {
      tasks: ['tasks/*.js']
    },
    sass: {
      test: {
        options: {
          check: true
        },
        src: ['style.sass']
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['jshint:tasks','indentator', 'sass:test']);
};