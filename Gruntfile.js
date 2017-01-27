module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'compressed',
                    loadPath: [
                        'node_modules/bourbon/app/assets/stylesheets',
                        'node_modules/bourbon-neat/app/assets/stylesheets',

                    ]
                },
                files: { // Dictionary of files
                    'assets/styles/main.min.css': 'assets/styles/main.scss', // 'destination': 'source'
                }
            }
        },
        uglify: {
            options: {
                preserveComments: false
            },
            my_target: {
                files: {
                    'assets/libs/libs.min.js': ['assets/libs/libs.js']
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                files: {
                    'assets/libs/libs.js': ['node_modules/angular/angular.js', 'node_modules/angular-ui-router/release/angular-ui-router.js', 'node_modules/jquery/dist/jquery.js']
                }
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3
                },
                files: [
                    {
                        expand: true,
                        cwd: 'assets/img/',
                        src: ['**/*.{png,jpg,gif,svg}'],
                        dest: 'assets/img/'
                    }
                ]
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'app/*.js', 'assets/js/*.js']
        },

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'test/results.txt',
                    quiet: false,
                    clearRequireCache: false,
                    noFail: false
                },
                src: ['test/**/*.js']
            }
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'assets/js/main.js': 'assets/js/main.js'
                }
            }
        },

        watch: {
            css: {
                files: ['assets/styles/**/*.scss'],
                tasks: ['sass']
            },

            javascript: {
                files: [
                    'assets/**/*.js', 'app/**/*.js'
                ],
                tasks: ['jshint']
            },

            img: {
                files: ['images/**/*'],
                tasks: ['imagemin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', [
        'sass',
        'watch',
        'imagemin',
        'concat',
        'uglify',
        'jshint',
        'mochaTest',
        'babel'
    ]);
};
