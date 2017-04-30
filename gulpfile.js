
// 此处代码都是node执行
// 载入gulp模块
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

//注册一个新的任务

// 注册一个新的内容
gulp.task('copy',function(){
	// 当gulp执行这个say任务时会自动执行该函数
	// console.log('hello world');
	gulp.src('src/server1.js').pipe(gulp.dest('dist/'));

	

});
// 地方
gulp.task('dist',function(){
		gulp.watch('src/server1.js',['copy']);
		gulp.watch('less/*.less',['styles']);
	});

gulp.task('styles',function(){
	return gulp.src('less/*.less')
	.pipe(less())  //该环节执行过后就是css文件
	.pipe(cssnano())
	.pipe(gulp.dest('dist/'));

})

gulp