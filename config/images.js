'use strict';

module.exports.tasks = {

    // this task optimizes your images
    imagemin: {
      all: {
        files: [{
          expand: true,
          cwd: 'img',
          src: ['**/*.png', '**/*.jpg', '**/*.gif'],
          dest: 'img'
        }]
      },
      svg: {
        files: [{
          expand: true,
          cwd: 'img',
          src: ['**/*.svg'],
          ext: '.svg',
          dest: 'img'
        }]
      }
    },

    copy: {
        images: {
            files: [
                { expand: true, cwd: 'img', src: ['**'], dest: 'build/img/'}
            ]
        },
        favicons: {
            files: [
                { expand: true, cwd: 'favicons', src: ['**'], dest: 'build/'}
            ]
        }
    },
    
    svginjector: {
      example: {
        options: {
          container: 'bill1'
        },
        files: {
          'build/img/bill_1.js': ['img/bill/bill_1.svg', 'img/bill/bill_2.svg', 'img/bill/bill_3.svg', 'img/bill/bill_4.svg', 'img/bill/bill_5.svg', 'img/bill/bill_6.svg', 'img/bill/bill_7.svg', 'img/bill/bill_8.svg', 'img/bill/bill_9.svg']
        }
      }
    }
};
