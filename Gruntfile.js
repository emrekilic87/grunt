'use strict';

module.exports = function(grunt){
    grunt.initConfig({
        clean: ['css/dest/compiled.css','css/min/compiled.min.css', 'js/dest/compiled.js','js/min/compiled.min.js'],
        concat:{
          basic_and_extras: {
              files: {
                 'css/dest/compiled.css':[
                     'css/src/owl.carousel.min.css',
                     'css/src/animate.min.css',
                     'css/src/Normalize.css',
                     'css/src/bootstrap.min.css'
                 ],
                  'js/dest/compiled.js':[
                      'js/src/owl.carousel.min.js',
                      'js/src/wow.js',
                      'js/src/jquery.lazyload-any.min.js',
                      'js/src/lazy.min.js'
                  ]
            }
          }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/src',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/dest'
                }]
            }
        },

        cssmin: {
            target: {
                files: {
                    'css//min/compiled.min.css': ['css/dest/compiled.css']
                }
            }
        },

        uglify: {
            my_target: {
              files: {
                'js/min/compiled.min.js': ['js/dest/compiled.js']
              }
            }
          },

          sprite: {
            all: {
              // Sprite files to read in
              src: ['img/src/*.png'],
         
              // Location to output spritesheet
              dest: 'img/sprite/sprite.png',
         
              // Stylus with variables under sprite names
              destCss: 'img/sprite/sprite.css',
         
              engineOpts: { 'imagemagick': true }
         
              }
            }



    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.registerTask('default', ['clean', 'concat', 'cssmin', 'imagemin',  'uglify', 'sprite']);

};

