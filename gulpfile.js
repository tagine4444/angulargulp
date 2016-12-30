var gulp      = require('gulp');

// include plug-ins
//var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

var webserver = require('gulp-webserver');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tsconfig = require('./tsconfig.json');


//var appSrc = './app/*.ts';
var    tsSrc  = './process/typescript/**/*.ts';



//gulp webserver
gulp.task('webserver', function() {
  console.log('starting web server Chidra yyy!');
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('typescript', function() {
  console.log('typescript ...');
  gulp.src(tsSrc)
    .pipe(sourcemaps.init())
    .pipe(typescript(tsconfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/js/' ));
});

gulp.task('copylibs', function() {
  console.log('copylibs ...');
  return gulp.src([
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js'
  ]).pipe(gulp.dest('./app/js/lib/angular2' ));

});

gulp.task('css', function() {
  console.log('css ...');
  return gulp.src([
    './process/css/*.css'
  ]).pipe(gulp.dest('./app/css' ));

});


gulp.task('watch', function() {
	// watch for JS changes
  console.log('watch...');
	  gulp.watch(tsSrc, ['typescript']);
});

gulp.task('default',['copylibs','css','typescript','watch','webserver', ], function() {
  // place code for your default task here
  console.log('Hello Chidra again 1');
});
