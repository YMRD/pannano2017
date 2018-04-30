module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean:{
            docs: ['docs'],
        },
        jshint: {
            all: ['Gruntfile.js', 'src/js/*.js', 'test/**/*.js']
        },
        jasmine: {
            options: {
                specs: 'test/spec/**/*Spec.js',
                host:"http://localhost:9002/",
                //helpers: 'test/helper/**/*Helper.js',
                vendor: [
                    'https://code.jquery.com/jquery-3.2.1.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
                    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js'
                ]
            },
            test: {
              src: 'src/js/*.js',
            },
        },
        uglify: {
            scripts: {
              files: {
                'docs/js/main.min.js': ['src/js/*.js']
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
                'docs/css/site.css': ['src/**/*.css']
              }
            }
        },
        connect:{
            options :{
                port: 9002,
                base:["."]
            },
            test:{ },
            bdd:{ options:{ keepalive:true } }
        },
        copy:{
            main:{expand: true, cwd:'src/', src: ['index.html'], dest: 'docs/', filte: 'isFile'},
            images:{expand: true, cwd:'src/', src: ['css/img/**.*'], dest: 'docs/', },
        },
        concat: {
            options: {
              separator: ';',
            },
            docs: {
              src: ['src/js/*.js'],
              dest: 'docs/js/main.min.js',
            },
        },
        watch: {
            scripts: { files: 'src/js/*.js', tasks: ['jshint', 'concat'], },
            specs: { files: 'test/**/*.js', tasks: ['jasmine:test:build'], },
            css: { files: 'src/css/*.css', tasks: ['cssmin'], },
            html: { files: 'src/index.html', tasks: ['copy:main'], },
            images: { files: 'src/img/**/*.*', tasks: ['copy:images'], }
        }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s).
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('bdd', ['jasmine:test:build','connect:bdd']);
    grunt.registerTask('dev', ['clean', 'jshint', 'concat', 'cssmin', 'copy']);
    grunt.registerTask('build', ['clean', 'jshint', /*'connect:test', 'jasmine',*/ 'uglify', 'cssmin', 'copy']);
};