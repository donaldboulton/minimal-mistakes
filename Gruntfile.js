module.exports = function(grunt) {
 
    // Init our modular gruntfile and return the tasks it uses 
    var tasks = require('modulargrunt')(grunt);
   
    grunt.initConfig({
      // Add new task config 
      watch: {
        livereload: {
          options: { livereload: true },
          files: ['dist/**/*'],
        },
        js: {
          files: ['js/*.js', 'Gruntfile.js'],
          tasks: ['browserify'],
        },
        css: {
          files: ['scss/*.scss'],
          tasks: ['compass'],
        },
      },
      // Override inherited task config 
      browserify: {
        dev: {
          src: ['js/*.js'],
          dest: 'i/now/go/somewhere/else.js',
        },
      },
    });
   
    grunt.loadNpmTasks('grunt-contrib-watch');
   
    // Run the tasks from modulargrunt and append the watch task at the end 
    grunt.registerTask('default', tasks.concat('watch'));
  };