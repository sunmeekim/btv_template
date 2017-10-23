'use strict';

var Mustache = require("mustache");
var _ = require('lodash');

module.exports = function (grunt) {
    // load grunt plugins
    require('jit-grunt')(grunt, {
        sprite: 'grunt-spritesmith',
        includereplace: 'grunt-include-replace'
    });

    // Display the elapsed execution time of grunt tasks
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        // CSS name
        CSS_NAME : 'btv_weather',
        CSS_NAME2 : 'btv_wikipedia',
        CSS_NAME3 : 'btv_fortune',
        CSS_NAME4 : 'btv_traffic',
        CSS_NAME5 : 'btv_help',
        CSS_NAME6 : 'btv_order',
        CSS_NAME7 : 'btv_shopping',
        CSS_NAME8 : 'btv_sports',
        CSS_NAME9 : 'btv_dictionary',
        CSS_STATIC_NAME : 'btv',
        // STATIC_DIR
        PUBLIC_DIR: './markup/dist/assets',
        BASE_DIR  : "",
        HTML_DIR  : "./markup/html",
        BUILD_DIR : "./markup/dist/html",
        // Metadata.
        pkg: grunt.file.readJSON("package.json"),
        banner: '/*!  <%= pkg.title || pkg.name %> - v<%= pkg.version %> ' + grunt.util.linefeed + '<%= pkg.author.name %>' + grunt.util.linefeed + ' */' + grunt.util.linefeed,

        // Task configuration.
        clean: {
            options: {
                force: true
            },
            public: [
                '<%= PUBLIC_DIR %>/images',
                '<%= PUBLIC_DIR %>/css/**/*'
            ],
            html_build: [
                '<%= BUILD_DIR %>'
            ]
        },

        includereplace: {
            html: {
                options: {
                    includesDir: '<%= HTML_DIR %>/include/',
                    docroot: '../'
                },
                expand: true,
                cwd: '<%= HTML_DIR %>/',
                src: ['**/*.html'],
                dest: '<%= BUILD_DIR %>/'
            }
        },

        markupfileindex: {
            options: {
                show_date : true,
                filename: 'index.html',
                title:'Btv 템플릿 산출물',
                include_folder : ['includes', 'inc', 'testInc'],
                file_sort : 'asc',
                file_sort_key : 'title',
                group_sort : 'asc'
            },
            index: {
                files: [{
                    expand : true,
                    cwd : '<%= BUILD_DIR %>',
                    src: ['**/*.html', '!**/node_modules/**', '!**/.*/**'],
                    dest: '<%= BUILD_DIR %>'
                }]
            }
        },

        sass: {
            options: {
                outputStyle: 'compressed',
                sourceMap: !grunt.option('no-map')
            },

            pc: {
                files: {
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME %>.css': './markup/sass/<%= CSS_NAME %>.scss',
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME2 %>.css': './markup/sass/<%= CSS_NAME2 %>.scss',
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME3 %>.css': './markup/sass/<%= CSS_NAME3 %>.scss',
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME4 %>.css': './markup/sass/<%= CSS_NAME4 %>.scss',
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME5 %>.css': './markup/sass/<%= CSS_NAME5 %>.scss',
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME6 %>.css': './markup/sass/<%= CSS_NAME6 %>.scss',
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME7 %>.css': './markup/sass/<%= CSS_NAME7 %>.scss',
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME8 %>.css': './markup/sass/<%= CSS_NAME8 %>.scss',
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME9 %>.css': './markup/sass/<%= CSS_NAME9 %>.scss',
                    '<%= PUBLIC_DIR %>/css/<%= CSS_STATIC_NAME %>.css': './markup/sass/<%= CSS_STATIC_NAME %>.scss'
                }
            }
        },

        postcss: {
            options: {
                map: !grunt.option('no-map'),
                processors: [
                    require('autoprefixer')(),
                    require("css-mqpacker")()
                ],
                browsers: ['last 2 versions','Android']
            },

            pc: {
                src:
                [
                    '<%= PUBLIC_DIR %>/css/**/*.css'
                ]
            }
        },

        cssmin: {
            options: {
                advanced: true,
                aggressiveMerging: false,
                compatibility: 'ie9',
                keepSpecialComments: 0,
                mediaMerging: false,
                restructuring: false,
                shorthandCompacting: false,
                sourceMap: !grunt.option('no-map')
            },

            pc: {
                files: {
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME %>.css': [
                        './markup/sass/common/_dummy_charset.scss',
                        '<%= PUBLIC_DIR %>/css/<%= CSS_NAME %>.css'
                    ],
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME2 %>.css': [
                        './markup/sass/common/_dummy_charset.scss',
                        '<%= PUBLIC_DIR %>/css/<%= CSS_NAME2 %>.css'
                    ],
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME3 %>.css': [
                        './markup/sass/common/_dummy_charset.scss',
                        '<%= PUBLIC_DIR %>/css/<%= CSS_NAME3 %>.css'
                    ],
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME4 %>.css': [
                        './markup/sass/common/_dummy_charset.scss',
                        '<%= PUBLIC_DIR %>/css/<%= CSS_NAME4 %>.css'
                    ],
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME5 %>.css': [
                        './markup/sass/common/_dummy_charset.scss',
                        '<%= PUBLIC_DIR %>/css/<%= CSS_NAME5 %>.css'
                    ],
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME6 %>.css': [
                        './markup/sass/common/_dummy_charset.scss',
                        '<%= PUBLIC_DIR %>/css/<%= CSS_NAME6 %>.css'
                    ],
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME7 %>.css': [
                        './markup/sass/common/_dummy_charset.scss',
                        '<%= PUBLIC_DIR %>/css/<%= CSS_NAME7 %>.css'
                    ],
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME8 %>.css': [
                        './markup/sass/common/_dummy_charset.scss',
                        '<%= PUBLIC_DIR %>/css/<%= CSS_NAME8 %>.css'
                    ],
                    '<%= PUBLIC_DIR %>/css/<%= CSS_NAME9 %>.css': [
                        './markup/sass/common/_dummy_charset.scss',
                        '<%= PUBLIC_DIR %>/css/<%= CSS_NAME9 %>.css'
                    ]
                }
            }
        },

        copy: {
            static_resource: {
                files: [{
                    expand: true,
                    cwd: './markup/img',
                    src: [
                        '**/*',
                    ],
                    dest: 'markup/dist/assets/images'
                }]
            }
        },

        sync: {
            dist: {
                verbose: true,
                files: [{
                    cwd: 'markup/dist',
                    src: ['**'],
                    dest: 'dist'
                }]
            },
            image: {
                verbose: true,
                files: [{
                    cwd: 'markup/img',
                        src: [
                            '**/*.png'
                        ],
                        dest: 'markup/dist/assets/images'
                    }]
            }
        },

        watch: {
            options: {
                interrupt: true
                // reload: true
            },

            gruntfileReload: {
                options: {
                    reload: true
                },
                files: ['Gruntfile.js']
            },

            livereload: {
                options: {
                    livereload: true,
                    interrupt: true
                },
                files: ['<%= PUBLIC_DIR %>/css/**/*.css','<%= BUILD_DIR %>/**/*.html']
            },

            html: {
                files: ['./markup/html/**/*.html'],
                tasks: ['includereplace', 'sync']
            },

            common_sass: {
                files: ['./markup/sass/**/*.scss'],
                tasks: ['build_sass', 'copy:static_resource', 'sync']
            }
        },

        concurrent: {
            options: {
                logConcurrentOutput: false
            },
            build: ['sass_init','html'],
            deploy: ['sass_init','html']
        }
    });

    // default
    grunt.registerTask('default', ['clean', 'concurrent:build', 'watch']);
    grunt.registerTask('deploy', ['clean', 'sassNoMap', 'concurrent:deploy']);
    grunt.registerTask('build_sass', ['sass', 'postcss', 'cssmin']);
    grunt.registerTask('sass_init', ['build_sass', 'copy:static_resource']);
    grunt.registerTask('html', ['includereplace', 'markupfileindex']);
    // sass map 생성 여부
    grunt.registerTask('sassNoMap', function () {
        grunt.option('no-map', true);
    });
};
