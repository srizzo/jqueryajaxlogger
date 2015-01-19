/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    banner: '/*! jQueryAjaxLogger - v0.0.1 - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      'http://github.com/srizzo/jqueryajaxlogger/' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> Samuel Rizzo;' +
      ' Licensed MIT %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/jqueryajaxlogger.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/jqueryajaxlogger.min.js'
      }
    },
    jshint: {
      vendor: [],
      options: {
        asi: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQueryAjaxLogger: true,
          jQuery: false,
          console: false,
          inspect: false,
          debug: false,
          undebug: false
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['src/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};
