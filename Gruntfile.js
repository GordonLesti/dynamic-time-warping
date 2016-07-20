module.exports = function( grunt ) {
    "use strict";
    var key, browsers = [

        // Windows 7
        { browserName: "chrome", version: "46", platform: "Windows 7" },
        { browserName: "firefox", version: "41", platform: "Windows 7" },
        { browserName: "internet explorer", version: "9", platform: "Windows 7" },
        { browserName: "internet explorer", version: "10", platform: "Windows 7" },
        { browserName: "internet explorer", version: "11", platform: "Windows 7" },

        // Windows 8.1
        { browserName: "chrome", version: "46", platform: "Windows 8.1" },
        { browserName: "firefox", version: "41", platform: "Windows 8.1" },
        { browserName: "internet explorer", version: "11", platform: "Windows 8.1" },

        // Windows 10
        { browserName: "chrome", version: "46", platform: "Windows 10" },
        { browserName: "firefox", version: "41", platform: "Windows 10" },
        { browserName: "internet explorer", version: "11", platform: "Windows 10" },

        // Apple Mac
        { browserName: "chrome", version: "46", platform: "OS X 10.11" },
        { browserName: "firefox", version: "41", platform: "OS X 10.11" },
        { browserName: "safari", version: "9", platform: "OS X 10.11" },

        // Linux
        { browserName: "chrome", version: "46", platform: "Linux" },
        { browserName: "firefox", version: "41", platform: "Linux" },

        // Apple iOS
        { browserName: "iphone", version: "8.4" },
        { browserName: "ipad", version: "8.4" },

        // Google Android
        { browserName: "android", version: "4.4" },
        { browserName: "android", version: "5.1" }
    ];

    grunt.initConfig( {
        pkg: grunt.file.readJSON( "package.json" ),
        qunit: {
            options: {
                timout: 30000,
                "--web-security": "no",
                coverage: {
                    src: [ "src/dynamic-time-warping.js" ],
                    instrumentedFiles: "temp/",
                    htmlReport: "build/report/coverage",
                    lcovReport: "build/report/lcov",
                    linesThresholdPct: 0
                }
            },
            all: "test/index.html"
        },
        coveralls: {
            options: {
                force: true
            },

            // jscs:disable requireCamelCaseOrUpperCaseIdentifiers

            main_target: {
                src: "build/report/lcov/lcov.info"
            }

            // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
        },
        jshint: {
            options: {
                jshintrc: true
            },
            grunt: "Gruntfile.js",
            src: "src/**/*.js",
            tests: "test/**/*.js"
        },
        jscs: {
            src: "src/*.js",
            gruntfile: "Gruntfile.js",
            tests: "test/*.js",
            options: {
                config: ".jscsrc"
            }
        },
        jsonlint: {
            pkg: {
                src: [
                    "package.json"
                ]
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> */\n"
            },
            build: {
                src: "src/dynamic-time-warping.js",
                dest: "dist/dynamic-time-warping.min.js"
            }
        },
        connect: {
            server: {
                options: {
                    base: "",
                    port: 9999
                }
            }
        },
        "saucelabs-qunit": {
            all: {
                options: {
                    urls: [ "http://127.0.0.1:9999/test/index.html" ],
                    tunnelTimeout: 5,
                    build: process.env.TRAVIS_JOB_ID,
                    concurrency: 3,
                    browsers: browsers,
                    testname: "qunit tests",
                    tags: [ "master" ]
                }
            }
        },
        watch: {}
    } );

    for ( key in grunt.file.readJSON( "package.json" ).devDependencies ) {
        if ( key !== "grunt" && key.indexOf( "grunt" ) === 0 ) {
            grunt.loadNpmTasks( key );
        }
    }

    grunt.registerTask( "default", [ "jshint", "jscs", "jsonlint", "qunit", "uglify" ] );
    grunt.registerTask( "dev", [ "connect", "watch" ] );
    grunt.registerTask( "saucelabs", [ "connect", "saucelabs-qunit" ] );
    grunt.registerTask( "ci", [ "jshint", "jscs", "jsonlint", "qunit" ] );
};
