'use strict';

module.exports.tasks = {

  // this task compiles your sass to css using Libsass, a C++ version of sass
  sass: {
    dest: {
      options: {
        sourceMap: true
      },
      files: {
        'css/main.css': 'sass/main.scss'
      }
    }
  },

  // this task applies vendor prefixes (ie: -webkit, -moz, -o) to your css
  autoprefixer: {
    options: {
      browsers: [
        '> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', // default support (recommended by autoprefixer)
        'ie >= 9',
        'Firefox >= 23', 
        'Chrome >= 22',
        'Safari >= 4',
        'iOS >= 5.1',
        'Android >= 4.1'
      ],
      map: true
    },
    custom: {
      src: 'css/*.css'
    }
  },

  // this concatenates the css
  // concat: {
  //   dist: {
  //     src: ['css/main.css'], //add more css to concat here. for example 'src/fonts/icomoon/style.css', 
  //     dest: 'css/main.min.css'
  //   }
  // },

  // this minifies your css
  
  cssmin: {
    options: {
      sourceMap: true
    },
    target: {
      files: {
        'css/main.css': ['css/main.css']
      }
    }
  }


  // this strips out unused css based on an html input
  // commented out for now since its a little buggy and not ready for prime time
  // uncss: {
  //   dist: {
  //     files: {
  //       'build/css/main.css': ['build/index.html']
  //     }
  //   }
  // },

  // this generates css based on an html input and injects it in the top of an html file
  // critical: {
  //   test: {
  //     options: {
  //       base: './',
  //       css: [
  //         'build/css/main.css'
  //       ],
  //       width: 1200,
  //       height: 600
  //     },
  //     src: 'build/index.html',
  //     dest: 'build/index.html'
  //   }
  // }

};
