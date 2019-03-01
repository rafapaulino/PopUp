/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        uglify: {
            target: {
                files: {
                    'js/popup.min.js': [
                        'js/popup.js'
                    ]
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task.
    grunt.registerTask('default', ['uglify']);

};