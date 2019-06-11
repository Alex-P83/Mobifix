var gulp = require('gulp');

var del = require('del');
var concatCss = require('gulp-concat-css');
var concatScripts = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();


gulp.task('sass',function(){
	return gulp.src('app/sass/*.scss')
	.pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: true
    }))	
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.reload({stream:true}))	
});

gulp.task('scripts', function() {
  return gulp.src([
  	'libs/bootstrap/dist/js/bootstrap.js',
  	'libs/fancybox/dist/jquery.fancybox.js',  		
  	'libs/jquery.maskedinput/dist/jquery.maskedinput.js',
		'libs/jquery-validation/dist/jquery.validate.js',
		'libs/slick-carousel/slick/slick.js'					   		  		  		  		   		
  	])
    .pipe(concatScripts('all.js'))
    .pipe(gulp.dest('app/js'));
});

gulp.task('serve',function(){
	browserSync.init({
		server:{
			baseDir:'app'
		},
		notify:false
	});
});

gulp.task('concatCSS', function () {
  return gulp.src([
  	'libs/bootstrap/dist/css/bootstrap.css',
	  'libs/fancybox/dist/jquery.fancybox.css',
	  'libs/slick-carousel/slick/slick.css'  	  	
  	])
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('app/css'));
});

gulp.task('clean',function(){
	return del.sync('dist');
});

gulp.task('assets',function(){
	var buildCSS = gulp.src('app/css/*.*')
	.pipe(gulp.dest('dist/css'));

	var buildHTML = gulp.src('app/index.html')
	.pipe(gulp.dest('dist'));

	var buildIMG = gulp.src('app/images/*.*')
	.pipe(gulp.dest('dist/images'));
	
	var buildJS = gulp.src('app/js/*.*')
	.pipe(gulp.dest('dist/js'));	
})

gulp.task('watch',['serve','sass','concatCSS','scripts'],function(){
	gulp.watch('app/sass/*.scss',['sass']);
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync.reload);	
})

gulp.task('build', ['clean','assets']);
