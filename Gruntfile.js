module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean:{
            docs: ['docs'],
        },
        jshint: {
            all: ['Gruntfile.js', 'src/js/*.js']
        },
        uglify: {
            options:{
                sourceMap: true
            },
            scripts: {
              files: {
                'docs/js/main.min.js': ['src/js/*.js']
              }
            }
        },
        connect:{
            server: {
                options: {
                    port: 8000,
                    base: 'docs',
                    open: true
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
        fixturesPath: "src/fixtures",
        htmlbuild:{
            docs:{
                src: "src/index.html",
                dest: "docs/",
                options:{
                    beautify: true,
                    relative: true,
                    basePath: false,
                    sections: {
                        views: '<%= fixturesPath %>/views/**/*.html',
                        templates: '<%= fixturesPath %>/templates/**/*.html',
                        layout: {
                            header: '<%= fixturesPath %>/layout/header.html',
                            footer: '<%= fixturesPath %>/layout/footer.html'
                        }
                    },
                }
            }
        },
        copy:{
            libs:{expand: true, cwd:'src/', src: ['libs/**/*.*'], dest: 'docs/', },
            images:{expand: true, cwd:'src/', src: ['images/**/*.*'], dest: 'docs/', },
            cssimages:{expand: true, cwd:'src/', src: ['css/img/**.*'], dest: 'docs/', },
        },
        watch: {
            scripts: { files: 'src/js/*.js', tasks: ['jshint', 'uglify'], },
            specs: { files: 'test/**/*.js', tasks: ['jasmine:test:build'], },
            css: { files: 'src/css/*.css', tasks: ['cssmin'], },
            html: { files: 'src/**/*.html', tasks: ['htmlbuild'], },
            images: { files: 'src/images/**/*.*', tasks: ['copy:images'], },
            cssimages: { files: 'src/css/img/*.*', tasks: ['copy:cssimages'], }
        }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s).
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask("dev", ['clean', 'jshint', 'uglify', 'cssmin', 'copy', "htmlbuild", "connect", "watch"]);
    grunt.registerTask('build', ['clean', 'jshint', 'uglify', 'cssmin', 'copy', "htmlbuild"]);
};