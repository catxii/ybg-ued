module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
    concat: {
	  options: {
		// 定义一个用于插入合并输出文件之间的字符
		separator: '/*js文件间分隔*/'
	  },
	  dist: {
		// 将要被合并的文件
		src: ['../js/app.js','../js/**/*.js'],
		// 合并后的JS文件的存放位置
		dest: '../lib/app/<%= pkg.name %>.js'
	  }
	},
	uglify: {
	  options: {
		// 此处定义的banner注释将插入到输出文件的顶部
		banner: '/*! 领信教育 <%= grunt.template.today("dd-mm-yyyy") %> */\n'
	  },
	  dist: {
		files: {
		  '../lib/app/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
		}
	  }
	}
  });

 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-concat');



// 只需在命令行上输入"grunt"，就会执行default task
grunt.registerTask('default', [ 'concat', 'uglify']);

};