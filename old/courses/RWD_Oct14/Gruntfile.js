module.exports = function (grunt) {
    var mozjpeg = require('imagemin-mozjpeg');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'assign04/js/*.js',
                dest: 'assign05/js/script.min.js'
            }
        },
        uncss: {
            dist: {
                options: {
                    ignore: []
                },
                files: {
                    'assign05/tidy.css': ['assign04/*.html']
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'assign05/output.css': ['assign05/css/style.min.css']
                }
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'assign05/contact.html': 'assign04/contact.html',
                    'assign05/index.html': 'assign04/index.html',
                    'assign05/prices.html': 'assign04/prices.html',
                    'assign05/rooms.html': 'assign04/rooms.html'
                }
            }
        },
        imagemin: {                          // Task
            dist: {
                options: {                       // Target options
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }],
                    use: [mozjpeg()]
                },// Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'assign04/img/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'assign05/img/'                  // Destination path prefix
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'uncss', 'cssmin', 'htmlmin:dist','imagemin']);

};