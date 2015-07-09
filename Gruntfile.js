
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        connect: {
            app: {
                options: {
                    port: 11111,
                    base: ["bower_components","app","db"]
                }
            }
        },
        watch: {
            all: {
                files: ['app'],
                options: {
                    livereload: true,
                    spawn: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['connect:app', 'watch']);
};