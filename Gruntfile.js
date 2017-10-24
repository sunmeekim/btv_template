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
        CSS_STATIC_NAME : 'btv_common',
        // STATIC_DIR
        PUBLIC_DIR: './markup/dist/assets',
        BASE_DIR  : "",
        HTML_DIR  : "./markup/html",
        BUILD_DIR : "./markup/dist/html",
        IMG_DIR : "./markup/dist/assets/images/spr_img",
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
        sprite: {
			spr_img: {
				src: ['./markup/img/spr_img/*.png'],
				dest: '<%= IMG_DIR %>/spr_img.png',
				imgPath: '../images/spr_img/spr_img.png',
				destCss: './markup/sass/sprites/_spr_img.scss',
				padding: 4,
				cssSpritesheetName: 'spr_img'
			},

			spr_img_2x: {
				src: ['./markup/img/spr_img/2x/*.png'],
				dest: '<%= IMG_DIR %>/spr_img_2x.png',
				imgPath: '../images/spr_img/spr_img_2x.png',
				destCss: './markup/sass/sprites/_spr_img_2x.scss',
				padding: 4,
				cssSpritesheetName: 'spr_img_2x'
			},
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
                        '!**/spr_*.png',
                        '!**/spr_*/**',
                        '!**/spr_*/**/*.png'
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
                    dest: 'markup/dist'
                }]
            },
            image: {
                verbose: true,
                files: [{
                    cwd: 'markup/img',
                        src: [
                            '**/*.png',
                            '!**/spr_*.png',
                            '!**/spr_*/**/*.png'
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
            },
            sprite: {
				files: ['./markup/img/spr_*/**/*.png'],
				tasks: ['sprite', 'build_sass', 'copy:static_resource', 'sync']
			},

			image: {
				files: [
					'markup/img/**/*.png',
					'!markup/img/spr_*.png',
					'!markup/img/spr_*/**/*.png'
				],
				tasks: ['sync']
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

    grunt.registerTask('sass_init', ['sprite_common_func', 'sprite', 'build_sass', 'copy:static_resource']);

    grunt.registerTask('sass_init2', ['serverUrl', 'sprite_common_func', 'sprite', 'build_sass', 'copy:static_resource']);
    grunt.registerTask('html', ['includereplace', 'markupfileindex']);
    grunt.registerTask('sprite_common_func', function () {
        _.each(grunt.config.data.sprite, function(conf){
            if(!!conf.cssTemplate === false){
                conf.cssTemplate = function (params) {
                    var template = grunt.file.read('./markup/sass/sprites/sprites.mustache');
                    return Mustache.render(template, params);
                }
            }

            if(!!conf.cssOpts === false){
                conf.cssOpts = {
                    removepx: function () {
                        return function (text, render) {
                            var value = render(text);
                            return '0px' === value ? '0' : value;
                        };
                    },
                    retina: function () {
                        return function (text, render) {
                            var pixelRatio = 2;
                            return parseInt(render(text), 10) / pixelRatio + 'px';
                        };
                    }
                }
            }
        });
    });
    // sass map 생성 여부
    grunt.registerTask('sassNoMap', function () {
        grunt.option('no-map', true);
    });
    grunt.registerTask('serverUrl', function () {
        // var templateTaskName = ['spr_template', 'spr_template_2x'],
        var url = '';

        // if(e === 'deploy'){
            url = '../images';
            // grunt.config.data.IMG_DIR = '이미지 절대경로';
        //     url = '이미지 상대경로';
        // }

        _.each(grunt.config.data.sprite, function(conf, key){
            // if(templateTaskName.indexOf(key) !== -1) {
            conf.imgPath = url + '/' + key + '.png';
            //}
        });
    });
};
