var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    nodemon     = require('gulp-nodemon'),
    less        = require('gulp-less'),
    jshint      = require('gulp-jshint'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    imagemin    = require('gulp-imagemin'),
    cssmin      = require('gulp-cssmin'),
    rename      = require('gulp-rename'),
    ngmin       = require('gulp-ngmin'),
    ngAnnotate  = require('gulp-ng-annotate'),
    sourcemaps  = require('gulp-sourcemaps'),
    reload      = browserSync.reload

/**
 * Gulp Tasks
 */
 
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: "localhost:5000",  // local node app address
    port: 5001,  // use *different* port than above
    notify: true
  });
});
 
gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'server.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 1000);
  });
});

//for javscript files
// gulp.task('jquery', function () {
//    return gulp.src('public/assets/js/custom/*.js')
//       .pipe(jshint())
//       .pipe(jshint.reporter('default'))
//       .pipe(concat('customApp.min.js'))
//       .pipe(uglify())
//       .pipe(gulp.dest('public/dist/src'));
// });

// angular minify  
gulp.task('angular', function () {
    return gulp.src('public/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/dist/src'))
});

//less converter
gulp.task('less',function(){
	return gulp.src('public/style/*.less')
        .pipe(less())
        .pipe(gulp.dest('public/style'))
        .pipe(reload({ stream:true }));
});

//minify css
gulp.task('cssmin', ['less'] ,function () {
    gulp.src('public/style/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/dist/style'));
});

//Image compressor
gulp.task('imagemin',function(){
   return gulp.src('public/img/**/*.*')
      .pipe(imagemin({  progressive: true}))
      .pipe(gulp.dest('public/dist/img'))
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch(['public/img/**.*'], ['imagemin',reload]);
  gulp.watch(['public/js/**/**.*'] , ['angular' , reload]);
  gulp.watch(['public/style/**.*'] , ['cssmin' , reload]);
  gulp.watch(['public/views/**.*'] , ['less' , reload]);
  gulp.watch(['server/**/**.*'] , ['nodemon' , reload]);
  gulp.watch(['public/*.html'] , ['less' , reload]);
});