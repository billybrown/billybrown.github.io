'use strict';

module.exports.tasks = {

	jshint: {
		options: {
			enforceall: true,
			nocomma: false
		},
		grunt: {
		    options: {
		      node: true,
		      camelcase: false
		    },
	  		files: {
	  			src: ['Gruntfile.js', 'config/*.js']
	  		}
	  	},
	  	custom: ['js/*.js']
	},

	jade: {
	  compile: {
	    options: {
	      data: {
	        debug: false
	      }
	    },
	    files: {
	      "index2.html": ["templates/*.jade"]
	    }
	  }
	}
    
};
