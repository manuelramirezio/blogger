var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    nodemon     = require('gulp-nodemon'),
    less        = require('gulp-less'),
    jshint      = require('gulp-jshint'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    imagemin    = require('gulp-imagemin'),
    cssmin      = require('gulp-cssmin');

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
gulp.task('js', function () {
   return gulp.src('public/src/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('public/dist/src'));
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
      .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
      .pipe(gulp.dest('public/dist/img'))
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch(['public/img/**.*'], ['imagemin',reload]);  
  gulp.watch(['public/js/**/*.*'], ['js',reload]);
  gulp.watch(['public/style/*.*'], ['cssmin',reload]);
  gulp.watch(['public/vendor/*.*'], [reload]);
  gulp.watch(['public/views/*.*'], [reload]);
  gulp.watch(['server/**/*.*'], [reload]);
  gulp.watch(['public/index.html'],[reload])
});