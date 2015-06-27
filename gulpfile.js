


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
    browserify  = require('gulp-browserify'),
    path        = require('path'),
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

gulp.task('browserify', function() {
  // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
  gulp.src(['public/modules/app.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  // Bundle to a single file
  .pipe(concat('bundle.js'))
  // Output it to our dist folder
  .pipe(gulp.dest('public/dist/src'));
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
    return gulp.src('public/src/bundle.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/dist/src'))
});

//less converter
gulp.task('less', function(){
	return gulp.src('public/modules/**/*.less')
        .pipe(less())
        .pipe(rename(function(filepath) {
          filepath.dirname = "";
        }))
        .pipe(cssmin())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/dist/style'))
        .pipe(reload({ stream:true }));
});

//minify css
gulp.task('cssmin', function () {
    gulp.src('public/dist/style/*.css')
        .pipe(cssmin())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/dist/style'));
});

//Image compressor
gulp.task('imagemin',function(){
   return gulp.src('public/img/**/*.*')
      .pipe(imagemin({  progressive: true}))
      .pipe(gulp.dest('public/dist/img'))
});

gulp.task('default', ['browser-sync'], function () {
  // gulp.watch(['public/img/**.*']   , ['imagemin',reload]);
  // gulp.watch(['public/modules/**/**.*'] , ['angular' , reload]);
  gulp.watch(['public/modules/**/*.js'] , ['browserify' , reload]);
  gulp.watch(['public/modules/**/*.less'] , ['less' , reload]);
  gulp.watch(['public/dist/style/*.css'] , ['cssmin' , reload]);
  gulp.watch(['config/**/**.*', 'server/**/**.*', 'server.js']    , ['nodemon' , reload]);
  gulp.watch(['public/*.html', 'public/modules/**/*.html']).on('change', reload);

});
