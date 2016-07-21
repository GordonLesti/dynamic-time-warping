module.exports = function( grunt ) {
    "use strict";
    var key;

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
