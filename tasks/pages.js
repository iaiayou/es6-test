//处理模板构建脚本文件

import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
	//app目录下所有的ejs文件
	return gulp.src('app/**/*.ejs')
		//将文件拷贝到server目录下
		.pipe(gulp.dest('server'))
		//监听文件热更新
		.pipe(gulpif(args.watch,livereload()))
})