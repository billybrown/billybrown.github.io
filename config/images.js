'use strict';

module.exports.tasks = {

    // this task optimizes your images
    imagemin: {
      png: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.png', '**/*.jpg', '**/*.gif'],
          dest: 'src/img'
        }]
      },
      svg: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.svg'],
          ext: '.svg',
          dest: 'src/img'
        }]
      }
    },

    svginjector: {
      example: {
        options: {
          container: 'bill1'
        },
        files: {
          'build/img/bill_1.js': ['img/bill/bill_1.svg', 'img/bill/bill_2.svg', 'img/bill/bill_3.svg', 'img/bill/bill_4.svg', 'img/bill/bill_5.svg', 'img/bill/bill_6.svg']
        }
      }
    }
};
