module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: 'assets/css/**/*.css',
				dest: 'build/css/production.css'
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'build/css',
					src: '*.css',
					dest: 'build/css',
					ext: '.min.css'
				}]
			}
		},

		responsive_images: {
			dev: {
				options:{
					engine: 'im',
					sizes: [{ name: '400w', width: 400, quality: 30},
					{ name: '800w', width: 800, quality: 30},
					{ name: '1200w', width: 1200, quality: 30}]
				},


				files: [{
					expand:true,
					src: ['*.{jpg,gif,png}'],
					cwd: 'assets/imgsrc',
					dest: 'build/images/'
				}]
			}
		},

		watch: {
			css_watcher: {
				files: ['assets/css/**/*.css'],
				tasks: ['concat', 'cssmin'],
				options: {
					spawn: false,
				}
			},
		}

	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	grunt.registerTask('default',['concat','cssmin','responsive_images']);

};