module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean:{
            dist: ['dist'],
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        },
        uglify: {
            scripts: {
              files: {
                'dist/js/main.min.js': ['src/**/*.js']
              }
            }
        },
        cssmin: {
            options: {
              mergeIntoShorthands: false,
              roundingPrecision: -1
            },
            target: {
              files: {
                'dist/css/site.css': ['css/*.css']
              }
            }
        },
        copy:{
            main:{expand: true, src: ['index.html'], dest: 'dist/', filter: 'isFile'},
        }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
  
    // Default task(s).
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', ['clean', 'jshint', 'uglify', 'cssmin', 'copy']);
};