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
        type: 'space',
        size: 2,
        debug: true
      },
      files: ['style/**/*']
    },
    jshint: {
      tasks: ['tasks/*.js']
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint:tasks','indentator']);
};